import { IntunedClient } from "./src/index";
import {
  AuthSessionCreateDoneResult,
  AuthSessionCreateFailedResult,
  AuthSessionCreateResult,
  FileSource,
  FileT,
} from "./src/models/components";

async function testJobs(client: IntunedClient, projectName: string) {
  const jobId = "this-is-a-test";
  const jobs = client.project.jobs;
  await jobs.delete(projectName, jobId).catch(() => {});
  const allJobs = await jobs.all(projectName);
  console.log("Get all jobs", allJobs);
  const job = await jobs.create(projectName, {
    id: jobId,
    configuration: {
      runMode: "Order-Irrelevant",
    },
    sink: {
      type: "webhook",
      url: "https://webhook.site/7f1b3b7b-1b7b-4b7b-8b7b-9b7b7b7b7b7b",
      headers: {
        test: "test",
      },
    },
    payload: [
      {
        apiName: "api",
        parameters: {},
      },
    ],
  });
  console.log("Create job", job);
  const getJob = await jobs.one(projectName, jobId);
  console.log("Get job", getJob);
  const triggerJob1 = await jobs.trigger(projectName, jobId);
  console.log("Trigger job 1", triggerJob1);
  const runs1 = await jobs.runs.all(projectName, jobId);
  console.log("Get runs 1", runs1);
  const pauseJob = await jobs.pause(projectName, jobId);
  console.log("Pause job", pauseJob);
  const getJob2 = await jobs.one(projectName, jobId);
  console.log("Get job 2", getJob2);
  const triggerJob2 = await jobs
    .trigger(projectName, jobId)
    .catch((error) => error);
  console.log("Trigger job 2", triggerJob2);
  const resumeJob = await jobs.resume(projectName, jobId);
  console.log("Resume job", resumeJob);
  const triggerJob3 = await jobs
    .trigger(projectName, jobId)
    .catch((error) => error);
  console.log("Trigger job 3", triggerJob3);
  const runs2 = await jobs.runs.all(projectName, jobId);
  console.log("Get runs 2", runs2);
  runs2.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  const lastRun = runs2[runs2.length - 1];
  const terminateRun = await jobs.runs.terminate(
    projectName,
    jobId,
    lastRun!.id
  );
  console.log("Terminate run", terminateRun);
  const deleteJob = await jobs.delete(projectName, jobId);
  console.log("Delete job", deleteJob);
}

async function testQueues(client: IntunedClient, projectName: string) {
  const queueId = "this-is-a-test";
  const queues = client.project.queues;
  const hmm = await queues.delete(projectName, queueId);
  console.log("Delete queue", hmm);
  const allQueues = await queues.all(projectName);
  console.log("Get all queues", allQueues);
  const queue = await queues.create(projectName, {
    id: queueId,
    configuration: {
      runMode: "Default",
    },
    name: "Test Queue",
  });
  console.log("Create queue", queue);
  const getQueue = await queues.one(projectName, queueId);
  console.log("Get queue", getQueue);
  const appendItem = await queues.items.append(projectName, queueId, {
    apiName: "api",
    parameters: {},
  });
  console.log("Append item", appendItem);
  // const deleteItem = await queues.items.delete(projectName, queueId, appendItem.runId);
  // console.log("Delete item", deleteItem);
  async function appendAndGetResult(apiName: string) {
    const appendItem = await queues.items.append(projectName, queueId, {
      apiName,
      parameters: {},
    });
    console.log("Append item", appendItem);
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const getResult = await queues.items.result(
        projectName,
        queueId,
        appendItem.runId
      );
      console.log("Get result", getResult);
      if (getResult.status === "completed" || getResult.status === "failed") {
        break;
      }
    }

    return appendItem.runId;
  }

  const [appendSuccess, appendFail] = await Promise.all([
    appendAndGetResult("api"),
    appendAndGetResult("api2"),
  ]);
  await queues.items
    .delete(projectName, queueId, appendSuccess)
    .catch((error) => console.log("Delete success item", error));
  await queues.items
    .delete(projectName, queueId, appendFail)
    .catch((error) => console.log("Delete fail item", error));

  const repeatItemAppend = await queues.repeatItems.append(
    projectName,
    queueId,
    {
      apiName: "api",
      parameters: {},
      repeat: "10 minutes",
    }
  );
  console.log("Repeat item append", repeatItemAppend);
  const repeatItemsGet = await queues.repeatItems.all(projectName, queueId);
  console.log("Get repeat items", repeatItemsGet);

  const repeatItemUpdate = await queues.repeatItems.update(
    projectName,
    queueId,
    repeatItemAppend.id,
    {
      apiName: "api",
      parameters: {},
      repeat: "20 minutes",
    }
  );
  console.log("Repeat item update", repeatItemUpdate);
  const repeatItemDelete = await queues.repeatItems.delete(
    projectName,
    queueId,
    repeatItemAppend.id
  );
  console.log("Repeat item delete", repeatItemDelete);
  const deleteQueue = await queues.delete(projectName, queueId);
  console.log("Delete queue", deleteQueue);
}

