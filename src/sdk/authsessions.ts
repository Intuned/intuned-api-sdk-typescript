/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectAuthSessionsAll } from "../funcs/projectAuthSessionsAll.js";
import { projectAuthSessionsDelete } from "../funcs/projectAuthSessionsDelete.js";
import { projectAuthSessionsOne } from "../funcs/projectAuthSessionsOne.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Create } from "./create.js";
import { Recorder } from "./recorder.js";

export class AuthSessions extends ClientSDK {
    private _create?: Create;
    get create(): Create {
        return (this._create ??= new Create(this.options$));
    }

    private _recorder?: Recorder;
    get recorder(): Recorder {
        return (this._recorder ??= new Recorder(this.options$));
    }

    /**
     * Get Auth Sessions
     *
     * @remarks
     * Gets all authentication sessions of project
     */
    async all(
        projectName: string,
        options?: RequestOptions
    ): Promise<Array<components.AuthSessionInfo>> {
        return unwrapAsync(projectAuthSessionsAll(this, projectName, options));
    }

    /**
     * Get Auth Session
     *
     * @remarks
     * Gets authentication session of project by ID
     */
    async one(
        projectName: string,
        authSessionId: string,
        options?: RequestOptions
    ): Promise<components.AuthSessionInfo> {
        return unwrapAsync(projectAuthSessionsOne(this, projectName, authSessionId, options));
    }

    /**
     * Delete Auth Session
     *
     * @remarks
     * Deletes an authentication session by ID.
     */
    async delete(
        projectName: string,
        authSessionId: string,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(projectAuthSessionsDelete(this, projectName, authSessionId, options));
    }
}
