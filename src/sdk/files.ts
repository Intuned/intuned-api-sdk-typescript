/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { ExtractMarkdown } from "./extractmarkdown.js";
import { ExtractStructuredData } from "./extractstructureddata.js";
import { ExtractTables } from "./extracttables.js";

export class Files extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _extractStructuredData?: ExtractStructuredData;
    get extractStructuredData(): ExtractStructuredData {
        return (this._extractStructuredData ??= new ExtractStructuredData(this.options$));
    }

    private _extractMarkdown?: ExtractMarkdown;
    get extractMarkdown(): ExtractMarkdown {
        return (this._extractMarkdown ??= new ExtractMarkdown(this.options$));
    }

    private _extractTables?: ExtractTables;
    get extractTables(): ExtractTables {
        return (this._extractTables ??= new ExtractTables(this.options$));
    }
}