async function testRun(client: IntunedClient, projectName: string) {
  const run = client.project.run;
  async function sync() {
    const syncRun = await run.sync(projectName, {
      api: "api",
      parameters: {},
    });
    console.log("Sync run", syncRun);
  }
  async function async() {
    const startRun = await run.start(projectName, {
      api: "api",
      parameters: {},
    });
    console.log("Start run", startRun);
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const getRun = await run.result(projectName, startRun.runId);
      console.log("Get run", getRun);
      if (getRun.status === "completed" || getRun.status === "failed") {
        break;
      }
    }
  }
  await Promise.all([sync(), async()]);
}

const xx = {};
type x = typeof xx;

async function testAuthSessions(client: IntunedClient, projectName: string) {
  const authSessions = client.project.authSessions;
  const startCreate = await authSessions.create.start(projectName, {
    authSessionDisplayName: "Test Auth Session",
    parameters: {
      test: "",
    },
  });

  console.log("Start create auth session", startCreate);
  let previousResult: AuthSessionCreateResult | undefined;
  let result: AuthSessionCreateDoneResult | AuthSessionCreateFailedResult;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    if (previousResult === undefined || previousResult.status === "pending") {
      const getCreate = await authSessions.create.result(
        projectName,
        startCreate.operationId!
      );
      console.log("Get create auth session", getCreate);
      previousResult = getCreate;
      continue;
    }
    if (previousResult.status === "requested_more_info") {
      const resumeCreate = await authSessions.create.resume(
        projectName,
        startCreate.operationId!,
        {
          infoRequestId: previousResult.id,
          input: "anything",
        }
      );
      console.log("Resume create", resumeCreate);
      previousResult = undefined;
      continue;
    }
    result = previousResult;
    break;
  }

  const getAll = await authSessions.all(projectName);
  console.log("Get all auth sessions", getAll);

  if (result.status === "failed") {
    return;
  }

  const getOne = await authSessions.one(projectName, result.authSessionId);
  console.log("Get one auth session", getOne);

  const deleteR = await authSessions.delete(projectName, result.authSessionId);
  console.log("Delete auth session", deleteR);
}

async function testFiles(client: IntunedClient) {
  const files = client.files;
  const source: FileSource = {
    type: "url",
    data: "https://github.com/Intuned/file-api-eval/blob/main/pdf/pdf_example.pdf?raw=true",
  };
  const file: FileT = {
    type: "pdf",
    source,
  };

  async function markdownSync() {
    const sync = await files.extractMarkdown.sync(file);
    console.log("Markdown sync", sync);
  }

  async function markdownAsync() {
    const start = await files.extractMarkdown.start(file);
    console.log("Markdown start", start);
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const get = await files.extractMarkdown.result(start.operationId);
      console.log("Markdown get", get);
      if (get.status === "completed" || get.status === "failed") {
        break;
      }
    }
  }

  async function tablesSync() {
    const sync = await files.extractTables.sync(file);
    console.log("Tables sync", sync);
  }

  async function tablesAsync() {
    const start = await files.extractTables.start(file);
    console.log("Tables start", start);
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const get = await files.extractTables.result(start.operationId);
      console.log("Tables get", get);
      if (get.status === "completed" || get.status === "failed") {
        break;
      }
    }
  }

  const dataSchema = {
    type: "object",
    required: ["materialOrService", "title", "contractId"],
    properties: {
      materialOrService: {
        type: "string",
        enum: ["Material", "Service"],
        description: "Material or Service",
      },
      title: {
        type: "string",
      },
      contractIds: {
        type: "array",
        items: {
          type: "string",
        },
      },
      numberOfSuppliers: {
        type: "number",
      },
      pCardEnabled: {
        type: "boolean",
      },
      pCardAccepted: {
        type: "boolean",
      },
      mscc: {
        type: "boolean",
      },
      validityPeriod: {
        type: "object",
        required: ["start", "end"],
        properties: {
          start: {
            type: "string",
            format: "date",
          },
          end: {
            type: "string",
            format: "date",
          },
        },
      },
      pointOfContact: {
        type: "string",
      },
      contactPhoneNumber: {
        type: "string",
      },
      email: {
        type: "string",
        format: "email",
      },
    },
  };

  async function dataSync() {
    const sync = await files.extractStructuredData.sync(file, dataSchema);
    console.log("Data sync", sync);
  }

  async function dataAsync() {
    const start = await files.extractStructuredData.start(file, dataSchema);
    console.log("Data start", start);
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const get = await files.extractStructuredData.result(start.operationId);
      console.log("Data get", get);
      if (get.status === "completed" || get.status === "failed") {
        break;
      }
    }
  }

  await Promise.all([
    markdownSync(),
    markdownAsync(),
    tablesSync(),
    tablesAsync(),
    dataSync(),
    dataAsync(),
  ]);
}

async function main() {
  const client = new IntunedClient({
    serverURL: "http://localhost:3000/api/v1/workspace",
    workspaceId: "02cf6e04-8cbd-4e57-b5bd-0236b00001c3",
    apiKey: "in1_de24eb30ff4f4decd2913a1bf80b95d0",
  });

  // const projectName = 'queue-test-integration';
  await testJobs(client, "ok");
  testQueues;
  testRun;
  testFiles;
  // await testAuthSessions(client, "another-test");
}

main();
