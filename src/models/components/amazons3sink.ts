/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AmazonS3SinkType = {
    S3: "s3",
} as const;
export type AmazonS3SinkType = ClosedEnum<typeof AmazonS3SinkType>;

/**
 * Amazon S3 bucket sink configuration
 */
export type AmazonS3Sink = {
    type: AmazonS3SinkType;
    /**
     * The S3 bucket region
     */
    region: string;
    /**
     * The S3 bucket name
     */
    bucket: string;
    /**
     * Access key ID for the IAM user to use the bucket. The IAM user has to have write permissions to the bucket.
     */
    accessKeyId: string;
    /**
     * Secret access key of the IAM user to use the bucket.
     */
    secretAccessKey: string;
    /**
     * A prefix added to the key of the file to be written. This can be used to define a folder where all results are stored.
     */
    prefix?: string | undefined;
    /**
     * If enabled, failed payload runs will ***not*** be written to the bucket.
     */
    skipOnFail?: boolean | undefined;
};

/** @internal */
export namespace AmazonS3SinkType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AmazonS3SinkType> =
        z.nativeEnum(AmazonS3SinkType);
    export const outboundSchema: z.ZodNativeEnum<typeof AmazonS3SinkType> = inboundSchema;
}

/** @internal */
export namespace AmazonS3Sink$ {
    export const inboundSchema: z.ZodType<AmazonS3Sink, z.ZodTypeDef, unknown> = z.object({
        type: AmazonS3SinkType$.inboundSchema,
        region: z.string(),
        bucket: z.string(),
        accessKeyId: z.string(),
        secretAccessKey: z.string(),
        prefix: z.string().optional(),
        skipOnFail: z.boolean().default(false),
    });

    export type Outbound = {
        type: string;
        region: string;
        bucket: string;
        accessKeyId: string;
        secretAccessKey: string;
        prefix?: string | undefined;
        skipOnFail: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AmazonS3Sink> = z.object({
        type: AmazonS3SinkType$.outboundSchema,
        region: z.string(),
        bucket: z.string(),
        accessKeyId: z.string(),
        secretAccessKey: z.string(),
        prefix: z.string().optional(),
        skipOnFail: z.boolean().default(false),
    });
}
