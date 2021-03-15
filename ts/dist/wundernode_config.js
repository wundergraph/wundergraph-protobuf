"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsConfiguration = exports.UserDefinedApi = exports.WunderGraphConfiguration = exports.WunderNodeMetrics = exports.DataUsageMetric = exports.ArgumentConfiguration = exports.TypeField = exports.FieldConfiguration = exports.HTTPHeader = exports.URLQueryConfiguration = exports.RESTSubscriptionConfiguration = exports.FetchConfiguration_HeaderEntry = exports.FetchConfiguration = exports.GraphQLSubscriptionConfiguration = exports.DataSourceCustomStatic = exports.GraphQLFederationConfiguration = exports.DataSourceCustomGraphQL = exports.DataSourceCustomREST = exports.DataSourceConfiguration = exports.EngineConfiguration = exports.OperationMock = exports.OperationCacheConfig = exports.Operation = exports.RedisCacheConfig = exports.InMemoryCacheConfig = exports.ApiCacheConfig = exports.Api = exports.Logging = exports.Certificate = exports.Server = exports.WunderNodeConfig = exports.argumentSourceToJSON = exports.argumentSourceFromJSON = exports.ArgumentSource = exports.hTTPMethodToJSON = exports.hTTPMethodFromJSON = exports.HTTPMethod = exports.dataSourceKindToJSON = exports.dataSourceKindFromJSON = exports.DataSourceKind = exports.operationTypeToJSON = exports.operationTypeFromJSON = exports.OperationType = exports.apiCacheKindToJSON = exports.apiCacheKindFromJSON = exports.ApiCacheKind = exports.logLevelToJSON = exports.logLevelFromJSON = exports.LogLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const duration_1 = require("./google/protobuf/duration");
exports.protobufPackage = "wgpb";
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 3] = "WARNING";
    LogLevel[LogLevel["PANIC"] = 4] = "PANIC";
    LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function logLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "DEBUG":
            return LogLevel.DEBUG;
        case 1:
        case "INFO":
            return LogLevel.INFO;
        case 2:
        case "ERROR":
            return LogLevel.ERROR;
        case 3:
        case "WARNING":
            return LogLevel.WARNING;
        case 4:
        case "PANIC":
            return LogLevel.PANIC;
        case 5:
        case "FATAL":
            return LogLevel.FATAL;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum LogLevel");
    }
}
exports.logLevelFromJSON = logLevelFromJSON;
function logLevelToJSON(object) {
    switch (object) {
        case LogLevel.DEBUG:
            return "DEBUG";
        case LogLevel.INFO:
            return "INFO";
        case LogLevel.ERROR:
            return "ERROR";
        case LogLevel.WARNING:
            return "WARNING";
        case LogLevel.PANIC:
            return "PANIC";
        case LogLevel.FATAL:
            return "FATAL";
        default:
            return "UNKNOWN";
    }
}
exports.logLevelToJSON = logLevelToJSON;
var ApiCacheKind;
(function (ApiCacheKind) {
    ApiCacheKind[ApiCacheKind["NO_CACHE"] = 0] = "NO_CACHE";
    ApiCacheKind[ApiCacheKind["IN_MEMORY_CACHE"] = 1] = "IN_MEMORY_CACHE";
    ApiCacheKind[ApiCacheKind["REDIS_CACHE"] = 2] = "REDIS_CACHE";
})(ApiCacheKind = exports.ApiCacheKind || (exports.ApiCacheKind = {}));
function apiCacheKindFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_CACHE":
            return ApiCacheKind.NO_CACHE;
        case 1:
        case "IN_MEMORY_CACHE":
            return ApiCacheKind.IN_MEMORY_CACHE;
        case 2:
        case "REDIS_CACHE":
            return ApiCacheKind.REDIS_CACHE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ApiCacheKind");
    }
}
exports.apiCacheKindFromJSON = apiCacheKindFromJSON;
function apiCacheKindToJSON(object) {
    switch (object) {
        case ApiCacheKind.NO_CACHE:
            return "NO_CACHE";
        case ApiCacheKind.IN_MEMORY_CACHE:
            return "IN_MEMORY_CACHE";
        case ApiCacheKind.REDIS_CACHE:
            return "REDIS_CACHE";
        default:
            return "UNKNOWN";
    }
}
exports.apiCacheKindToJSON = apiCacheKindToJSON;
var OperationType;
(function (OperationType) {
    OperationType[OperationType["QUERY"] = 0] = "QUERY";
    OperationType[OperationType["MUTATION"] = 1] = "MUTATION";
    OperationType[OperationType["SUBSCRIPTION"] = 2] = "SUBSCRIPTION";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
function operationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "QUERY":
            return OperationType.QUERY;
        case 1:
        case "MUTATION":
            return OperationType.MUTATION;
        case 2:
        case "SUBSCRIPTION":
            return OperationType.SUBSCRIPTION;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum OperationType");
    }
}
exports.operationTypeFromJSON = operationTypeFromJSON;
function operationTypeToJSON(object) {
    switch (object) {
        case OperationType.QUERY:
            return "QUERY";
        case OperationType.MUTATION:
            return "MUTATION";
        case OperationType.SUBSCRIPTION:
            return "SUBSCRIPTION";
        default:
            return "UNKNOWN";
    }
}
exports.operationTypeToJSON = operationTypeToJSON;
var DataSourceKind;
(function (DataSourceKind) {
    DataSourceKind[DataSourceKind["STATIC"] = 0] = "STATIC";
    DataSourceKind[DataSourceKind["REST"] = 1] = "REST";
    DataSourceKind[DataSourceKind["GRAPHQL"] = 2] = "GRAPHQL";
})(DataSourceKind = exports.DataSourceKind || (exports.DataSourceKind = {}));
function dataSourceKindFromJSON(object) {
    switch (object) {
        case 0:
        case "STATIC":
            return DataSourceKind.STATIC;
        case 1:
        case "REST":
            return DataSourceKind.REST;
        case 2:
        case "GRAPHQL":
            return DataSourceKind.GRAPHQL;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum DataSourceKind");
    }
}
exports.dataSourceKindFromJSON = dataSourceKindFromJSON;
function dataSourceKindToJSON(object) {
    switch (object) {
        case DataSourceKind.STATIC:
            return "STATIC";
        case DataSourceKind.REST:
            return "REST";
        case DataSourceKind.GRAPHQL:
            return "GRAPHQL";
        default:
            return "UNKNOWN";
    }
}
exports.dataSourceKindToJSON = dataSourceKindToJSON;
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
    HTTPMethod[HTTPMethod["PUT"] = 2] = "PUT";
    HTTPMethod[HTTPMethod["DELETE"] = 3] = "DELETE";
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
function hTTPMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "GET":
            return HTTPMethod.GET;
        case 1:
        case "POST":
            return HTTPMethod.POST;
        case 2:
        case "PUT":
            return HTTPMethod.PUT;
        case 3:
        case "DELETE":
            return HTTPMethod.DELETE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum HTTPMethod");
    }
}
exports.hTTPMethodFromJSON = hTTPMethodFromJSON;
function hTTPMethodToJSON(object) {
    switch (object) {
        case HTTPMethod.GET:
            return "GET";
        case HTTPMethod.POST:
            return "POST";
        case HTTPMethod.PUT:
            return "PUT";
        case HTTPMethod.DELETE:
            return "DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.hTTPMethodToJSON = hTTPMethodToJSON;
var ArgumentSource;
(function (ArgumentSource) {
    ArgumentSource[ArgumentSource["OBJECT_FIELD"] = 0] = "OBJECT_FIELD";
    ArgumentSource[ArgumentSource["FIELD_ARGUMENT"] = 1] = "FIELD_ARGUMENT";
})(ArgumentSource = exports.ArgumentSource || (exports.ArgumentSource = {}));
function argumentSourceFromJSON(object) {
    switch (object) {
        case 0:
        case "OBJECT_FIELD":
            return ArgumentSource.OBJECT_FIELD;
        case 1:
        case "FIELD_ARGUMENT":
            return ArgumentSource.FIELD_ARGUMENT;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ArgumentSource");
    }
}
exports.argumentSourceFromJSON = argumentSourceFromJSON;
function argumentSourceToJSON(object) {
    switch (object) {
        case ArgumentSource.OBJECT_FIELD:
            return "OBJECT_FIELD";
        case ArgumentSource.FIELD_ARGUMENT:
            return "FIELD_ARGUMENT";
        default:
            return "UNKNOWN";
    }
}
exports.argumentSourceToJSON = argumentSourceToJSON;
const baseWunderNodeConfig = {};
exports.WunderNodeConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.server !== undefined) {
            exports.Server.encode(message.server, writer.uint32(10).fork()).ldelim();
        }
        if (message.logging !== undefined) {
            exports.Logging.encode(message.logging, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.apis) {
            exports.Api.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseWunderNodeConfig);
        message.apis = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.server = exports.Server.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.logging = exports.Logging.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.apis.push(exports.Api.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseWunderNodeConfig);
        message.apis = [];
        if (object.server !== undefined && object.server !== null) {
            message.server = exports.Server.fromJSON(object.server);
        }
        else {
            message.server = undefined;
        }
        if (object.logging !== undefined && object.logging !== null) {
            message.logging = exports.Logging.fromJSON(object.logging);
        }
        else {
            message.logging = undefined;
        }
        if (object.apis !== undefined && object.apis !== null) {
            for (const e of object.apis) {
                message.apis.push(exports.Api.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseWunderNodeConfig };
        message.apis = [];
        if (object.server !== undefined && object.server !== null) {
            message.server = exports.Server.fromPartial(object.server);
        }
        else {
            message.server = undefined;
        }
        if (object.logging !== undefined && object.logging !== null) {
            message.logging = exports.Logging.fromPartial(object.logging);
        }
        else {
            message.logging = undefined;
        }
        if (object.apis !== undefined && object.apis !== null) {
            for (const e of object.apis) {
                message.apis.push(exports.Api.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.server !== undefined &&
            (obj.server = message.server ? exports.Server.toJSON(message.server) : undefined);
        message.logging !== undefined &&
            (obj.logging = message.logging
                ? exports.Logging.toJSON(message.logging)
                : undefined);
        if (message.apis) {
            obj.apis = message.apis.map((e) => (e ? exports.Api.toJSON(e) : undefined));
        }
        else {
            obj.apis = [];
        }
        return obj;
    },
};
const baseServer = {};
exports.Server = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.gracefulShutdownTimeout !== undefined) {
            duration_1.Duration.encode(message.gracefulShutdownTimeout, writer.uint32(10).fork()).ldelim();
        }
        if (message.keepAlive !== undefined) {
            duration_1.Duration.encode(message.keepAlive, writer.uint32(18).fork()).ldelim();
        }
        if (message.readTimeout !== undefined) {
            duration_1.Duration.encode(message.readTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.writeTimeout !== undefined) {
            duration_1.Duration.encode(message.writeTimeout, writer.uint32(34).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            duration_1.Duration.encode(message.idleTimeout, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.certificates) {
            exports.Certificate.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseServer);
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gracefulShutdownTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.keepAlive = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.readTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.writeTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.idleTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.certificates.push(exports.Certificate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseServer);
        message.certificates = [];
        if (object.gracefulShutdownTimeout !== undefined &&
            object.gracefulShutdownTimeout !== null) {
            message.gracefulShutdownTimeout = duration_1.Duration.fromJSON(object.gracefulShutdownTimeout);
        }
        else {
            message.gracefulShutdownTimeout = undefined;
        }
        if (object.keepAlive !== undefined && object.keepAlive !== null) {
            message.keepAlive = duration_1.Duration.fromJSON(object.keepAlive);
        }
        else {
            message.keepAlive = undefined;
        }
        if (object.readTimeout !== undefined && object.readTimeout !== null) {
            message.readTimeout = duration_1.Duration.fromJSON(object.readTimeout);
        }
        else {
            message.readTimeout = undefined;
        }
        if (object.writeTimeout !== undefined && object.writeTimeout !== null) {
            message.writeTimeout = duration_1.Duration.fromJSON(object.writeTimeout);
        }
        else {
            message.writeTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = duration_1.Duration.fromJSON(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.Certificate.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseServer };
        message.certificates = [];
        if (object.gracefulShutdownTimeout !== undefined &&
            object.gracefulShutdownTimeout !== null) {
            message.gracefulShutdownTimeout = duration_1.Duration.fromPartial(object.gracefulShutdownTimeout);
        }
        else {
            message.gracefulShutdownTimeout = undefined;
        }
        if (object.keepAlive !== undefined && object.keepAlive !== null) {
            message.keepAlive = duration_1.Duration.fromPartial(object.keepAlive);
        }
        else {
            message.keepAlive = undefined;
        }
        if (object.readTimeout !== undefined && object.readTimeout !== null) {
            message.readTimeout = duration_1.Duration.fromPartial(object.readTimeout);
        }
        else {
            message.readTimeout = undefined;
        }
        if (object.writeTimeout !== undefined && object.writeTimeout !== null) {
            message.writeTimeout = duration_1.Duration.fromPartial(object.writeTimeout);
        }
        else {
            message.writeTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = duration_1.Duration.fromPartial(object.idleTimeout);
        }
        else {
            message.idleTimeout = undefined;
        }
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.Certificate.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gracefulShutdownTimeout !== undefined &&
            (obj.gracefulShutdownTimeout = message.gracefulShutdownTimeout
                ? duration_1.Duration.toJSON(message.gracefulShutdownTimeout)
                : undefined);
        message.keepAlive !== undefined &&
            (obj.keepAlive = message.keepAlive
                ? duration_1.Duration.toJSON(message.keepAlive)
                : undefined);
        message.readTimeout !== undefined &&
            (obj.readTimeout = message.readTimeout
                ? duration_1.Duration.toJSON(message.readTimeout)
                : undefined);
        message.writeTimeout !== undefined &&
            (obj.writeTimeout = message.writeTimeout
                ? duration_1.Duration.toJSON(message.writeTimeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? duration_1.Duration.toJSON(message.idleTimeout)
                : undefined);
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
};
const baseCertificate = { keyPem: "", certPem: "" };
exports.Certificate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.keyPem !== "") {
            writer.uint32(18).string(message.keyPem);
        }
        if (message.certPem !== "") {
            writer.uint32(26).string(message.certPem);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.keyPem = reader.string();
                    break;
                case 3:
                    message.certPem = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseCertificate);
        if (object.keyPem !== undefined && object.keyPem !== null) {
            message.keyPem = String(object.keyPem);
        }
        else {
            message.keyPem = "";
        }
        if (object.certPem !== undefined && object.certPem !== null) {
            message.certPem = String(object.certPem);
        }
        else {
            message.certPem = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseCertificate };
        if (object.keyPem !== undefined && object.keyPem !== null) {
            message.keyPem = object.keyPem;
        }
        else {
            message.keyPem = "";
        }
        if (object.certPem !== undefined && object.certPem !== null) {
            message.certPem = object.certPem;
        }
        else {
            message.certPem = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyPem !== undefined && (obj.keyPem = message.keyPem);
        message.certPem !== undefined && (obj.certPem = message.certPem);
        return obj;
    },
};
const baseLogging = { level: 0 };
exports.Logging = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseLogging);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseLogging);
        if (object.level !== undefined && object.level !== null) {
            message.level = logLevelFromJSON(object.level);
        }
        else {
            message.level = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseLogging };
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.level !== undefined && (obj.level = logLevelToJSON(message.level));
        return obj;
    },
};
const baseApi = {
    hosts: "",
    pathPrefix: "",
    enableSingleFlight: false,
    enableGraphqlEndpoint: false,
    primaryHost: "",
    deploymentId: "",
    apiConfigHash: "",
};
exports.Api = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.hosts) {
            writer.uint32(10).string(v);
        }
        if (message.pathPrefix !== "") {
            writer.uint32(18).string(message.pathPrefix);
        }
        if (message.engineConfiguration !== undefined) {
            exports.EngineConfiguration.encode(message.engineConfiguration, writer.uint32(26).fork()).ldelim();
        }
        if (message.enableSingleFlight === true) {
            writer.uint32(32).bool(message.enableSingleFlight);
        }
        if (message.enableGraphqlEndpoint === true) {
            writer.uint32(40).bool(message.enableGraphqlEndpoint);
        }
        for (const v of message.operations) {
            exports.Operation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.corsConfiguration !== undefined) {
            exports.CorsConfiguration.encode(message.corsConfiguration, writer.uint32(58).fork()).ldelim();
        }
        if (message.primaryHost !== "") {
            writer.uint32(66).string(message.primaryHost);
        }
        if (message.deploymentId !== "") {
            writer.uint32(74).string(message.deploymentId);
        }
        if (message.cacheConfig !== undefined) {
            exports.ApiCacheConfig.encode(message.cacheConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.apiConfigHash !== "") {
            writer.uint32(90).string(message.apiConfigHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseApi);
        message.hosts = [];
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(reader.string());
                    break;
                case 2:
                    message.pathPrefix = reader.string();
                    break;
                case 3:
                    message.engineConfiguration = exports.EngineConfiguration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.enableSingleFlight = reader.bool();
                    break;
                case 5:
                    message.enableGraphqlEndpoint = reader.bool();
                    break;
                case 6:
                    message.operations.push(exports.Operation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.corsConfiguration = exports.CorsConfiguration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.primaryHost = reader.string();
                    break;
                case 9:
                    message.deploymentId = reader.string();
                    break;
                case 10:
                    message.cacheConfig = exports.ApiCacheConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.apiConfigHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseApi);
        message.hosts = [];
        message.operations = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(String(e));
            }
        }
        if (object.pathPrefix !== undefined && object.pathPrefix !== null) {
            message.pathPrefix = String(object.pathPrefix);
        }
        else {
            message.pathPrefix = "";
        }
        if (object.engineConfiguration !== undefined &&
            object.engineConfiguration !== null) {
            message.engineConfiguration = exports.EngineConfiguration.fromJSON(object.engineConfiguration);
        }
        else {
            message.engineConfiguration = undefined;
        }
        if (object.enableSingleFlight !== undefined &&
            object.enableSingleFlight !== null) {
            message.enableSingleFlight = Boolean(object.enableSingleFlight);
        }
        else {
            message.enableSingleFlight = false;
        }
        if (object.enableGraphqlEndpoint !== undefined &&
            object.enableGraphqlEndpoint !== null) {
            message.enableGraphqlEndpoint = Boolean(object.enableGraphqlEndpoint);
        }
        else {
            message.enableGraphqlEndpoint = false;
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(exports.Operation.fromJSON(e));
            }
        }
        if (object.corsConfiguration !== undefined &&
            object.corsConfiguration !== null) {
            message.corsConfiguration = exports.CorsConfiguration.fromJSON(object.corsConfiguration);
        }
        else {
            message.corsConfiguration = undefined;
        }
        if (object.primaryHost !== undefined && object.primaryHost !== null) {
            message.primaryHost = String(object.primaryHost);
        }
        else {
            message.primaryHost = "";
        }
        if (object.deploymentId !== undefined && object.deploymentId !== null) {
            message.deploymentId = String(object.deploymentId);
        }
        else {
            message.deploymentId = "";
        }
        if (object.cacheConfig !== undefined && object.cacheConfig !== null) {
            message.cacheConfig = exports.ApiCacheConfig.fromJSON(object.cacheConfig);
        }
        else {
            message.cacheConfig = undefined;
        }
        if (object.apiConfigHash !== undefined && object.apiConfigHash !== null) {
            message.apiConfigHash = String(object.apiConfigHash);
        }
        else {
            message.apiConfigHash = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseApi };
        message.hosts = [];
        message.operations = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(e);
            }
        }
        if (object.pathPrefix !== undefined && object.pathPrefix !== null) {
            message.pathPrefix = object.pathPrefix;
        }
        else {
            message.pathPrefix = "";
        }
        if (object.engineConfiguration !== undefined &&
            object.engineConfiguration !== null) {
            message.engineConfiguration = exports.EngineConfiguration.fromPartial(object.engineConfiguration);
        }
        else {
            message.engineConfiguration = undefined;
        }
        if (object.enableSingleFlight !== undefined &&
            object.enableSingleFlight !== null) {
            message.enableSingleFlight = object.enableSingleFlight;
        }
        else {
            message.enableSingleFlight = false;
        }
        if (object.enableGraphqlEndpoint !== undefined &&
            object.enableGraphqlEndpoint !== null) {
            message.enableGraphqlEndpoint = object.enableGraphqlEndpoint;
        }
        else {
            message.enableGraphqlEndpoint = false;
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(exports.Operation.fromPartial(e));
            }
        }
        if (object.corsConfiguration !== undefined &&
            object.corsConfiguration !== null) {
            message.corsConfiguration = exports.CorsConfiguration.fromPartial(object.corsConfiguration);
        }
        else {
            message.corsConfiguration = undefined;
        }
        if (object.primaryHost !== undefined && object.primaryHost !== null) {
            message.primaryHost = object.primaryHost;
        }
        else {
            message.primaryHost = "";
        }
        if (object.deploymentId !== undefined && object.deploymentId !== null) {
            message.deploymentId = object.deploymentId;
        }
        else {
            message.deploymentId = "";
        }
        if (object.cacheConfig !== undefined && object.cacheConfig !== null) {
            message.cacheConfig = exports.ApiCacheConfig.fromPartial(object.cacheConfig);
        }
        else {
            message.cacheConfig = undefined;
        }
        if (object.apiConfigHash !== undefined && object.apiConfigHash !== null) {
            message.apiConfigHash = object.apiConfigHash;
        }
        else {
            message.apiConfigHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        }
        else {
            obj.hosts = [];
        }
        message.pathPrefix !== undefined && (obj.pathPrefix = message.pathPrefix);
        message.engineConfiguration !== undefined &&
            (obj.engineConfiguration = message.engineConfiguration
                ? exports.EngineConfiguration.toJSON(message.engineConfiguration)
                : undefined);
        message.enableSingleFlight !== undefined &&
            (obj.enableSingleFlight = message.enableSingleFlight);
        message.enableGraphqlEndpoint !== undefined &&
            (obj.enableGraphqlEndpoint = message.enableGraphqlEndpoint);
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? exports.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.corsConfiguration !== undefined &&
            (obj.corsConfiguration = message.corsConfiguration
                ? exports.CorsConfiguration.toJSON(message.corsConfiguration)
                : undefined);
        message.primaryHost !== undefined &&
            (obj.primaryHost = message.primaryHost);
        message.deploymentId !== undefined &&
            (obj.deploymentId = message.deploymentId);
        message.cacheConfig !== undefined &&
            (obj.cacheConfig = message.cacheConfig
                ? exports.ApiCacheConfig.toJSON(message.cacheConfig)
                : undefined);
        message.apiConfigHash !== undefined &&
            (obj.apiConfigHash = message.apiConfigHash);
        return obj;
    },
};
const baseApiCacheConfig = { kind: 0 };
exports.ApiCacheConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        if (message.inMemoryConfig !== undefined) {
            exports.InMemoryCacheConfig.encode(message.inMemoryConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.redisConfig !== undefined) {
            exports.RedisCacheConfig.encode(message.redisConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseApiCacheConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.inMemoryConfig = exports.InMemoryCacheConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.redisConfig = exports.RedisCacheConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseApiCacheConfig);
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = apiCacheKindFromJSON(object.kind);
        }
        else {
            message.kind = 0;
        }
        if (object.inMemoryConfig !== undefined && object.inMemoryConfig !== null) {
            message.inMemoryConfig = exports.InMemoryCacheConfig.fromJSON(object.inMemoryConfig);
        }
        else {
            message.inMemoryConfig = undefined;
        }
        if (object.redisConfig !== undefined && object.redisConfig !== null) {
            message.redisConfig = exports.RedisCacheConfig.fromJSON(object.redisConfig);
        }
        else {
            message.redisConfig = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseApiCacheConfig };
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        else {
            message.kind = 0;
        }
        if (object.inMemoryConfig !== undefined && object.inMemoryConfig !== null) {
            message.inMemoryConfig = exports.InMemoryCacheConfig.fromPartial(object.inMemoryConfig);
        }
        else {
            message.inMemoryConfig = undefined;
        }
        if (object.redisConfig !== undefined && object.redisConfig !== null) {
            message.redisConfig = exports.RedisCacheConfig.fromPartial(object.redisConfig);
        }
        else {
            message.redisConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined && (obj.kind = apiCacheKindToJSON(message.kind));
        message.inMemoryConfig !== undefined &&
            (obj.inMemoryConfig = message.inMemoryConfig
                ? exports.InMemoryCacheConfig.toJSON(message.inMemoryConfig)
                : undefined);
        message.redisConfig !== undefined &&
            (obj.redisConfig = message.redisConfig
                ? exports.RedisCacheConfig.toJSON(message.redisConfig)
                : undefined);
        return obj;
    },
};
const baseInMemoryCacheConfig = { maxSize: 0 };
exports.InMemoryCacheConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.maxSize !== 0) {
            writer.uint32(8).int64(message.maxSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseInMemoryCacheConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseInMemoryCacheConfig);
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = Number(object.maxSize);
        }
        else {
            message.maxSize = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseInMemoryCacheConfig };
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = object.maxSize;
        }
        else {
            message.maxSize = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        return obj;
    },
};
const baseRedisCacheConfig = { redisUrlEnvVar: "" };
exports.RedisCacheConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.redisUrlEnvVar !== "") {
            writer.uint32(10).string(message.redisUrlEnvVar);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseRedisCacheConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redisUrlEnvVar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseRedisCacheConfig);
        if (object.redisUrlEnvVar !== undefined && object.redisUrlEnvVar !== null) {
            message.redisUrlEnvVar = String(object.redisUrlEnvVar);
        }
        else {
            message.redisUrlEnvVar = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseRedisCacheConfig };
        if (object.redisUrlEnvVar !== undefined && object.redisUrlEnvVar !== null) {
            message.redisUrlEnvVar = object.redisUrlEnvVar;
        }
        else {
            message.redisUrlEnvVar = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.redisUrlEnvVar !== undefined &&
            (obj.redisUrlEnvVar = message.redisUrlEnvVar);
        return obj;
    },
};
const baseOperation = {
    name: "",
    content: "",
    operationType: 0,
    variablesSchema: "",
    responseSchema: "",
};
exports.Operation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        if (message.operationType !== 0) {
            writer.uint32(24).int32(message.operationType);
        }
        if (message.variablesSchema !== "") {
            writer.uint32(34).string(message.variablesSchema);
        }
        if (message.responseSchema !== "") {
            writer.uint32(42).string(message.responseSchema);
        }
        if (message.mock !== undefined) {
            exports.OperationMock.encode(message.mock, writer.uint32(50).fork()).ldelim();
        }
        if (message.cacheConfig !== undefined) {
            exports.OperationCacheConfig.encode(message.cacheConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseOperation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.operationType = reader.int32();
                    break;
                case 4:
                    message.variablesSchema = reader.string();
                    break;
                case 5:
                    message.responseSchema = reader.string();
                    break;
                case 6:
                    message.mock = exports.OperationMock.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.cacheConfig = exports.OperationCacheConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseOperation);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        else {
            message.content = "";
        }
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = operationTypeFromJSON(object.operationType);
        }
        else {
            message.operationType = 0;
        }
        if (object.variablesSchema !== undefined &&
            object.variablesSchema !== null) {
            message.variablesSchema = String(object.variablesSchema);
        }
        else {
            message.variablesSchema = "";
        }
        if (object.responseSchema !== undefined && object.responseSchema !== null) {
            message.responseSchema = String(object.responseSchema);
        }
        else {
            message.responseSchema = "";
        }
        if (object.mock !== undefined && object.mock !== null) {
            message.mock = exports.OperationMock.fromJSON(object.mock);
        }
        else {
            message.mock = undefined;
        }
        if (object.cacheConfig !== undefined && object.cacheConfig !== null) {
            message.cacheConfig = exports.OperationCacheConfig.fromJSON(object.cacheConfig);
        }
        else {
            message.cacheConfig = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseOperation };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = "";
        }
        if (object.operationType !== undefined && object.operationType !== null) {
            message.operationType = object.operationType;
        }
        else {
            message.operationType = 0;
        }
        if (object.variablesSchema !== undefined &&
            object.variablesSchema !== null) {
            message.variablesSchema = object.variablesSchema;
        }
        else {
            message.variablesSchema = "";
        }
        if (object.responseSchema !== undefined && object.responseSchema !== null) {
            message.responseSchema = object.responseSchema;
        }
        else {
            message.responseSchema = "";
        }
        if (object.mock !== undefined && object.mock !== null) {
            message.mock = exports.OperationMock.fromPartial(object.mock);
        }
        else {
            message.mock = undefined;
        }
        if (object.cacheConfig !== undefined && object.cacheConfig !== null) {
            message.cacheConfig = exports.OperationCacheConfig.fromPartial(object.cacheConfig);
        }
        else {
            message.cacheConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.content !== undefined && (obj.content = message.content);
        message.operationType !== undefined &&
            (obj.operationType = operationTypeToJSON(message.operationType));
        message.variablesSchema !== undefined &&
            (obj.variablesSchema = message.variablesSchema);
        message.responseSchema !== undefined &&
            (obj.responseSchema = message.responseSchema);
        message.mock !== undefined &&
            (obj.mock = message.mock
                ? exports.OperationMock.toJSON(message.mock)
                : undefined);
        message.cacheConfig !== undefined &&
            (obj.cacheConfig = message.cacheConfig
                ? exports.OperationCacheConfig.toJSON(message.cacheConfig)
                : undefined);
        return obj;
    },
};
const baseOperationCacheConfig = {
    enable: false,
    maxAge: 0,
    cacheKeyPrefix: "",
    etagKeyPrefix: "",
    public: false,
};
exports.OperationCacheConfig = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.enable === true) {
            writer.uint32(8).bool(message.enable);
        }
        if (message.maxAge !== 0) {
            writer.uint32(16).int64(message.maxAge);
        }
        if (message.cacheKeyPrefix !== "") {
            writer.uint32(26).string(message.cacheKeyPrefix);
        }
        if (message.etagKeyPrefix !== "") {
            writer.uint32(34).string(message.etagKeyPrefix);
        }
        if (message.public === true) {
            writer.uint32(40).bool(message.public);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseOperationCacheConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = reader.bool();
                    break;
                case 2:
                    message.maxAge = longToNumber(reader.int64());
                    break;
                case 3:
                    message.cacheKeyPrefix = reader.string();
                    break;
                case 4:
                    message.etagKeyPrefix = reader.string();
                    break;
                case 5:
                    message.public = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseOperationCacheConfig);
        if (object.enable !== undefined && object.enable !== null) {
            message.enable = Boolean(object.enable);
        }
        else {
            message.enable = false;
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = Number(object.maxAge);
        }
        else {
            message.maxAge = 0;
        }
        if (object.cacheKeyPrefix !== undefined && object.cacheKeyPrefix !== null) {
            message.cacheKeyPrefix = String(object.cacheKeyPrefix);
        }
        else {
            message.cacheKeyPrefix = "";
        }
        if (object.etagKeyPrefix !== undefined && object.etagKeyPrefix !== null) {
            message.etagKeyPrefix = String(object.etagKeyPrefix);
        }
        else {
            message.etagKeyPrefix = "";
        }
        if (object.public !== undefined && object.public !== null) {
            message.public = Boolean(object.public);
        }
        else {
            message.public = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseOperationCacheConfig };
        if (object.enable !== undefined && object.enable !== null) {
            message.enable = object.enable;
        }
        else {
            message.enable = false;
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = object.maxAge;
        }
        else {
            message.maxAge = 0;
        }
        if (object.cacheKeyPrefix !== undefined && object.cacheKeyPrefix !== null) {
            message.cacheKeyPrefix = object.cacheKeyPrefix;
        }
        else {
            message.cacheKeyPrefix = "";
        }
        if (object.etagKeyPrefix !== undefined && object.etagKeyPrefix !== null) {
            message.etagKeyPrefix = object.etagKeyPrefix;
        }
        else {
            message.etagKeyPrefix = "";
        }
        if (object.public !== undefined && object.public !== null) {
            message.public = object.public;
        }
        else {
            message.public = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enable !== undefined && (obj.enable = message.enable);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.cacheKeyPrefix !== undefined &&
            (obj.cacheKeyPrefix = message.cacheKeyPrefix);
        message.etagKeyPrefix !== undefined &&
            (obj.etagKeyPrefix = message.etagKeyPrefix);
        message.public !== undefined && (obj.public = message.public);
        return obj;
    },
};
const baseOperationMock = {
    enabled: false,
    endpoint: "",
    subscriptionPollingIntervalMillis: 0,
};
exports.OperationMock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.endpoint !== "") {
            writer.uint32(18).string(message.endpoint);
        }
        if (message.subscriptionPollingIntervalMillis !== 0) {
            writer.uint32(24).int64(message.subscriptionPollingIntervalMillis);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseOperationMock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.endpoint = reader.string();
                    break;
                case 3:
                    message.subscriptionPollingIntervalMillis = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseOperationMock);
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        }
        else {
            message.endpoint = "";
        }
        if (object.subscriptionPollingIntervalMillis !== undefined &&
            object.subscriptionPollingIntervalMillis !== null) {
            message.subscriptionPollingIntervalMillis = Number(object.subscriptionPollingIntervalMillis);
        }
        else {
            message.subscriptionPollingIntervalMillis = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseOperationMock };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        }
        else {
            message.endpoint = "";
        }
        if (object.subscriptionPollingIntervalMillis !== undefined &&
            object.subscriptionPollingIntervalMillis !== null) {
            message.subscriptionPollingIntervalMillis =
                object.subscriptionPollingIntervalMillis;
        }
        else {
            message.subscriptionPollingIntervalMillis = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.subscriptionPollingIntervalMillis !== undefined &&
            (obj.subscriptionPollingIntervalMillis =
                message.subscriptionPollingIntervalMillis);
        return obj;
    },
};
const baseEngineConfiguration = {
    defaultFlushInterval: 0,
    graphqlSchema: "",
};
exports.EngineConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.defaultFlushInterval !== 0) {
            writer.uint32(8).int64(message.defaultFlushInterval);
        }
        for (const v of message.datasourceConfigurations) {
            exports.DataSourceConfiguration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.fieldConfigurations) {
            exports.FieldConfiguration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.graphqlSchema !== "") {
            writer.uint32(34).string(message.graphqlSchema);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseEngineConfiguration);
        message.datasourceConfigurations = [];
        message.fieldConfigurations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultFlushInterval = longToNumber(reader.int64());
                    break;
                case 2:
                    message.datasourceConfigurations.push(exports.DataSourceConfiguration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.fieldConfigurations.push(exports.FieldConfiguration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.graphqlSchema = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseEngineConfiguration);
        message.datasourceConfigurations = [];
        message.fieldConfigurations = [];
        if (object.defaultFlushInterval !== undefined &&
            object.defaultFlushInterval !== null) {
            message.defaultFlushInterval = Number(object.defaultFlushInterval);
        }
        else {
            message.defaultFlushInterval = 0;
        }
        if (object.datasourceConfigurations !== undefined &&
            object.datasourceConfigurations !== null) {
            for (const e of object.datasourceConfigurations) {
                message.datasourceConfigurations.push(exports.DataSourceConfiguration.fromJSON(e));
            }
        }
        if (object.fieldConfigurations !== undefined &&
            object.fieldConfigurations !== null) {
            for (const e of object.fieldConfigurations) {
                message.fieldConfigurations.push(exports.FieldConfiguration.fromJSON(e));
            }
        }
        if (object.graphqlSchema !== undefined && object.graphqlSchema !== null) {
            message.graphqlSchema = String(object.graphqlSchema);
        }
        else {
            message.graphqlSchema = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseEngineConfiguration };
        message.datasourceConfigurations = [];
        message.fieldConfigurations = [];
        if (object.defaultFlushInterval !== undefined &&
            object.defaultFlushInterval !== null) {
            message.defaultFlushInterval = object.defaultFlushInterval;
        }
        else {
            message.defaultFlushInterval = 0;
        }
        if (object.datasourceConfigurations !== undefined &&
            object.datasourceConfigurations !== null) {
            for (const e of object.datasourceConfigurations) {
                message.datasourceConfigurations.push(exports.DataSourceConfiguration.fromPartial(e));
            }
        }
        if (object.fieldConfigurations !== undefined &&
            object.fieldConfigurations !== null) {
            for (const e of object.fieldConfigurations) {
                message.fieldConfigurations.push(exports.FieldConfiguration.fromPartial(e));
            }
        }
        if (object.graphqlSchema !== undefined && object.graphqlSchema !== null) {
            message.graphqlSchema = object.graphqlSchema;
        }
        else {
            message.graphqlSchema = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultFlushInterval !== undefined &&
            (obj.defaultFlushInterval = message.defaultFlushInterval);
        if (message.datasourceConfigurations) {
            obj.datasourceConfigurations = message.datasourceConfigurations.map((e) => e ? exports.DataSourceConfiguration.toJSON(e) : undefined);
        }
        else {
            obj.datasourceConfigurations = [];
        }
        if (message.fieldConfigurations) {
            obj.fieldConfigurations = message.fieldConfigurations.map((e) => e ? exports.FieldConfiguration.toJSON(e) : undefined);
        }
        else {
            obj.fieldConfigurations = [];
        }
        message.graphqlSchema !== undefined &&
            (obj.graphqlSchema = message.graphqlSchema);
        return obj;
    },
};
const baseDataSourceConfiguration = {
    kind: 0,
    overrideFieldPathFromAlias: false,
};
exports.DataSourceConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        for (const v of message.rootNodes) {
            exports.TypeField.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.childNodes) {
            exports.TypeField.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.overrideFieldPathFromAlias === true) {
            writer.uint32(32).bool(message.overrideFieldPathFromAlias);
        }
        if (message.customRest !== undefined) {
            exports.DataSourceCustomREST.encode(message.customRest, writer.uint32(42).fork()).ldelim();
        }
        if (message.customGraphql !== undefined) {
            exports.DataSourceCustomGraphQL.encode(message.customGraphql, writer.uint32(50).fork()).ldelim();
        }
        if (message.customStatic !== undefined) {
            exports.DataSourceCustomStatic.encode(message.customStatic, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseDataSourceConfiguration);
        message.rootNodes = [];
        message.childNodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.rootNodes.push(exports.TypeField.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.childNodes.push(exports.TypeField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.overrideFieldPathFromAlias = reader.bool();
                    break;
                case 5:
                    message.customRest = exports.DataSourceCustomREST.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.customGraphql = exports.DataSourceCustomGraphQL.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.customStatic = exports.DataSourceCustomStatic.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseDataSourceConfiguration);
        message.rootNodes = [];
        message.childNodes = [];
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = dataSourceKindFromJSON(object.kind);
        }
        else {
            message.kind = 0;
        }
        if (object.rootNodes !== undefined && object.rootNodes !== null) {
            for (const e of object.rootNodes) {
                message.rootNodes.push(exports.TypeField.fromJSON(e));
            }
        }
        if (object.childNodes !== undefined && object.childNodes !== null) {
            for (const e of object.childNodes) {
                message.childNodes.push(exports.TypeField.fromJSON(e));
            }
        }
        if (object.overrideFieldPathFromAlias !== undefined &&
            object.overrideFieldPathFromAlias !== null) {
            message.overrideFieldPathFromAlias = Boolean(object.overrideFieldPathFromAlias);
        }
        else {
            message.overrideFieldPathFromAlias = false;
        }
        if (object.customRest !== undefined && object.customRest !== null) {
            message.customRest = exports.DataSourceCustomREST.fromJSON(object.customRest);
        }
        else {
            message.customRest = undefined;
        }
        if (object.customGraphql !== undefined && object.customGraphql !== null) {
            message.customGraphql = exports.DataSourceCustomGraphQL.fromJSON(object.customGraphql);
        }
        else {
            message.customGraphql = undefined;
        }
        if (object.customStatic !== undefined && object.customStatic !== null) {
            message.customStatic = exports.DataSourceCustomStatic.fromJSON(object.customStatic);
        }
        else {
            message.customStatic = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseDataSourceConfiguration,
        };
        message.rootNodes = [];
        message.childNodes = [];
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        else {
            message.kind = 0;
        }
        if (object.rootNodes !== undefined && object.rootNodes !== null) {
            for (const e of object.rootNodes) {
                message.rootNodes.push(exports.TypeField.fromPartial(e));
            }
        }
        if (object.childNodes !== undefined && object.childNodes !== null) {
            for (const e of object.childNodes) {
                message.childNodes.push(exports.TypeField.fromPartial(e));
            }
        }
        if (object.overrideFieldPathFromAlias !== undefined &&
            object.overrideFieldPathFromAlias !== null) {
            message.overrideFieldPathFromAlias = object.overrideFieldPathFromAlias;
        }
        else {
            message.overrideFieldPathFromAlias = false;
        }
        if (object.customRest !== undefined && object.customRest !== null) {
            message.customRest = exports.DataSourceCustomREST.fromPartial(object.customRest);
        }
        else {
            message.customRest = undefined;
        }
        if (object.customGraphql !== undefined && object.customGraphql !== null) {
            message.customGraphql = exports.DataSourceCustomGraphQL.fromPartial(object.customGraphql);
        }
        else {
            message.customGraphql = undefined;
        }
        if (object.customStatic !== undefined && object.customStatic !== null) {
            message.customStatic = exports.DataSourceCustomStatic.fromPartial(object.customStatic);
        }
        else {
            message.customStatic = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined &&
            (obj.kind = dataSourceKindToJSON(message.kind));
        if (message.rootNodes) {
            obj.rootNodes = message.rootNodes.map((e) => e ? exports.TypeField.toJSON(e) : undefined);
        }
        else {
            obj.rootNodes = [];
        }
        if (message.childNodes) {
            obj.childNodes = message.childNodes.map((e) => e ? exports.TypeField.toJSON(e) : undefined);
        }
        else {
            obj.childNodes = [];
        }
        message.overrideFieldPathFromAlias !== undefined &&
            (obj.overrideFieldPathFromAlias = message.overrideFieldPathFromAlias);
        message.customRest !== undefined &&
            (obj.customRest = message.customRest
                ? exports.DataSourceCustomREST.toJSON(message.customRest)
                : undefined);
        message.customGraphql !== undefined &&
            (obj.customGraphql = message.customGraphql
                ? exports.DataSourceCustomGraphQL.toJSON(message.customGraphql)
                : undefined);
        message.customStatic !== undefined &&
            (obj.customStatic = message.customStatic
                ? exports.DataSourceCustomStatic.toJSON(message.customStatic)
                : undefined);
        return obj;
    },
};
const baseDataSourceCustomREST = {};
exports.DataSourceCustomREST = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.fetch !== undefined) {
            exports.FetchConfiguration.encode(message.fetch, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscription !== undefined) {
            exports.RESTSubscriptionConfiguration.encode(message.subscription, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseDataSourceCustomREST);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetch = exports.FetchConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscription = exports.RESTSubscriptionConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseDataSourceCustomREST);
        if (object.fetch !== undefined && object.fetch !== null) {
            message.fetch = exports.FetchConfiguration.fromJSON(object.fetch);
        }
        else {
            message.fetch = undefined;
        }
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = exports.RESTSubscriptionConfiguration.fromJSON(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseDataSourceCustomREST };
        if (object.fetch !== undefined && object.fetch !== null) {
            message.fetch = exports.FetchConfiguration.fromPartial(object.fetch);
        }
        else {
            message.fetch = undefined;
        }
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = exports.RESTSubscriptionConfiguration.fromPartial(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fetch !== undefined &&
            (obj.fetch = message.fetch
                ? exports.FetchConfiguration.toJSON(message.fetch)
                : undefined);
        message.subscription !== undefined &&
            (obj.subscription = message.subscription
                ? exports.RESTSubscriptionConfiguration.toJSON(message.subscription)
                : undefined);
        return obj;
    },
};
const baseDataSourceCustomGraphQL = {};
exports.DataSourceCustomGraphQL = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.fetch !== undefined) {
            exports.FetchConfiguration.encode(message.fetch, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscription !== undefined) {
            exports.GraphQLSubscriptionConfiguration.encode(message.subscription, writer.uint32(18).fork()).ldelim();
        }
        if (message.federation !== undefined) {
            exports.GraphQLFederationConfiguration.encode(message.federation, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseDataSourceCustomGraphQL);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetch = exports.FetchConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscription = exports.GraphQLSubscriptionConfiguration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.federation = exports.GraphQLFederationConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseDataSourceCustomGraphQL);
        if (object.fetch !== undefined && object.fetch !== null) {
            message.fetch = exports.FetchConfiguration.fromJSON(object.fetch);
        }
        else {
            message.fetch = undefined;
        }
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = exports.GraphQLSubscriptionConfiguration.fromJSON(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = exports.GraphQLFederationConfiguration.fromJSON(object.federation);
        }
        else {
            message.federation = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseDataSourceCustomGraphQL,
        };
        if (object.fetch !== undefined && object.fetch !== null) {
            message.fetch = exports.FetchConfiguration.fromPartial(object.fetch);
        }
        else {
            message.fetch = undefined;
        }
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = exports.GraphQLSubscriptionConfiguration.fromPartial(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = exports.GraphQLFederationConfiguration.fromPartial(object.federation);
        }
        else {
            message.federation = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fetch !== undefined &&
            (obj.fetch = message.fetch
                ? exports.FetchConfiguration.toJSON(message.fetch)
                : undefined);
        message.subscription !== undefined &&
            (obj.subscription = message.subscription
                ? exports.GraphQLSubscriptionConfiguration.toJSON(message.subscription)
                : undefined);
        message.federation !== undefined &&
            (obj.federation = message.federation
                ? exports.GraphQLFederationConfiguration.toJSON(message.federation)
                : undefined);
        return obj;
    },
};
const baseGraphQLFederationConfiguration = {
    enabled: false,
    serviceSdl: "",
};
exports.GraphQLFederationConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.serviceSdl !== "") {
            writer.uint32(18).string(message.serviceSdl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseGraphQLFederationConfiguration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.serviceSdl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseGraphQLFederationConfiguration);
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.serviceSdl !== undefined && object.serviceSdl !== null) {
            message.serviceSdl = String(object.serviceSdl);
        }
        else {
            message.serviceSdl = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseGraphQLFederationConfiguration,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.serviceSdl !== undefined && object.serviceSdl !== null) {
            message.serviceSdl = object.serviceSdl;
        }
        else {
            message.serviceSdl = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.serviceSdl !== undefined && (obj.serviceSdl = message.serviceSdl);
        return obj;
    },
};
const baseDataSourceCustomStatic = { data: "" };
exports.DataSourceCustomStatic = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseDataSourceCustomStatic);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseDataSourceCustomStatic);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseDataSourceCustomStatic };
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
};
const baseGraphQLSubscriptionConfiguration = {
    enabled: false,
    url: "",
};
exports.GraphQLSubscriptionConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseGraphQLSubscriptionConfiguration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseGraphQLSubscriptionConfiguration);
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseGraphQLSubscriptionConfiguration,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
};
const baseFetchConfiguration = { url: "", method: 0, body: "" };
exports.FetchConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        Object.entries(message.header).forEach(([key, value]) => {
            exports.FetchConfiguration_HeaderEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.body !== "") {
            writer.uint32(34).string(message.body);
        }
        for (const v of message.query) {
            exports.URLQueryConfiguration.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseFetchConfiguration);
        message.header = {};
        message.query = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.method = reader.int32();
                    break;
                case 3:
                    const entry3 = exports.FetchConfiguration_HeaderEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.header[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.body = reader.string();
                    break;
                case 5:
                    message.query.push(exports.URLQueryConfiguration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseFetchConfiguration);
        message.header = {};
        message.query = [];
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = hTTPMethodFromJSON(object.method);
        }
        else {
            message.method = 0;
        }
        if (object.header !== undefined && object.header !== null) {
            Object.entries(object.header).forEach(([key, value]) => {
                message.header[key] = exports.HTTPHeader.fromJSON(value);
            });
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        }
        else {
            message.body = "";
        }
        if (object.query !== undefined && object.query !== null) {
            for (const e of object.query) {
                message.query.push(exports.URLQueryConfiguration.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseFetchConfiguration };
        message.header = {};
        message.query = [];
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.method !== undefined && object.method !== null) {
            message.method = object.method;
        }
        else {
            message.method = 0;
        }
        if (object.header !== undefined && object.header !== null) {
            Object.entries(object.header).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.header[key] = exports.HTTPHeader.fromPartial(value);
                }
            });
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        else {
            message.body = "";
        }
        if (object.query !== undefined && object.query !== null) {
            for (const e of object.query) {
                message.query.push(exports.URLQueryConfiguration.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.method !== undefined &&
            (obj.method = hTTPMethodToJSON(message.method));
        obj.header = {};
        if (message.header) {
            Object.entries(message.header).forEach(([k, v]) => {
                obj.header[k] = exports.HTTPHeader.toJSON(v);
            });
        }
        message.body !== undefined && (obj.body = message.body);
        if (message.query) {
            obj.query = message.query.map((e) => e ? exports.URLQueryConfiguration.toJSON(e) : undefined);
        }
        else {
            obj.query = [];
        }
        return obj;
    },
};
const baseFetchConfiguration_HeaderEntry = { key: "" };
exports.FetchConfiguration_HeaderEntry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.HTTPHeader.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseFetchConfiguration_HeaderEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.HTTPHeader.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseFetchConfiguration_HeaderEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.HTTPHeader.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseFetchConfiguration_HeaderEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.HTTPHeader.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.HTTPHeader.toJSON(message.value)
                : undefined);
        return obj;
    },
};
const baseRESTSubscriptionConfiguration = {
    enabled: false,
    pollingIntervalMillis: 0,
    skipPublishSameResponse: false,
};
exports.RESTSubscriptionConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.pollingIntervalMillis !== 0) {
            writer.uint32(16).int64(message.pollingIntervalMillis);
        }
        if (message.skipPublishSameResponse === true) {
            writer.uint32(24).bool(message.skipPublishSameResponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseRESTSubscriptionConfiguration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.pollingIntervalMillis = longToNumber(reader.int64());
                    break;
                case 3:
                    message.skipPublishSameResponse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseRESTSubscriptionConfiguration);
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.pollingIntervalMillis !== undefined &&
            object.pollingIntervalMillis !== null) {
            message.pollingIntervalMillis = Number(object.pollingIntervalMillis);
        }
        else {
            message.pollingIntervalMillis = 0;
        }
        if (object.skipPublishSameResponse !== undefined &&
            object.skipPublishSameResponse !== null) {
            message.skipPublishSameResponse = Boolean(object.skipPublishSameResponse);
        }
        else {
            message.skipPublishSameResponse = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseRESTSubscriptionConfiguration,
        };
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.pollingIntervalMillis !== undefined &&
            object.pollingIntervalMillis !== null) {
            message.pollingIntervalMillis = object.pollingIntervalMillis;
        }
        else {
            message.pollingIntervalMillis = 0;
        }
        if (object.skipPublishSameResponse !== undefined &&
            object.skipPublishSameResponse !== null) {
            message.skipPublishSameResponse = object.skipPublishSameResponse;
        }
        else {
            message.skipPublishSameResponse = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.pollingIntervalMillis !== undefined &&
            (obj.pollingIntervalMillis = message.pollingIntervalMillis);
        message.skipPublishSameResponse !== undefined &&
            (obj.skipPublishSameResponse = message.skipPublishSameResponse);
        return obj;
    },
};
const baseURLQueryConfiguration = { name: "", value: "" };
exports.URLQueryConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseURLQueryConfiguration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseURLQueryConfiguration);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseURLQueryConfiguration };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
};
const baseHTTPHeader = { values: "" };
exports.HTTPHeader = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseHTTPHeader);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseHTTPHeader);
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseHTTPHeader };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
};
const baseFieldConfiguration = {
    typeName: "",
    fieldName: "",
    disableDefaultFieldMapping: false,
    path: "",
    respectOverrideFieldPathFromAlias: false,
    requiresFields: "",
};
exports.FieldConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.typeName !== "") {
            writer.uint32(10).string(message.typeName);
        }
        if (message.fieldName !== "") {
            writer.uint32(18).string(message.fieldName);
        }
        if (message.disableDefaultFieldMapping === true) {
            writer.uint32(24).bool(message.disableDefaultFieldMapping);
        }
        for (const v of message.path) {
            writer.uint32(34).string(v);
        }
        if (message.respectOverrideFieldPathFromAlias === true) {
            writer.uint32(40).bool(message.respectOverrideFieldPathFromAlias);
        }
        for (const v of message.argumentsConfiguration) {
            exports.ArgumentConfiguration.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.requiresFields) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseFieldConfiguration);
        message.path = [];
        message.argumentsConfiguration = [];
        message.requiresFields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.fieldName = reader.string();
                    break;
                case 3:
                    message.disableDefaultFieldMapping = reader.bool();
                    break;
                case 4:
                    message.path.push(reader.string());
                    break;
                case 5:
                    message.respectOverrideFieldPathFromAlias = reader.bool();
                    break;
                case 6:
                    message.argumentsConfiguration.push(exports.ArgumentConfiguration.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requiresFields.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseFieldConfiguration);
        message.path = [];
        message.argumentsConfiguration = [];
        message.requiresFields = [];
        if (object.typeName !== undefined && object.typeName !== null) {
            message.typeName = String(object.typeName);
        }
        else {
            message.typeName = "";
        }
        if (object.fieldName !== undefined && object.fieldName !== null) {
            message.fieldName = String(object.fieldName);
        }
        else {
            message.fieldName = "";
        }
        if (object.disableDefaultFieldMapping !== undefined &&
            object.disableDefaultFieldMapping !== null) {
            message.disableDefaultFieldMapping = Boolean(object.disableDefaultFieldMapping);
        }
        else {
            message.disableDefaultFieldMapping = false;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(String(e));
            }
        }
        if (object.respectOverrideFieldPathFromAlias !== undefined &&
            object.respectOverrideFieldPathFromAlias !== null) {
            message.respectOverrideFieldPathFromAlias = Boolean(object.respectOverrideFieldPathFromAlias);
        }
        else {
            message.respectOverrideFieldPathFromAlias = false;
        }
        if (object.argumentsConfiguration !== undefined &&
            object.argumentsConfiguration !== null) {
            for (const e of object.argumentsConfiguration) {
                message.argumentsConfiguration.push(exports.ArgumentConfiguration.fromJSON(e));
            }
        }
        if (object.requiresFields !== undefined && object.requiresFields !== null) {
            for (const e of object.requiresFields) {
                message.requiresFields.push(String(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseFieldConfiguration };
        message.path = [];
        message.argumentsConfiguration = [];
        message.requiresFields = [];
        if (object.typeName !== undefined && object.typeName !== null) {
            message.typeName = object.typeName;
        }
        else {
            message.typeName = "";
        }
        if (object.fieldName !== undefined && object.fieldName !== null) {
            message.fieldName = object.fieldName;
        }
        else {
            message.fieldName = "";
        }
        if (object.disableDefaultFieldMapping !== undefined &&
            object.disableDefaultFieldMapping !== null) {
            message.disableDefaultFieldMapping = object.disableDefaultFieldMapping;
        }
        else {
            message.disableDefaultFieldMapping = false;
        }
        if (object.path !== undefined && object.path !== null) {
            for (const e of object.path) {
                message.path.push(e);
            }
        }
        if (object.respectOverrideFieldPathFromAlias !== undefined &&
            object.respectOverrideFieldPathFromAlias !== null) {
            message.respectOverrideFieldPathFromAlias =
                object.respectOverrideFieldPathFromAlias;
        }
        else {
            message.respectOverrideFieldPathFromAlias = false;
        }
        if (object.argumentsConfiguration !== undefined &&
            object.argumentsConfiguration !== null) {
            for (const e of object.argumentsConfiguration) {
                message.argumentsConfiguration.push(exports.ArgumentConfiguration.fromPartial(e));
            }
        }
        if (object.requiresFields !== undefined && object.requiresFields !== null) {
            for (const e of object.requiresFields) {
                message.requiresFields.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.typeName !== undefined && (obj.typeName = message.typeName);
        message.fieldName !== undefined && (obj.fieldName = message.fieldName);
        message.disableDefaultFieldMapping !== undefined &&
            (obj.disableDefaultFieldMapping = message.disableDefaultFieldMapping);
        if (message.path) {
            obj.path = message.path.map((e) => e);
        }
        else {
            obj.path = [];
        }
        message.respectOverrideFieldPathFromAlias !== undefined &&
            (obj.respectOverrideFieldPathFromAlias =
                message.respectOverrideFieldPathFromAlias);
        if (message.argumentsConfiguration) {
            obj.argumentsConfiguration = message.argumentsConfiguration.map((e) => e ? exports.ArgumentConfiguration.toJSON(e) : undefined);
        }
        else {
            obj.argumentsConfiguration = [];
        }
        if (message.requiresFields) {
            obj.requiresFields = message.requiresFields.map((e) => e);
        }
        else {
            obj.requiresFields = [];
        }
        return obj;
    },
};
const baseTypeField = { typeName: "", fieldNames: "" };
exports.TypeField = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.typeName !== "") {
            writer.uint32(10).string(message.typeName);
        }
        for (const v of message.fieldNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseTypeField);
        message.fieldNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.fieldNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseTypeField);
        message.fieldNames = [];
        if (object.typeName !== undefined && object.typeName !== null) {
            message.typeName = String(object.typeName);
        }
        else {
            message.typeName = "";
        }
        if (object.fieldNames !== undefined && object.fieldNames !== null) {
            for (const e of object.fieldNames) {
                message.fieldNames.push(String(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseTypeField };
        message.fieldNames = [];
        if (object.typeName !== undefined && object.typeName !== null) {
            message.typeName = object.typeName;
        }
        else {
            message.typeName = "";
        }
        if (object.fieldNames !== undefined && object.fieldNames !== null) {
            for (const e of object.fieldNames) {
                message.fieldNames.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.typeName !== undefined && (obj.typeName = message.typeName);
        if (message.fieldNames) {
            obj.fieldNames = message.fieldNames.map((e) => e);
        }
        else {
            obj.fieldNames = [];
        }
        return obj;
    },
};
const baseArgumentConfiguration = {
    name: "",
    sourceType: 0,
    sourcePath: "",
};
exports.ArgumentConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.sourceType !== 0) {
            writer.uint32(16).int32(message.sourceType);
        }
        for (const v of message.sourcePath) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseArgumentConfiguration);
        message.sourcePath = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.sourceType = reader.int32();
                    break;
                case 3:
                    message.sourcePath.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseArgumentConfiguration);
        message.sourcePath = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.sourceType !== undefined && object.sourceType !== null) {
            message.sourceType = argumentSourceFromJSON(object.sourceType);
        }
        else {
            message.sourceType = 0;
        }
        if (object.sourcePath !== undefined && object.sourcePath !== null) {
            for (const e of object.sourcePath) {
                message.sourcePath.push(String(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseArgumentConfiguration };
        message.sourcePath = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.sourceType !== undefined && object.sourceType !== null) {
            message.sourceType = object.sourceType;
        }
        else {
            message.sourceType = 0;
        }
        if (object.sourcePath !== undefined && object.sourcePath !== null) {
            for (const e of object.sourcePath) {
                message.sourcePath.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.sourceType !== undefined &&
            (obj.sourceType = argumentSourceToJSON(message.sourceType));
        if (message.sourcePath) {
            obj.sourcePath = message.sourcePath.map((e) => e);
        }
        else {
            obj.sourcePath = [];
        }
        return obj;
    },
};
const baseDataUsageMetric = {
    host: "",
    inboundReadBytes: 0,
    inboundWriteBytes: 0,
    outboundReadBytes: 0,
    outboundWriteBytes: 0,
};
exports.DataUsageMetric = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.inboundReadBytes !== 0) {
            writer.uint32(16).int64(message.inboundReadBytes);
        }
        if (message.inboundWriteBytes !== 0) {
            writer.uint32(24).int64(message.inboundWriteBytes);
        }
        if (message.outboundReadBytes !== 0) {
            writer.uint32(32).int64(message.outboundReadBytes);
        }
        if (message.outboundWriteBytes !== 0) {
            writer.uint32(40).int64(message.outboundWriteBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseDataUsageMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.inboundReadBytes = longToNumber(reader.int64());
                    break;
                case 3:
                    message.inboundWriteBytes = longToNumber(reader.int64());
                    break;
                case 4:
                    message.outboundReadBytes = longToNumber(reader.int64());
                    break;
                case 5:
                    message.outboundWriteBytes = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseDataUsageMetric);
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        }
        else {
            message.host = "";
        }
        if (object.inboundReadBytes !== undefined &&
            object.inboundReadBytes !== null) {
            message.inboundReadBytes = Number(object.inboundReadBytes);
        }
        else {
            message.inboundReadBytes = 0;
        }
        if (object.inboundWriteBytes !== undefined &&
            object.inboundWriteBytes !== null) {
            message.inboundWriteBytes = Number(object.inboundWriteBytes);
        }
        else {
            message.inboundWriteBytes = 0;
        }
        if (object.outboundReadBytes !== undefined &&
            object.outboundReadBytes !== null) {
            message.outboundReadBytes = Number(object.outboundReadBytes);
        }
        else {
            message.outboundReadBytes = 0;
        }
        if (object.outboundWriteBytes !== undefined &&
            object.outboundWriteBytes !== null) {
            message.outboundWriteBytes = Number(object.outboundWriteBytes);
        }
        else {
            message.outboundWriteBytes = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseDataUsageMetric };
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        }
        else {
            message.host = "";
        }
        if (object.inboundReadBytes !== undefined &&
            object.inboundReadBytes !== null) {
            message.inboundReadBytes = object.inboundReadBytes;
        }
        else {
            message.inboundReadBytes = 0;
        }
        if (object.inboundWriteBytes !== undefined &&
            object.inboundWriteBytes !== null) {
            message.inboundWriteBytes = object.inboundWriteBytes;
        }
        else {
            message.inboundWriteBytes = 0;
        }
        if (object.outboundReadBytes !== undefined &&
            object.outboundReadBytes !== null) {
            message.outboundReadBytes = object.outboundReadBytes;
        }
        else {
            message.outboundReadBytes = 0;
        }
        if (object.outboundWriteBytes !== undefined &&
            object.outboundWriteBytes !== null) {
            message.outboundWriteBytes = object.outboundWriteBytes;
        }
        else {
            message.outboundWriteBytes = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.inboundReadBytes !== undefined &&
            (obj.inboundReadBytes = message.inboundReadBytes);
        message.inboundWriteBytes !== undefined &&
            (obj.inboundWriteBytes = message.inboundWriteBytes);
        message.outboundReadBytes !== undefined &&
            (obj.outboundReadBytes = message.outboundReadBytes);
        message.outboundWriteBytes !== undefined &&
            (obj.outboundWriteBytes = message.outboundWriteBytes);
        return obj;
    },
};
const baseWunderNodeMetrics = {};
exports.WunderNodeMetrics = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.dataUsage) {
            exports.DataUsageMetric.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseWunderNodeMetrics);
        message.dataUsage = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataUsage.push(exports.DataUsageMetric.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseWunderNodeMetrics);
        message.dataUsage = [];
        if (object.dataUsage !== undefined && object.dataUsage !== null) {
            for (const e of object.dataUsage) {
                message.dataUsage.push(exports.DataUsageMetric.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseWunderNodeMetrics };
        message.dataUsage = [];
        if (object.dataUsage !== undefined && object.dataUsage !== null) {
            for (const e of object.dataUsage) {
                message.dataUsage.push(exports.DataUsageMetric.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.dataUsage) {
            obj.dataUsage = message.dataUsage.map((e) => e ? exports.DataUsageMetric.toJSON(e) : undefined);
        }
        else {
            obj.dataUsage = [];
        }
        return obj;
    },
};
const baseWunderGraphConfiguration = {
    apiId: "",
    deploymentName: "",
    environmentIds: "",
    apiName: "",
};
exports.WunderGraphConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.api !== undefined) {
            exports.UserDefinedApi.encode(message.api, writer.uint32(10).fork()).ldelim();
        }
        if (message.apiId !== "") {
            writer.uint32(18).string(message.apiId);
        }
        if (message.deploymentName !== "") {
            writer.uint32(26).string(message.deploymentName);
        }
        for (const v of message.environmentIds) {
            writer.uint32(34).string(v);
        }
        if (message.apiName !== "") {
            writer.uint32(42).string(message.apiName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseWunderGraphConfiguration);
        message.environmentIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.api = exports.UserDefinedApi.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.apiId = reader.string();
                    break;
                case 3:
                    message.deploymentName = reader.string();
                    break;
                case 4:
                    message.environmentIds.push(reader.string());
                    break;
                case 5:
                    message.apiName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseWunderGraphConfiguration);
        message.environmentIds = [];
        if (object.api !== undefined && object.api !== null) {
            message.api = exports.UserDefinedApi.fromJSON(object.api);
        }
        else {
            message.api = undefined;
        }
        if (object.apiId !== undefined && object.apiId !== null) {
            message.apiId = String(object.apiId);
        }
        else {
            message.apiId = "";
        }
        if (object.deploymentName !== undefined && object.deploymentName !== null) {
            message.deploymentName = String(object.deploymentName);
        }
        else {
            message.deploymentName = "";
        }
        if (object.environmentIds !== undefined && object.environmentIds !== null) {
            for (const e of object.environmentIds) {
                message.environmentIds.push(String(e));
            }
        }
        if (object.apiName !== undefined && object.apiName !== null) {
            message.apiName = String(object.apiName);
        }
        else {
            message.apiName = "";
        }
        return message;
    },
    fromPartial(object) {
        const message = {
            ...baseWunderGraphConfiguration,
        };
        message.environmentIds = [];
        if (object.api !== undefined && object.api !== null) {
            message.api = exports.UserDefinedApi.fromPartial(object.api);
        }
        else {
            message.api = undefined;
        }
        if (object.apiId !== undefined && object.apiId !== null) {
            message.apiId = object.apiId;
        }
        else {
            message.apiId = "";
        }
        if (object.deploymentName !== undefined && object.deploymentName !== null) {
            message.deploymentName = object.deploymentName;
        }
        else {
            message.deploymentName = "";
        }
        if (object.environmentIds !== undefined && object.environmentIds !== null) {
            for (const e of object.environmentIds) {
                message.environmentIds.push(e);
            }
        }
        if (object.apiName !== undefined && object.apiName !== null) {
            message.apiName = object.apiName;
        }
        else {
            message.apiName = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.api !== undefined &&
            (obj.api = message.api ? exports.UserDefinedApi.toJSON(message.api) : undefined);
        message.apiId !== undefined && (obj.apiId = message.apiId);
        message.deploymentName !== undefined &&
            (obj.deploymentName = message.deploymentName);
        if (message.environmentIds) {
            obj.environmentIds = message.environmentIds.map((e) => e);
        }
        else {
            obj.environmentIds = [];
        }
        message.apiName !== undefined && (obj.apiName = message.apiName);
        return obj;
    },
};
const baseUserDefinedApi = { enableGraphqlEndpoint: false };
exports.UserDefinedApi = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.engineConfiguration !== undefined) {
            exports.EngineConfiguration.encode(message.engineConfiguration, writer.uint32(26).fork()).ldelim();
        }
        if (message.enableGraphqlEndpoint === true) {
            writer.uint32(40).bool(message.enableGraphqlEndpoint);
        }
        for (const v of message.operations) {
            exports.Operation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.corsConfiguration !== undefined) {
            exports.CorsConfiguration.encode(message.corsConfiguration, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseUserDefinedApi);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.engineConfiguration = exports.EngineConfiguration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.enableGraphqlEndpoint = reader.bool();
                    break;
                case 6:
                    message.operations.push(exports.Operation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.corsConfiguration = exports.CorsConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseUserDefinedApi);
        message.operations = [];
        if (object.engineConfiguration !== undefined &&
            object.engineConfiguration !== null) {
            message.engineConfiguration = exports.EngineConfiguration.fromJSON(object.engineConfiguration);
        }
        else {
            message.engineConfiguration = undefined;
        }
        if (object.enableGraphqlEndpoint !== undefined &&
            object.enableGraphqlEndpoint !== null) {
            message.enableGraphqlEndpoint = Boolean(object.enableGraphqlEndpoint);
        }
        else {
            message.enableGraphqlEndpoint = false;
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(exports.Operation.fromJSON(e));
            }
        }
        if (object.corsConfiguration !== undefined &&
            object.corsConfiguration !== null) {
            message.corsConfiguration = exports.CorsConfiguration.fromJSON(object.corsConfiguration);
        }
        else {
            message.corsConfiguration = undefined;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseUserDefinedApi };
        message.operations = [];
        if (object.engineConfiguration !== undefined &&
            object.engineConfiguration !== null) {
            message.engineConfiguration = exports.EngineConfiguration.fromPartial(object.engineConfiguration);
        }
        else {
            message.engineConfiguration = undefined;
        }
        if (object.enableGraphqlEndpoint !== undefined &&
            object.enableGraphqlEndpoint !== null) {
            message.enableGraphqlEndpoint = object.enableGraphqlEndpoint;
        }
        else {
            message.enableGraphqlEndpoint = false;
        }
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(exports.Operation.fromPartial(e));
            }
        }
        if (object.corsConfiguration !== undefined &&
            object.corsConfiguration !== null) {
            message.corsConfiguration = exports.CorsConfiguration.fromPartial(object.corsConfiguration);
        }
        else {
            message.corsConfiguration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfiguration !== undefined &&
            (obj.engineConfiguration = message.engineConfiguration
                ? exports.EngineConfiguration.toJSON(message.engineConfiguration)
                : undefined);
        message.enableGraphqlEndpoint !== undefined &&
            (obj.enableGraphqlEndpoint = message.enableGraphqlEndpoint);
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? exports.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.corsConfiguration !== undefined &&
            (obj.corsConfiguration = message.corsConfiguration
                ? exports.CorsConfiguration.toJSON(message.corsConfiguration)
                : undefined);
        return obj;
    },
};
const baseCorsConfiguration = {
    allowedOrigins: "",
    allowedMethods: "",
    allowedHeaders: "",
    exposedHeaders: "",
    maxAge: 0,
    allowCredentials: false,
};
exports.CorsConfiguration = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.allowedOrigins) {
            writer.uint32(10).string(v);
        }
        for (const v of message.allowedMethods) {
            writer.uint32(18).string(v);
        }
        for (const v of message.allowedHeaders) {
            writer.uint32(26).string(v);
        }
        for (const v of message.exposedHeaders) {
            writer.uint32(34).string(v);
        }
        if (message.maxAge !== 0) {
            writer.uint32(40).int64(message.maxAge);
        }
        if (message.allowCredentials === true) {
            writer.uint32(48).bool(message.allowCredentials);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = globalThis.Object.create(baseCorsConfiguration);
        message.allowedOrigins = [];
        message.allowedMethods = [];
        message.allowedHeaders = [];
        message.exposedHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedOrigins.push(reader.string());
                    break;
                case 2:
                    message.allowedMethods.push(reader.string());
                    break;
                case 3:
                    message.allowedHeaders.push(reader.string());
                    break;
                case 4:
                    message.exposedHeaders.push(reader.string());
                    break;
                case 5:
                    message.maxAge = longToNumber(reader.int64());
                    break;
                case 6:
                    message.allowCredentials = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = globalThis.Object.create(baseCorsConfiguration);
        message.allowedOrigins = [];
        message.allowedMethods = [];
        message.allowedHeaders = [];
        message.exposedHeaders = [];
        if (object.allowedOrigins !== undefined && object.allowedOrigins !== null) {
            for (const e of object.allowedOrigins) {
                message.allowedOrigins.push(String(e));
            }
        }
        if (object.allowedMethods !== undefined && object.allowedMethods !== null) {
            for (const e of object.allowedMethods) {
                message.allowedMethods.push(String(e));
            }
        }
        if (object.allowedHeaders !== undefined && object.allowedHeaders !== null) {
            for (const e of object.allowedHeaders) {
                message.allowedHeaders.push(String(e));
            }
        }
        if (object.exposedHeaders !== undefined && object.exposedHeaders !== null) {
            for (const e of object.exposedHeaders) {
                message.exposedHeaders.push(String(e));
            }
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = Number(object.maxAge);
        }
        else {
            message.maxAge = 0;
        }
        if (object.allowCredentials !== undefined &&
            object.allowCredentials !== null) {
            message.allowCredentials = Boolean(object.allowCredentials);
        }
        else {
            message.allowCredentials = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseCorsConfiguration };
        message.allowedOrigins = [];
        message.allowedMethods = [];
        message.allowedHeaders = [];
        message.exposedHeaders = [];
        if (object.allowedOrigins !== undefined && object.allowedOrigins !== null) {
            for (const e of object.allowedOrigins) {
                message.allowedOrigins.push(e);
            }
        }
        if (object.allowedMethods !== undefined && object.allowedMethods !== null) {
            for (const e of object.allowedMethods) {
                message.allowedMethods.push(e);
            }
        }
        if (object.allowedHeaders !== undefined && object.allowedHeaders !== null) {
            for (const e of object.allowedHeaders) {
                message.allowedHeaders.push(e);
            }
        }
        if (object.exposedHeaders !== undefined && object.exposedHeaders !== null) {
            for (const e of object.exposedHeaders) {
                message.exposedHeaders.push(e);
            }
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = object.maxAge;
        }
        else {
            message.maxAge = 0;
        }
        if (object.allowCredentials !== undefined &&
            object.allowCredentials !== null) {
            message.allowCredentials = object.allowCredentials;
        }
        else {
            message.allowCredentials = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.allowedOrigins) {
            obj.allowedOrigins = message.allowedOrigins.map((e) => e);
        }
        else {
            obj.allowedOrigins = [];
        }
        if (message.allowedMethods) {
            obj.allowedMethods = message.allowedMethods.map((e) => e);
        }
        else {
            obj.allowedMethods = [];
        }
        if (message.allowedHeaders) {
            obj.allowedHeaders = message.allowedHeaders.map((e) => e);
        }
        else {
            obj.allowedHeaders = [];
        }
        if (message.exposedHeaders) {
            obj.exposedHeaders = message.exposedHeaders.map((e) => e);
        }
        else {
            obj.exposedHeaders = [];
        }
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.allowCredentials !== undefined &&
            (obj.allowCredentials = message.allowCredentials);
        return obj;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    minimal_1.configure();
}
