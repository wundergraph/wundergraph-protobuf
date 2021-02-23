/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Duration } from "./google/protobuf/duration";

export const protobufPackage = "wgpb";

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  ERROR = 2,
  WARNING = 3,
  PANIC = 4,
  FATAL = 5,
}

export function logLevelFromJSON(object: any): LogLevel {
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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum LogLevel"
      );
  }
}

export function logLevelToJSON(object: LogLevel): string {
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

export enum OperationType {
  QUERY = 0,
  MUTATION = 1,
  SUBSCRIPTION = 2,
}

export function operationTypeFromJSON(object: any): OperationType {
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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum OperationType"
      );
  }
}

export function operationTypeToJSON(object: OperationType): string {
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

export enum DataSourceKind {
  STATIC = 0,
  REST = 1,
  GRAPHQL = 2,
}

export function dataSourceKindFromJSON(object: any): DataSourceKind {
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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum DataSourceKind"
      );
  }
}

export function dataSourceKindToJSON(object: DataSourceKind): string {
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

export enum HTTPMethod {
  GET = 0,
  POST = 1,
  PUT = 2,
  DELETE = 3,
}

export function hTTPMethodFromJSON(object: any): HTTPMethod {
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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum HTTPMethod"
      );
  }
}

export function hTTPMethodToJSON(object: HTTPMethod): string {
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

export enum ArgumentSource {
  OBJECT_FIELD = 0,
  FIELD_ARGUMENT = 1,
}

export function argumentSourceFromJSON(object: any): ArgumentSource {
  switch (object) {
    case 0:
    case "OBJECT_FIELD":
      return ArgumentSource.OBJECT_FIELD;
    case 1:
    case "FIELD_ARGUMENT":
      return ArgumentSource.FIELD_ARGUMENT;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ArgumentSource"
      );
  }
}

export function argumentSourceToJSON(object: ArgumentSource): string {
  switch (object) {
    case ArgumentSource.OBJECT_FIELD:
      return "OBJECT_FIELD";
    case ArgumentSource.FIELD_ARGUMENT:
      return "FIELD_ARGUMENT";
    default:
      return "UNKNOWN";
  }
}

export interface WunderNodeConfig {
  server: Server | undefined;
  logging: Logging | undefined;
  apis: Api[];
}

export interface Server {
  gracefulShutdownTimeout: Duration | undefined;
  keepAlive: Duration | undefined;
  readTimeout: Duration | undefined;
  writeTimeout: Duration | undefined;
  idleTimeout: Duration | undefined;
  certificates: Certificate[];
}

export interface Certificate {
  keyPem: string;
  certPem: string;
}

export interface Logging {
  level: LogLevel;
}

export interface Api {
  hosts: string[];
  pathPrefix: string;
  engineConfiguration: EngineConfiguration | undefined;
  enableSingleFlight: boolean;
  enableGraphqlEndpoint: boolean;
  operations: Operation[];
}

export interface Operation {
  name: string;
  content: string;
  operationType: OperationType;
  variablesSchema: string;
  responseSchema: string;
  mock: OperationMock | undefined;
}

export interface OperationMock {
  enabled: boolean;
  endpoint: string;
  subscriptionPollingIntervalMillis: number;
}

export interface EngineConfiguration {
  defaultFlushInterval: number;
  datasourceConfigurations: DataSourceConfiguration[];
  fieldConfigurations: FieldConfiguration[];
  graphqlSchema: string;
}

export interface DataSourceConfiguration {
  kind: DataSourceKind;
  rootNodes: TypeField[];
  childNodes: TypeField[];
  overrideFieldPathFromAlias: boolean;
  customRest: DataSourceCustomREST | undefined;
  customGraphql: DataSourceCustomGraphQL | undefined;
  customStatic: DataSourceCustomStatic | undefined;
}

export interface DataSourceCustomREST {
  fetch: FetchConfiguration | undefined;
  subscription: RESTSubscriptionConfiguration | undefined;
}

export interface DataSourceCustomGraphQL {
  fetch: FetchConfiguration | undefined;
  subscription: GraphQLSubscriptionConfiguration | undefined;
  federation: GraphQLFederationConfiguration | undefined;
}

export interface GraphQLFederationConfiguration {
  enabled: boolean;
  serviceSdl: string;
}

export interface DataSourceCustomStatic {
  data: string;
}

export interface GraphQLSubscriptionConfiguration {
  enabled: boolean;
  url: string;
}

export interface FetchConfiguration {
  url: string;
  method: HTTPMethod;
  header: { [key: string]: HTTPHeader };
  body: string;
  query: URLQueryConfiguration[];
}

export interface FetchConfiguration_HeaderEntry {
  key: string;
  value: HTTPHeader | undefined;
}

export interface RESTSubscriptionConfiguration {
  enabled: boolean;
  pollingIntervalMillis: number;
  skipPublishSameResponse: boolean;
}

export interface URLQueryConfiguration {
  name: string;
  value: string;
}

export interface HTTPHeader {
  values: string[];
}

export interface FieldConfiguration {
  typeName: string;
  fieldName: string;
  disableDefaultFieldMapping: boolean;
  path: string[];
  respectOverrideFieldPathFromAlias: boolean;
  argumentsConfiguration: ArgumentConfiguration[];
  requiresFields: string[];
}

export interface TypeField {
  typeName: string;
  fieldNames: string[];
}

export interface ArgumentConfiguration {
  name: string;
  sourceType: ArgumentSource;
  sourcePath: string[];
}

export interface DataUsageMetric {
  host: string;
  inboundReadBytes: number;
  inboundWriteBytes: number;
  outboundReadBytes: number;
  outboundWriteBytes: number;
}

export interface WunderNodeMetrics {
  dataUsage: DataUsageMetric[];
}

export interface WunderGraphConfiguration {
  api: UserDefinedApi | undefined;
}

export interface UserDefinedApi {
  name: string;
  engineConfiguration: EngineConfiguration | undefined;
  enableGraphqlEndpoint: boolean;
  operations: Operation[];
}

const baseWunderNodeConfig: object = {};

export const WunderNodeConfig = {
  encode(message: WunderNodeConfig, writer: Writer = Writer.create()): Writer {
    if (message.server !== undefined) {
      Server.encode(message.server, writer.uint32(10).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WunderNodeConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseWunderNodeConfig
    ) as WunderNodeConfig;
    message.apis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.server = Server.decode(reader, reader.uint32());
          break;
        case 2:
          message.logging = Logging.decode(reader, reader.uint32());
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WunderNodeConfig {
    const message = globalThis.Object.create(
      baseWunderNodeConfig
    ) as WunderNodeConfig;
    message.apis = [];
    if (object.server !== undefined && object.server !== null) {
      message.server = Server.fromJSON(object.server);
    } else {
      message.server = undefined;
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = Logging.fromJSON(object.logging);
    } else {
      message.logging = undefined;
    }
    if (object.apis !== undefined && object.apis !== null) {
      for (const e of object.apis) {
        message.apis.push(Api.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<WunderNodeConfig>): WunderNodeConfig {
    const message = { ...baseWunderNodeConfig } as WunderNodeConfig;
    message.apis = [];
    if (object.server !== undefined && object.server !== null) {
      message.server = Server.fromPartial(object.server);
    } else {
      message.server = undefined;
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = Logging.fromPartial(object.logging);
    } else {
      message.logging = undefined;
    }
    if (object.apis !== undefined && object.apis !== null) {
      for (const e of object.apis) {
        message.apis.push(Api.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: WunderNodeConfig): unknown {
    const obj: any = {};
    message.server !== undefined &&
      (obj.server = message.server ? Server.toJSON(message.server) : undefined);
    message.logging !== undefined &&
      (obj.logging = message.logging
        ? Logging.toJSON(message.logging)
        : undefined);
    if (message.apis) {
      obj.apis = message.apis.map((e) => (e ? Api.toJSON(e) : undefined));
    } else {
      obj.apis = [];
    }
    return obj;
  },
};

const baseServer: object = {};

export const Server = {
  encode(message: Server, writer: Writer = Writer.create()): Writer {
    if (message.gracefulShutdownTimeout !== undefined) {
      Duration.encode(
        message.gracefulShutdownTimeout,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.keepAlive !== undefined) {
      Duration.encode(message.keepAlive, writer.uint32(18).fork()).ldelim();
    }
    if (message.readTimeout !== undefined) {
      Duration.encode(message.readTimeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.writeTimeout !== undefined) {
      Duration.encode(message.writeTimeout, writer.uint32(34).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Duration.encode(message.idleTimeout, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.certificates) {
      Certificate.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Server {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseServer) as Server;
    message.certificates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gracefulShutdownTimeout = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.keepAlive = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.readTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.writeTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.idleTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.certificates.push(
            Certificate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Server {
    const message = globalThis.Object.create(baseServer) as Server;
    message.certificates = [];
    if (
      object.gracefulShutdownTimeout !== undefined &&
      object.gracefulShutdownTimeout !== null
    ) {
      message.gracefulShutdownTimeout = Duration.fromJSON(
        object.gracefulShutdownTimeout
      );
    } else {
      message.gracefulShutdownTimeout = undefined;
    }
    if (object.keepAlive !== undefined && object.keepAlive !== null) {
      message.keepAlive = Duration.fromJSON(object.keepAlive);
    } else {
      message.keepAlive = undefined;
    }
    if (object.readTimeout !== undefined && object.readTimeout !== null) {
      message.readTimeout = Duration.fromJSON(object.readTimeout);
    } else {
      message.readTimeout = undefined;
    }
    if (object.writeTimeout !== undefined && object.writeTimeout !== null) {
      message.writeTimeout = Duration.fromJSON(object.writeTimeout);
    } else {
      message.writeTimeout = undefined;
    }
    if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
      message.idleTimeout = Duration.fromJSON(object.idleTimeout);
    } else {
      message.idleTimeout = undefined;
    }
    if (object.certificates !== undefined && object.certificates !== null) {
      for (const e of object.certificates) {
        message.certificates.push(Certificate.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Server>): Server {
    const message = { ...baseServer } as Server;
    message.certificates = [];
    if (
      object.gracefulShutdownTimeout !== undefined &&
      object.gracefulShutdownTimeout !== null
    ) {
      message.gracefulShutdownTimeout = Duration.fromPartial(
        object.gracefulShutdownTimeout
      );
    } else {
      message.gracefulShutdownTimeout = undefined;
    }
    if (object.keepAlive !== undefined && object.keepAlive !== null) {
      message.keepAlive = Duration.fromPartial(object.keepAlive);
    } else {
      message.keepAlive = undefined;
    }
    if (object.readTimeout !== undefined && object.readTimeout !== null) {
      message.readTimeout = Duration.fromPartial(object.readTimeout);
    } else {
      message.readTimeout = undefined;
    }
    if (object.writeTimeout !== undefined && object.writeTimeout !== null) {
      message.writeTimeout = Duration.fromPartial(object.writeTimeout);
    } else {
      message.writeTimeout = undefined;
    }
    if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
      message.idleTimeout = Duration.fromPartial(object.idleTimeout);
    } else {
      message.idleTimeout = undefined;
    }
    if (object.certificates !== undefined && object.certificates !== null) {
      for (const e of object.certificates) {
        message.certificates.push(Certificate.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Server): unknown {
    const obj: any = {};
    message.gracefulShutdownTimeout !== undefined &&
      (obj.gracefulShutdownTimeout = message.gracefulShutdownTimeout
        ? Duration.toJSON(message.gracefulShutdownTimeout)
        : undefined);
    message.keepAlive !== undefined &&
      (obj.keepAlive = message.keepAlive
        ? Duration.toJSON(message.keepAlive)
        : undefined);
    message.readTimeout !== undefined &&
      (obj.readTimeout = message.readTimeout
        ? Duration.toJSON(message.readTimeout)
        : undefined);
    message.writeTimeout !== undefined &&
      (obj.writeTimeout = message.writeTimeout
        ? Duration.toJSON(message.writeTimeout)
        : undefined);
    message.idleTimeout !== undefined &&
      (obj.idleTimeout = message.idleTimeout
        ? Duration.toJSON(message.idleTimeout)
        : undefined);
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    return obj;
  },
};

const baseCertificate: object = { keyPem: "", certPem: "" };

export const Certificate = {
  encode(message: Certificate, writer: Writer = Writer.create()): Writer {
    if (message.keyPem !== "") {
      writer.uint32(18).string(message.keyPem);
    }
    if (message.certPem !== "") {
      writer.uint32(26).string(message.certPem);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCertificate) as Certificate;
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

  fromJSON(object: any): Certificate {
    const message = globalThis.Object.create(baseCertificate) as Certificate;
    if (object.keyPem !== undefined && object.keyPem !== null) {
      message.keyPem = String(object.keyPem);
    } else {
      message.keyPem = "";
    }
    if (object.certPem !== undefined && object.certPem !== null) {
      message.certPem = String(object.certPem);
    } else {
      message.certPem = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = { ...baseCertificate } as Certificate;
    if (object.keyPem !== undefined && object.keyPem !== null) {
      message.keyPem = object.keyPem;
    } else {
      message.keyPem = "";
    }
    if (object.certPem !== undefined && object.certPem !== null) {
      message.certPem = object.certPem;
    } else {
      message.certPem = "";
    }
    return message;
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.keyPem !== undefined && (obj.keyPem = message.keyPem);
    message.certPem !== undefined && (obj.certPem = message.certPem);
    return obj;
  },
};

const baseLogging: object = { level: 0 };

export const Logging = {
  encode(message: Logging, writer: Writer = Writer.create()): Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Logging {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLogging) as Logging;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Logging {
    const message = globalThis.Object.create(baseLogging) as Logging;
    if (object.level !== undefined && object.level !== null) {
      message.level = logLevelFromJSON(object.level);
    } else {
      message.level = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Logging>): Logging {
    const message = { ...baseLogging } as Logging;
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    } else {
      message.level = 0;
    }
    return message;
  },

  toJSON(message: Logging): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = logLevelToJSON(message.level));
    return obj;
  },
};

const baseApi: object = {
  hosts: "",
  pathPrefix: "",
  enableSingleFlight: false,
  enableGraphqlEndpoint: false,
};

export const Api = {
  encode(message: Api, writer: Writer = Writer.create()): Writer {
    for (const v of message.hosts) {
      writer.uint32(10).string(v!);
    }
    if (message.pathPrefix !== "") {
      writer.uint32(18).string(message.pathPrefix);
    }
    if (message.engineConfiguration !== undefined) {
      EngineConfiguration.encode(
        message.engineConfiguration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.enableSingleFlight === true) {
      writer.uint32(32).bool(message.enableSingleFlight);
    }
    if (message.enableGraphqlEndpoint === true) {
      writer.uint32(40).bool(message.enableGraphqlEndpoint);
    }
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Api {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseApi) as Api;
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
          message.engineConfiguration = EngineConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.enableSingleFlight = reader.bool();
          break;
        case 5:
          message.enableGraphqlEndpoint = reader.bool();
          break;
        case 6:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Api {
    const message = globalThis.Object.create(baseApi) as Api;
    message.hosts = [];
    message.operations = [];
    if (object.hosts !== undefined && object.hosts !== null) {
      for (const e of object.hosts) {
        message.hosts.push(String(e));
      }
    }
    if (object.pathPrefix !== undefined && object.pathPrefix !== null) {
      message.pathPrefix = String(object.pathPrefix);
    } else {
      message.pathPrefix = "";
    }
    if (
      object.engineConfiguration !== undefined &&
      object.engineConfiguration !== null
    ) {
      message.engineConfiguration = EngineConfiguration.fromJSON(
        object.engineConfiguration
      );
    } else {
      message.engineConfiguration = undefined;
    }
    if (
      object.enableSingleFlight !== undefined &&
      object.enableSingleFlight !== null
    ) {
      message.enableSingleFlight = Boolean(object.enableSingleFlight);
    } else {
      message.enableSingleFlight = false;
    }
    if (
      object.enableGraphqlEndpoint !== undefined &&
      object.enableGraphqlEndpoint !== null
    ) {
      message.enableGraphqlEndpoint = Boolean(object.enableGraphqlEndpoint);
    } else {
      message.enableGraphqlEndpoint = false;
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(Operation.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Api>): Api {
    const message = { ...baseApi } as Api;
    message.hosts = [];
    message.operations = [];
    if (object.hosts !== undefined && object.hosts !== null) {
      for (const e of object.hosts) {
        message.hosts.push(e);
      }
    }
    if (object.pathPrefix !== undefined && object.pathPrefix !== null) {
      message.pathPrefix = object.pathPrefix;
    } else {
      message.pathPrefix = "";
    }
    if (
      object.engineConfiguration !== undefined &&
      object.engineConfiguration !== null
    ) {
      message.engineConfiguration = EngineConfiguration.fromPartial(
        object.engineConfiguration
      );
    } else {
      message.engineConfiguration = undefined;
    }
    if (
      object.enableSingleFlight !== undefined &&
      object.enableSingleFlight !== null
    ) {
      message.enableSingleFlight = object.enableSingleFlight;
    } else {
      message.enableSingleFlight = false;
    }
    if (
      object.enableGraphqlEndpoint !== undefined &&
      object.enableGraphqlEndpoint !== null
    ) {
      message.enableGraphqlEndpoint = object.enableGraphqlEndpoint;
    } else {
      message.enableGraphqlEndpoint = false;
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(Operation.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Api): unknown {
    const obj: any = {};
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e);
    } else {
      obj.hosts = [];
    }
    message.pathPrefix !== undefined && (obj.pathPrefix = message.pathPrefix);
    message.engineConfiguration !== undefined &&
      (obj.engineConfiguration = message.engineConfiguration
        ? EngineConfiguration.toJSON(message.engineConfiguration)
        : undefined);
    message.enableSingleFlight !== undefined &&
      (obj.enableSingleFlight = message.enableSingleFlight);
    message.enableGraphqlEndpoint !== undefined &&
      (obj.enableGraphqlEndpoint = message.enableGraphqlEndpoint);
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    return obj;
  },
};

const baseOperation: object = {
  name: "",
  content: "",
  operationType: 0,
  variablesSchema: "",
  responseSchema: "",
};

export const Operation = {
  encode(message: Operation, writer: Writer = Writer.create()): Writer {
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
      OperationMock.encode(message.mock, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOperation) as Operation;
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
          message.operationType = reader.int32() as any;
          break;
        case 4:
          message.variablesSchema = reader.string();
          break;
        case 5:
          message.responseSchema = reader.string();
          break;
        case 6:
          message.mock = OperationMock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Operation {
    const message = globalThis.Object.create(baseOperation) as Operation;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = operationTypeFromJSON(object.operationType);
    } else {
      message.operationType = 0;
    }
    if (
      object.variablesSchema !== undefined &&
      object.variablesSchema !== null
    ) {
      message.variablesSchema = String(object.variablesSchema);
    } else {
      message.variablesSchema = "";
    }
    if (object.responseSchema !== undefined && object.responseSchema !== null) {
      message.responseSchema = String(object.responseSchema);
    } else {
      message.responseSchema = "";
    }
    if (object.mock !== undefined && object.mock !== null) {
      message.mock = OperationMock.fromJSON(object.mock);
    } else {
      message.mock = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = { ...baseOperation } as Operation;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = object.operationType;
    } else {
      message.operationType = 0;
    }
    if (
      object.variablesSchema !== undefined &&
      object.variablesSchema !== null
    ) {
      message.variablesSchema = object.variablesSchema;
    } else {
      message.variablesSchema = "";
    }
    if (object.responseSchema !== undefined && object.responseSchema !== null) {
      message.responseSchema = object.responseSchema;
    } else {
      message.responseSchema = "";
    }
    if (object.mock !== undefined && object.mock !== null) {
      message.mock = OperationMock.fromPartial(object.mock);
    } else {
      message.mock = undefined;
    }
    return message;
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
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
        ? OperationMock.toJSON(message.mock)
        : undefined);
    return obj;
  },
};

const baseOperationMock: object = {
  enabled: false,
  endpoint: "",
  subscriptionPollingIntervalMillis: 0,
};

export const OperationMock = {
  encode(message: OperationMock, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): OperationMock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOperationMock
    ) as OperationMock;
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
          message.subscriptionPollingIntervalMillis = longToNumber(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationMock {
    const message = globalThis.Object.create(
      baseOperationMock
    ) as OperationMock;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = String(object.endpoint);
    } else {
      message.endpoint = "";
    }
    if (
      object.subscriptionPollingIntervalMillis !== undefined &&
      object.subscriptionPollingIntervalMillis !== null
    ) {
      message.subscriptionPollingIntervalMillis = Number(
        object.subscriptionPollingIntervalMillis
      );
    } else {
      message.subscriptionPollingIntervalMillis = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OperationMock>): OperationMock {
    const message = { ...baseOperationMock } as OperationMock;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    } else {
      message.endpoint = "";
    }
    if (
      object.subscriptionPollingIntervalMillis !== undefined &&
      object.subscriptionPollingIntervalMillis !== null
    ) {
      message.subscriptionPollingIntervalMillis =
        object.subscriptionPollingIntervalMillis;
    } else {
      message.subscriptionPollingIntervalMillis = 0;
    }
    return message;
  },

  toJSON(message: OperationMock): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.subscriptionPollingIntervalMillis !== undefined &&
      (obj.subscriptionPollingIntervalMillis =
        message.subscriptionPollingIntervalMillis);
    return obj;
  },
};

const baseEngineConfiguration: object = {
  defaultFlushInterval: 0,
  graphqlSchema: "",
};

export const EngineConfiguration = {
  encode(
    message: EngineConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defaultFlushInterval !== 0) {
      writer.uint32(8).int64(message.defaultFlushInterval);
    }
    for (const v of message.datasourceConfigurations) {
      DataSourceConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fieldConfigurations) {
      FieldConfiguration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.graphqlSchema !== "") {
      writer.uint32(34).string(message.graphqlSchema);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EngineConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseEngineConfiguration
    ) as EngineConfiguration;
    message.datasourceConfigurations = [];
    message.fieldConfigurations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultFlushInterval = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.datasourceConfigurations.push(
            DataSourceConfiguration.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.fieldConfigurations.push(
            FieldConfiguration.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): EngineConfiguration {
    const message = globalThis.Object.create(
      baseEngineConfiguration
    ) as EngineConfiguration;
    message.datasourceConfigurations = [];
    message.fieldConfigurations = [];
    if (
      object.defaultFlushInterval !== undefined &&
      object.defaultFlushInterval !== null
    ) {
      message.defaultFlushInterval = Number(object.defaultFlushInterval);
    } else {
      message.defaultFlushInterval = 0;
    }
    if (
      object.datasourceConfigurations !== undefined &&
      object.datasourceConfigurations !== null
    ) {
      for (const e of object.datasourceConfigurations) {
        message.datasourceConfigurations.push(
          DataSourceConfiguration.fromJSON(e)
        );
      }
    }
    if (
      object.fieldConfigurations !== undefined &&
      object.fieldConfigurations !== null
    ) {
      for (const e of object.fieldConfigurations) {
        message.fieldConfigurations.push(FieldConfiguration.fromJSON(e));
      }
    }
    if (object.graphqlSchema !== undefined && object.graphqlSchema !== null) {
      message.graphqlSchema = String(object.graphqlSchema);
    } else {
      message.graphqlSchema = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<EngineConfiguration>): EngineConfiguration {
    const message = { ...baseEngineConfiguration } as EngineConfiguration;
    message.datasourceConfigurations = [];
    message.fieldConfigurations = [];
    if (
      object.defaultFlushInterval !== undefined &&
      object.defaultFlushInterval !== null
    ) {
      message.defaultFlushInterval = object.defaultFlushInterval;
    } else {
      message.defaultFlushInterval = 0;
    }
    if (
      object.datasourceConfigurations !== undefined &&
      object.datasourceConfigurations !== null
    ) {
      for (const e of object.datasourceConfigurations) {
        message.datasourceConfigurations.push(
          DataSourceConfiguration.fromPartial(e)
        );
      }
    }
    if (
      object.fieldConfigurations !== undefined &&
      object.fieldConfigurations !== null
    ) {
      for (const e of object.fieldConfigurations) {
        message.fieldConfigurations.push(FieldConfiguration.fromPartial(e));
      }
    }
    if (object.graphqlSchema !== undefined && object.graphqlSchema !== null) {
      message.graphqlSchema = object.graphqlSchema;
    } else {
      message.graphqlSchema = "";
    }
    return message;
  },

  toJSON(message: EngineConfiguration): unknown {
    const obj: any = {};
    message.defaultFlushInterval !== undefined &&
      (obj.defaultFlushInterval = message.defaultFlushInterval);
    if (message.datasourceConfigurations) {
      obj.datasourceConfigurations = message.datasourceConfigurations.map((e) =>
        e ? DataSourceConfiguration.toJSON(e) : undefined
      );
    } else {
      obj.datasourceConfigurations = [];
    }
    if (message.fieldConfigurations) {
      obj.fieldConfigurations = message.fieldConfigurations.map((e) =>
        e ? FieldConfiguration.toJSON(e) : undefined
      );
    } else {
      obj.fieldConfigurations = [];
    }
    message.graphqlSchema !== undefined &&
      (obj.graphqlSchema = message.graphqlSchema);
    return obj;
  },
};

const baseDataSourceConfiguration: object = {
  kind: 0,
  overrideFieldPathFromAlias: false,
};

export const DataSourceConfiguration = {
  encode(
    message: DataSourceConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    for (const v of message.rootNodes) {
      TypeField.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.childNodes) {
      TypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.overrideFieldPathFromAlias === true) {
      writer.uint32(32).bool(message.overrideFieldPathFromAlias);
    }
    if (message.customRest !== undefined) {
      DataSourceCustomREST.encode(
        message.customRest,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.customGraphql !== undefined) {
      DataSourceCustomGraphQL.encode(
        message.customGraphql,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.customStatic !== undefined) {
      DataSourceCustomStatic.encode(
        message.customStatic,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataSourceConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDataSourceConfiguration
    ) as DataSourceConfiguration;
    message.rootNodes = [];
    message.childNodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.rootNodes.push(TypeField.decode(reader, reader.uint32()));
          break;
        case 3:
          message.childNodes.push(TypeField.decode(reader, reader.uint32()));
          break;
        case 4:
          message.overrideFieldPathFromAlias = reader.bool();
          break;
        case 5:
          message.customRest = DataSourceCustomREST.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.customGraphql = DataSourceCustomGraphQL.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.customStatic = DataSourceCustomStatic.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataSourceConfiguration {
    const message = globalThis.Object.create(
      baseDataSourceConfiguration
    ) as DataSourceConfiguration;
    message.rootNodes = [];
    message.childNodes = [];
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = dataSourceKindFromJSON(object.kind);
    } else {
      message.kind = 0;
    }
    if (object.rootNodes !== undefined && object.rootNodes !== null) {
      for (const e of object.rootNodes) {
        message.rootNodes.push(TypeField.fromJSON(e));
      }
    }
    if (object.childNodes !== undefined && object.childNodes !== null) {
      for (const e of object.childNodes) {
        message.childNodes.push(TypeField.fromJSON(e));
      }
    }
    if (
      object.overrideFieldPathFromAlias !== undefined &&
      object.overrideFieldPathFromAlias !== null
    ) {
      message.overrideFieldPathFromAlias = Boolean(
        object.overrideFieldPathFromAlias
      );
    } else {
      message.overrideFieldPathFromAlias = false;
    }
    if (object.customRest !== undefined && object.customRest !== null) {
      message.customRest = DataSourceCustomREST.fromJSON(object.customRest);
    } else {
      message.customRest = undefined;
    }
    if (object.customGraphql !== undefined && object.customGraphql !== null) {
      message.customGraphql = DataSourceCustomGraphQL.fromJSON(
        object.customGraphql
      );
    } else {
      message.customGraphql = undefined;
    }
    if (object.customStatic !== undefined && object.customStatic !== null) {
      message.customStatic = DataSourceCustomStatic.fromJSON(
        object.customStatic
      );
    } else {
      message.customStatic = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DataSourceConfiguration>
  ): DataSourceConfiguration {
    const message = {
      ...baseDataSourceConfiguration,
    } as DataSourceConfiguration;
    message.rootNodes = [];
    message.childNodes = [];
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = 0;
    }
    if (object.rootNodes !== undefined && object.rootNodes !== null) {
      for (const e of object.rootNodes) {
        message.rootNodes.push(TypeField.fromPartial(e));
      }
    }
    if (object.childNodes !== undefined && object.childNodes !== null) {
      for (const e of object.childNodes) {
        message.childNodes.push(TypeField.fromPartial(e));
      }
    }
    if (
      object.overrideFieldPathFromAlias !== undefined &&
      object.overrideFieldPathFromAlias !== null
    ) {
      message.overrideFieldPathFromAlias = object.overrideFieldPathFromAlias;
    } else {
      message.overrideFieldPathFromAlias = false;
    }
    if (object.customRest !== undefined && object.customRest !== null) {
      message.customRest = DataSourceCustomREST.fromPartial(object.customRest);
    } else {
      message.customRest = undefined;
    }
    if (object.customGraphql !== undefined && object.customGraphql !== null) {
      message.customGraphql = DataSourceCustomGraphQL.fromPartial(
        object.customGraphql
      );
    } else {
      message.customGraphql = undefined;
    }
    if (object.customStatic !== undefined && object.customStatic !== null) {
      message.customStatic = DataSourceCustomStatic.fromPartial(
        object.customStatic
      );
    } else {
      message.customStatic = undefined;
    }
    return message;
  },

  toJSON(message: DataSourceConfiguration): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = dataSourceKindToJSON(message.kind));
    if (message.rootNodes) {
      obj.rootNodes = message.rootNodes.map((e) =>
        e ? TypeField.toJSON(e) : undefined
      );
    } else {
      obj.rootNodes = [];
    }
    if (message.childNodes) {
      obj.childNodes = message.childNodes.map((e) =>
        e ? TypeField.toJSON(e) : undefined
      );
    } else {
      obj.childNodes = [];
    }
    message.overrideFieldPathFromAlias !== undefined &&
      (obj.overrideFieldPathFromAlias = message.overrideFieldPathFromAlias);
    message.customRest !== undefined &&
      (obj.customRest = message.customRest
        ? DataSourceCustomREST.toJSON(message.customRest)
        : undefined);
    message.customGraphql !== undefined &&
      (obj.customGraphql = message.customGraphql
        ? DataSourceCustomGraphQL.toJSON(message.customGraphql)
        : undefined);
    message.customStatic !== undefined &&
      (obj.customStatic = message.customStatic
        ? DataSourceCustomStatic.toJSON(message.customStatic)
        : undefined);
    return obj;
  },
};

const baseDataSourceCustomREST: object = {};

export const DataSourceCustomREST = {
  encode(
    message: DataSourceCustomREST,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fetch !== undefined) {
      FetchConfiguration.encode(
        message.fetch,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subscription !== undefined) {
      RESTSubscriptionConfiguration.encode(
        message.subscription,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataSourceCustomREST {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDataSourceCustomREST
    ) as DataSourceCustomREST;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fetch = FetchConfiguration.decode(reader, reader.uint32());
          break;
        case 2:
          message.subscription = RESTSubscriptionConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomREST {
    const message = globalThis.Object.create(
      baseDataSourceCustomREST
    ) as DataSourceCustomREST;
    if (object.fetch !== undefined && object.fetch !== null) {
      message.fetch = FetchConfiguration.fromJSON(object.fetch);
    } else {
      message.fetch = undefined;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = RESTSubscriptionConfiguration.fromJSON(
        object.subscription
      );
    } else {
      message.subscription = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<DataSourceCustomREST>): DataSourceCustomREST {
    const message = { ...baseDataSourceCustomREST } as DataSourceCustomREST;
    if (object.fetch !== undefined && object.fetch !== null) {
      message.fetch = FetchConfiguration.fromPartial(object.fetch);
    } else {
      message.fetch = undefined;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = RESTSubscriptionConfiguration.fromPartial(
        object.subscription
      );
    } else {
      message.subscription = undefined;
    }
    return message;
  },

  toJSON(message: DataSourceCustomREST): unknown {
    const obj: any = {};
    message.fetch !== undefined &&
      (obj.fetch = message.fetch
        ? FetchConfiguration.toJSON(message.fetch)
        : undefined);
    message.subscription !== undefined &&
      (obj.subscription = message.subscription
        ? RESTSubscriptionConfiguration.toJSON(message.subscription)
        : undefined);
    return obj;
  },
};

const baseDataSourceCustomGraphQL: object = {};

export const DataSourceCustomGraphQL = {
  encode(
    message: DataSourceCustomGraphQL,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fetch !== undefined) {
      FetchConfiguration.encode(
        message.fetch,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subscription !== undefined) {
      GraphQLSubscriptionConfiguration.encode(
        message.subscription,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.federation !== undefined) {
      GraphQLFederationConfiguration.encode(
        message.federation,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataSourceCustomGraphQL {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDataSourceCustomGraphQL
    ) as DataSourceCustomGraphQL;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fetch = FetchConfiguration.decode(reader, reader.uint32());
          break;
        case 2:
          message.subscription = GraphQLSubscriptionConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.federation = GraphQLFederationConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomGraphQL {
    const message = globalThis.Object.create(
      baseDataSourceCustomGraphQL
    ) as DataSourceCustomGraphQL;
    if (object.fetch !== undefined && object.fetch !== null) {
      message.fetch = FetchConfiguration.fromJSON(object.fetch);
    } else {
      message.fetch = undefined;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = GraphQLSubscriptionConfiguration.fromJSON(
        object.subscription
      );
    } else {
      message.subscription = undefined;
    }
    if (object.federation !== undefined && object.federation !== null) {
      message.federation = GraphQLFederationConfiguration.fromJSON(
        object.federation
      );
    } else {
      message.federation = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DataSourceCustomGraphQL>
  ): DataSourceCustomGraphQL {
    const message = {
      ...baseDataSourceCustomGraphQL,
    } as DataSourceCustomGraphQL;
    if (object.fetch !== undefined && object.fetch !== null) {
      message.fetch = FetchConfiguration.fromPartial(object.fetch);
    } else {
      message.fetch = undefined;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = GraphQLSubscriptionConfiguration.fromPartial(
        object.subscription
      );
    } else {
      message.subscription = undefined;
    }
    if (object.federation !== undefined && object.federation !== null) {
      message.federation = GraphQLFederationConfiguration.fromPartial(
        object.federation
      );
    } else {
      message.federation = undefined;
    }
    return message;
  },

  toJSON(message: DataSourceCustomGraphQL): unknown {
    const obj: any = {};
    message.fetch !== undefined &&
      (obj.fetch = message.fetch
        ? FetchConfiguration.toJSON(message.fetch)
        : undefined);
    message.subscription !== undefined &&
      (obj.subscription = message.subscription
        ? GraphQLSubscriptionConfiguration.toJSON(message.subscription)
        : undefined);
    message.federation !== undefined &&
      (obj.federation = message.federation
        ? GraphQLFederationConfiguration.toJSON(message.federation)
        : undefined);
    return obj;
  },
};

const baseGraphQLFederationConfiguration: object = {
  enabled: false,
  serviceSdl: "",
};

export const GraphQLFederationConfiguration = {
  encode(
    message: GraphQLFederationConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.serviceSdl !== "") {
      writer.uint32(18).string(message.serviceSdl);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GraphQLFederationConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseGraphQLFederationConfiguration
    ) as GraphQLFederationConfiguration;
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

  fromJSON(object: any): GraphQLFederationConfiguration {
    const message = globalThis.Object.create(
      baseGraphQLFederationConfiguration
    ) as GraphQLFederationConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.serviceSdl !== undefined && object.serviceSdl !== null) {
      message.serviceSdl = String(object.serviceSdl);
    } else {
      message.serviceSdl = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GraphQLFederationConfiguration>
  ): GraphQLFederationConfiguration {
    const message = {
      ...baseGraphQLFederationConfiguration,
    } as GraphQLFederationConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.serviceSdl !== undefined && object.serviceSdl !== null) {
      message.serviceSdl = object.serviceSdl;
    } else {
      message.serviceSdl = "";
    }
    return message;
  },

  toJSON(message: GraphQLFederationConfiguration): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.serviceSdl !== undefined && (obj.serviceSdl = message.serviceSdl);
    return obj;
  },
};

const baseDataSourceCustomStatic: object = { data: "" };

export const DataSourceCustomStatic = {
  encode(
    message: DataSourceCustomStatic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataSourceCustomStatic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDataSourceCustomStatic
    ) as DataSourceCustomStatic;
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

  fromJSON(object: any): DataSourceCustomStatic {
    const message = globalThis.Object.create(
      baseDataSourceCustomStatic
    ) as DataSourceCustomStatic;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DataSourceCustomStatic>
  ): DataSourceCustomStatic {
    const message = { ...baseDataSourceCustomStatic } as DataSourceCustomStatic;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: DataSourceCustomStatic): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
};

const baseGraphQLSubscriptionConfiguration: object = {
  enabled: false,
  url: "",
};

export const GraphQLSubscriptionConfiguration = {
  encode(
    message: GraphQLSubscriptionConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GraphQLSubscriptionConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseGraphQLSubscriptionConfiguration
    ) as GraphQLSubscriptionConfiguration;
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

  fromJSON(object: any): GraphQLSubscriptionConfiguration {
    const message = globalThis.Object.create(
      baseGraphQLSubscriptionConfiguration
    ) as GraphQLSubscriptionConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GraphQLSubscriptionConfiguration>
  ): GraphQLSubscriptionConfiguration {
    const message = {
      ...baseGraphQLSubscriptionConfiguration,
    } as GraphQLSubscriptionConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: GraphQLSubscriptionConfiguration): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
};

const baseFetchConfiguration: object = { url: "", method: 0, body: "" };

export const FetchConfiguration = {
  encode(
    message: FetchConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    Object.entries(message.header).forEach(([key, value]) => {
      FetchConfiguration_HeaderEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    for (const v of message.query) {
      URLQueryConfiguration.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FetchConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFetchConfiguration
    ) as FetchConfiguration;
    message.header = {};
    message.query = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.method = reader.int32() as any;
          break;
        case 3:
          const entry3 = FetchConfiguration_HeaderEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.header[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.query.push(
            URLQueryConfiguration.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchConfiguration {
    const message = globalThis.Object.create(
      baseFetchConfiguration
    ) as FetchConfiguration;
    message.header = {};
    message.query = [];
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = hTTPMethodFromJSON(object.method);
    } else {
      message.method = 0;
    }
    if (object.header !== undefined && object.header !== null) {
      Object.entries(object.header).forEach(([key, value]) => {
        message.header[key] = HTTPHeader.fromJSON(value);
      });
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.query !== undefined && object.query !== null) {
      for (const e of object.query) {
        message.query.push(URLQueryConfiguration.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FetchConfiguration>): FetchConfiguration {
    const message = { ...baseFetchConfiguration } as FetchConfiguration;
    message.header = {};
    message.query = [];
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = 0;
    }
    if (object.header !== undefined && object.header !== null) {
      Object.entries(object.header).forEach(([key, value]) => {
        if (value !== undefined) {
          message.header[key] = HTTPHeader.fromPartial(value);
        }
      });
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.query !== undefined && object.query !== null) {
      for (const e of object.query) {
        message.query.push(URLQueryConfiguration.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: FetchConfiguration): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.method !== undefined &&
      (obj.method = hTTPMethodToJSON(message.method));
    obj.header = {};
    if (message.header) {
      Object.entries(message.header).forEach(([k, v]) => {
        obj.header[k] = HTTPHeader.toJSON(v);
      });
    }
    message.body !== undefined && (obj.body = message.body);
    if (message.query) {
      obj.query = message.query.map((e) =>
        e ? URLQueryConfiguration.toJSON(e) : undefined
      );
    } else {
      obj.query = [];
    }
    return obj;
  },
};

const baseFetchConfiguration_HeaderEntry: object = { key: "" };

export const FetchConfiguration_HeaderEntry = {
  encode(
    message: FetchConfiguration_HeaderEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      HTTPHeader.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FetchConfiguration_HeaderEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFetchConfiguration_HeaderEntry
    ) as FetchConfiguration_HeaderEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = HTTPHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchConfiguration_HeaderEntry {
    const message = globalThis.Object.create(
      baseFetchConfiguration_HeaderEntry
    ) as FetchConfiguration_HeaderEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = HTTPHeader.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FetchConfiguration_HeaderEntry>
  ): FetchConfiguration_HeaderEntry {
    const message = {
      ...baseFetchConfiguration_HeaderEntry,
    } as FetchConfiguration_HeaderEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = HTTPHeader.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: FetchConfiguration_HeaderEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? HTTPHeader.toJSON(message.value)
        : undefined);
    return obj;
  },
};

const baseRESTSubscriptionConfiguration: object = {
  enabled: false,
  pollingIntervalMillis: 0,
  skipPublishSameResponse: false,
};

export const RESTSubscriptionConfiguration = {
  encode(
    message: RESTSubscriptionConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RESTSubscriptionConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRESTSubscriptionConfiguration
    ) as RESTSubscriptionConfiguration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.pollingIntervalMillis = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): RESTSubscriptionConfiguration {
    const message = globalThis.Object.create(
      baseRESTSubscriptionConfiguration
    ) as RESTSubscriptionConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (
      object.pollingIntervalMillis !== undefined &&
      object.pollingIntervalMillis !== null
    ) {
      message.pollingIntervalMillis = Number(object.pollingIntervalMillis);
    } else {
      message.pollingIntervalMillis = 0;
    }
    if (
      object.skipPublishSameResponse !== undefined &&
      object.skipPublishSameResponse !== null
    ) {
      message.skipPublishSameResponse = Boolean(object.skipPublishSameResponse);
    } else {
      message.skipPublishSameResponse = false;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<RESTSubscriptionConfiguration>
  ): RESTSubscriptionConfiguration {
    const message = {
      ...baseRESTSubscriptionConfiguration,
    } as RESTSubscriptionConfiguration;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (
      object.pollingIntervalMillis !== undefined &&
      object.pollingIntervalMillis !== null
    ) {
      message.pollingIntervalMillis = object.pollingIntervalMillis;
    } else {
      message.pollingIntervalMillis = 0;
    }
    if (
      object.skipPublishSameResponse !== undefined &&
      object.skipPublishSameResponse !== null
    ) {
      message.skipPublishSameResponse = object.skipPublishSameResponse;
    } else {
      message.skipPublishSameResponse = false;
    }
    return message;
  },

  toJSON(message: RESTSubscriptionConfiguration): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.pollingIntervalMillis !== undefined &&
      (obj.pollingIntervalMillis = message.pollingIntervalMillis);
    message.skipPublishSameResponse !== undefined &&
      (obj.skipPublishSameResponse = message.skipPublishSameResponse);
    return obj;
  },
};

const baseURLQueryConfiguration: object = { name: "", value: "" };

export const URLQueryConfiguration = {
  encode(
    message: URLQueryConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): URLQueryConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseURLQueryConfiguration
    ) as URLQueryConfiguration;
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

  fromJSON(object: any): URLQueryConfiguration {
    const message = globalThis.Object.create(
      baseURLQueryConfiguration
    ) as URLQueryConfiguration;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<URLQueryConfiguration>
  ): URLQueryConfiguration {
    const message = { ...baseURLQueryConfiguration } as URLQueryConfiguration;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: URLQueryConfiguration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

const baseHTTPHeader: object = { values: "" };

export const HTTPHeader = {
  encode(message: HTTPHeader, writer: Writer = Writer.create()): Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HTTPHeader {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseHTTPHeader) as HTTPHeader;
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

  fromJSON(object: any): HTTPHeader {
    const message = globalThis.Object.create(baseHTTPHeader) as HTTPHeader;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HTTPHeader>): HTTPHeader {
    const message = { ...baseHTTPHeader } as HTTPHeader;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(e);
      }
    }
    return message;
  },

  toJSON(message: HTTPHeader): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },
};

const baseFieldConfiguration: object = {
  typeName: "",
  fieldName: "",
  disableDefaultFieldMapping: false,
  path: "",
  respectOverrideFieldPathFromAlias: false,
  requiresFields: "",
};

export const FieldConfiguration = {
  encode(
    message: FieldConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
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
      writer.uint32(34).string(v!);
    }
    if (message.respectOverrideFieldPathFromAlias === true) {
      writer.uint32(40).bool(message.respectOverrideFieldPathFromAlias);
    }
    for (const v of message.argumentsConfiguration) {
      ArgumentConfiguration.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.requiresFields) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FieldConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFieldConfiguration
    ) as FieldConfiguration;
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
          message.argumentsConfiguration.push(
            ArgumentConfiguration.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FieldConfiguration {
    const message = globalThis.Object.create(
      baseFieldConfiguration
    ) as FieldConfiguration;
    message.path = [];
    message.argumentsConfiguration = [];
    message.requiresFields = [];
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = String(object.typeName);
    } else {
      message.typeName = "";
    }
    if (object.fieldName !== undefined && object.fieldName !== null) {
      message.fieldName = String(object.fieldName);
    } else {
      message.fieldName = "";
    }
    if (
      object.disableDefaultFieldMapping !== undefined &&
      object.disableDefaultFieldMapping !== null
    ) {
      message.disableDefaultFieldMapping = Boolean(
        object.disableDefaultFieldMapping
      );
    } else {
      message.disableDefaultFieldMapping = false;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    if (
      object.respectOverrideFieldPathFromAlias !== undefined &&
      object.respectOverrideFieldPathFromAlias !== null
    ) {
      message.respectOverrideFieldPathFromAlias = Boolean(
        object.respectOverrideFieldPathFromAlias
      );
    } else {
      message.respectOverrideFieldPathFromAlias = false;
    }
    if (
      object.argumentsConfiguration !== undefined &&
      object.argumentsConfiguration !== null
    ) {
      for (const e of object.argumentsConfiguration) {
        message.argumentsConfiguration.push(ArgumentConfiguration.fromJSON(e));
      }
    }
    if (object.requiresFields !== undefined && object.requiresFields !== null) {
      for (const e of object.requiresFields) {
        message.requiresFields.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FieldConfiguration>): FieldConfiguration {
    const message = { ...baseFieldConfiguration } as FieldConfiguration;
    message.path = [];
    message.argumentsConfiguration = [];
    message.requiresFields = [];
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = object.typeName;
    } else {
      message.typeName = "";
    }
    if (object.fieldName !== undefined && object.fieldName !== null) {
      message.fieldName = object.fieldName;
    } else {
      message.fieldName = "";
    }
    if (
      object.disableDefaultFieldMapping !== undefined &&
      object.disableDefaultFieldMapping !== null
    ) {
      message.disableDefaultFieldMapping = object.disableDefaultFieldMapping;
    } else {
      message.disableDefaultFieldMapping = false;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    if (
      object.respectOverrideFieldPathFromAlias !== undefined &&
      object.respectOverrideFieldPathFromAlias !== null
    ) {
      message.respectOverrideFieldPathFromAlias =
        object.respectOverrideFieldPathFromAlias;
    } else {
      message.respectOverrideFieldPathFromAlias = false;
    }
    if (
      object.argumentsConfiguration !== undefined &&
      object.argumentsConfiguration !== null
    ) {
      for (const e of object.argumentsConfiguration) {
        message.argumentsConfiguration.push(
          ArgumentConfiguration.fromPartial(e)
        );
      }
    }
    if (object.requiresFields !== undefined && object.requiresFields !== null) {
      for (const e of object.requiresFields) {
        message.requiresFields.push(e);
      }
    }
    return message;
  },

  toJSON(message: FieldConfiguration): unknown {
    const obj: any = {};
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    message.disableDefaultFieldMapping !== undefined &&
      (obj.disableDefaultFieldMapping = message.disableDefaultFieldMapping);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.respectOverrideFieldPathFromAlias !== undefined &&
      (obj.respectOverrideFieldPathFromAlias =
        message.respectOverrideFieldPathFromAlias);
    if (message.argumentsConfiguration) {
      obj.argumentsConfiguration = message.argumentsConfiguration.map((e) =>
        e ? ArgumentConfiguration.toJSON(e) : undefined
      );
    } else {
      obj.argumentsConfiguration = [];
    }
    if (message.requiresFields) {
      obj.requiresFields = message.requiresFields.map((e) => e);
    } else {
      obj.requiresFields = [];
    }
    return obj;
  },
};

const baseTypeField: object = { typeName: "", fieldNames: "" };

export const TypeField = {
  encode(message: TypeField, writer: Writer = Writer.create()): Writer {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    for (const v of message.fieldNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TypeField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTypeField) as TypeField;
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

  fromJSON(object: any): TypeField {
    const message = globalThis.Object.create(baseTypeField) as TypeField;
    message.fieldNames = [];
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = String(object.typeName);
    } else {
      message.typeName = "";
    }
    if (object.fieldNames !== undefined && object.fieldNames !== null) {
      for (const e of object.fieldNames) {
        message.fieldNames.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TypeField>): TypeField {
    const message = { ...baseTypeField } as TypeField;
    message.fieldNames = [];
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = object.typeName;
    } else {
      message.typeName = "";
    }
    if (object.fieldNames !== undefined && object.fieldNames !== null) {
      for (const e of object.fieldNames) {
        message.fieldNames.push(e);
      }
    }
    return message;
  },

  toJSON(message: TypeField): unknown {
    const obj: any = {};
    message.typeName !== undefined && (obj.typeName = message.typeName);
    if (message.fieldNames) {
      obj.fieldNames = message.fieldNames.map((e) => e);
    } else {
      obj.fieldNames = [];
    }
    return obj;
  },
};

const baseArgumentConfiguration: object = {
  name: "",
  sourceType: 0,
  sourcePath: "",
};

export const ArgumentConfiguration = {
  encode(
    message: ArgumentConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).int32(message.sourceType);
    }
    for (const v of message.sourcePath) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ArgumentConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseArgumentConfiguration
    ) as ArgumentConfiguration;
    message.sourcePath = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.sourceType = reader.int32() as any;
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

  fromJSON(object: any): ArgumentConfiguration {
    const message = globalThis.Object.create(
      baseArgumentConfiguration
    ) as ArgumentConfiguration;
    message.sourcePath = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.sourceType !== undefined && object.sourceType !== null) {
      message.sourceType = argumentSourceFromJSON(object.sourceType);
    } else {
      message.sourceType = 0;
    }
    if (object.sourcePath !== undefined && object.sourcePath !== null) {
      for (const e of object.sourcePath) {
        message.sourcePath.push(String(e));
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ArgumentConfiguration>
  ): ArgumentConfiguration {
    const message = { ...baseArgumentConfiguration } as ArgumentConfiguration;
    message.sourcePath = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.sourceType !== undefined && object.sourceType !== null) {
      message.sourceType = object.sourceType;
    } else {
      message.sourceType = 0;
    }
    if (object.sourcePath !== undefined && object.sourcePath !== null) {
      for (const e of object.sourcePath) {
        message.sourcePath.push(e);
      }
    }
    return message;
  },

  toJSON(message: ArgumentConfiguration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.sourceType !== undefined &&
      (obj.sourceType = argumentSourceToJSON(message.sourceType));
    if (message.sourcePath) {
      obj.sourcePath = message.sourcePath.map((e) => e);
    } else {
      obj.sourcePath = [];
    }
    return obj;
  },
};

const baseDataUsageMetric: object = {
  host: "",
  inboundReadBytes: 0,
  inboundWriteBytes: 0,
  outboundReadBytes: 0,
  outboundWriteBytes: 0,
};

export const DataUsageMetric = {
  encode(message: DataUsageMetric, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): DataUsageMetric {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDataUsageMetric
    ) as DataUsageMetric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.inboundReadBytes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.inboundWriteBytes = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.outboundReadBytes = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.outboundWriteBytes = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataUsageMetric {
    const message = globalThis.Object.create(
      baseDataUsageMetric
    ) as DataUsageMetric;
    if (object.host !== undefined && object.host !== null) {
      message.host = String(object.host);
    } else {
      message.host = "";
    }
    if (
      object.inboundReadBytes !== undefined &&
      object.inboundReadBytes !== null
    ) {
      message.inboundReadBytes = Number(object.inboundReadBytes);
    } else {
      message.inboundReadBytes = 0;
    }
    if (
      object.inboundWriteBytes !== undefined &&
      object.inboundWriteBytes !== null
    ) {
      message.inboundWriteBytes = Number(object.inboundWriteBytes);
    } else {
      message.inboundWriteBytes = 0;
    }
    if (
      object.outboundReadBytes !== undefined &&
      object.outboundReadBytes !== null
    ) {
      message.outboundReadBytes = Number(object.outboundReadBytes);
    } else {
      message.outboundReadBytes = 0;
    }
    if (
      object.outboundWriteBytes !== undefined &&
      object.outboundWriteBytes !== null
    ) {
      message.outboundWriteBytes = Number(object.outboundWriteBytes);
    } else {
      message.outboundWriteBytes = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<DataUsageMetric>): DataUsageMetric {
    const message = { ...baseDataUsageMetric } as DataUsageMetric;
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    } else {
      message.host = "";
    }
    if (
      object.inboundReadBytes !== undefined &&
      object.inboundReadBytes !== null
    ) {
      message.inboundReadBytes = object.inboundReadBytes;
    } else {
      message.inboundReadBytes = 0;
    }
    if (
      object.inboundWriteBytes !== undefined &&
      object.inboundWriteBytes !== null
    ) {
      message.inboundWriteBytes = object.inboundWriteBytes;
    } else {
      message.inboundWriteBytes = 0;
    }
    if (
      object.outboundReadBytes !== undefined &&
      object.outboundReadBytes !== null
    ) {
      message.outboundReadBytes = object.outboundReadBytes;
    } else {
      message.outboundReadBytes = 0;
    }
    if (
      object.outboundWriteBytes !== undefined &&
      object.outboundWriteBytes !== null
    ) {
      message.outboundWriteBytes = object.outboundWriteBytes;
    } else {
      message.outboundWriteBytes = 0;
    }
    return message;
  },

  toJSON(message: DataUsageMetric): unknown {
    const obj: any = {};
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

const baseWunderNodeMetrics: object = {};

export const WunderNodeMetrics = {
  encode(message: WunderNodeMetrics, writer: Writer = Writer.create()): Writer {
    for (const v of message.dataUsage) {
      DataUsageMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WunderNodeMetrics {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseWunderNodeMetrics
    ) as WunderNodeMetrics;
    message.dataUsage = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataUsage.push(
            DataUsageMetric.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WunderNodeMetrics {
    const message = globalThis.Object.create(
      baseWunderNodeMetrics
    ) as WunderNodeMetrics;
    message.dataUsage = [];
    if (object.dataUsage !== undefined && object.dataUsage !== null) {
      for (const e of object.dataUsage) {
        message.dataUsage.push(DataUsageMetric.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<WunderNodeMetrics>): WunderNodeMetrics {
    const message = { ...baseWunderNodeMetrics } as WunderNodeMetrics;
    message.dataUsage = [];
    if (object.dataUsage !== undefined && object.dataUsage !== null) {
      for (const e of object.dataUsage) {
        message.dataUsage.push(DataUsageMetric.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: WunderNodeMetrics): unknown {
    const obj: any = {};
    if (message.dataUsage) {
      obj.dataUsage = message.dataUsage.map((e) =>
        e ? DataUsageMetric.toJSON(e) : undefined
      );
    } else {
      obj.dataUsage = [];
    }
    return obj;
  },
};

const baseWunderGraphConfiguration: object = {};

export const WunderGraphConfiguration = {
  encode(
    message: WunderGraphConfiguration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.api !== undefined) {
      UserDefinedApi.encode(message.api, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): WunderGraphConfiguration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseWunderGraphConfiguration
    ) as WunderGraphConfiguration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.api = UserDefinedApi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WunderGraphConfiguration {
    const message = globalThis.Object.create(
      baseWunderGraphConfiguration
    ) as WunderGraphConfiguration;
    if (object.api !== undefined && object.api !== null) {
      message.api = UserDefinedApi.fromJSON(object.api);
    } else {
      message.api = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<WunderGraphConfiguration>
  ): WunderGraphConfiguration {
    const message = {
      ...baseWunderGraphConfiguration,
    } as WunderGraphConfiguration;
    if (object.api !== undefined && object.api !== null) {
      message.api = UserDefinedApi.fromPartial(object.api);
    } else {
      message.api = undefined;
    }
    return message;
  },

  toJSON(message: WunderGraphConfiguration): unknown {
    const obj: any = {};
    message.api !== undefined &&
      (obj.api = message.api ? UserDefinedApi.toJSON(message.api) : undefined);
    return obj;
  },
};

const baseUserDefinedApi: object = { name: "", enableGraphqlEndpoint: false };

export const UserDefinedApi = {
  encode(message: UserDefinedApi, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.engineConfiguration !== undefined) {
      EngineConfiguration.encode(
        message.engineConfiguration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.enableGraphqlEndpoint === true) {
      writer.uint32(40).bool(message.enableGraphqlEndpoint);
    }
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserDefinedApi {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseUserDefinedApi
    ) as UserDefinedApi;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.engineConfiguration = EngineConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.enableGraphqlEndpoint = reader.bool();
          break;
        case 6:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserDefinedApi {
    const message = globalThis.Object.create(
      baseUserDefinedApi
    ) as UserDefinedApi;
    message.operations = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.engineConfiguration !== undefined &&
      object.engineConfiguration !== null
    ) {
      message.engineConfiguration = EngineConfiguration.fromJSON(
        object.engineConfiguration
      );
    } else {
      message.engineConfiguration = undefined;
    }
    if (
      object.enableGraphqlEndpoint !== undefined &&
      object.enableGraphqlEndpoint !== null
    ) {
      message.enableGraphqlEndpoint = Boolean(object.enableGraphqlEndpoint);
    } else {
      message.enableGraphqlEndpoint = false;
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(Operation.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserDefinedApi>): UserDefinedApi {
    const message = { ...baseUserDefinedApi } as UserDefinedApi;
    message.operations = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.engineConfiguration !== undefined &&
      object.engineConfiguration !== null
    ) {
      message.engineConfiguration = EngineConfiguration.fromPartial(
        object.engineConfiguration
      );
    } else {
      message.engineConfiguration = undefined;
    }
    if (
      object.enableGraphqlEndpoint !== undefined &&
      object.enableGraphqlEndpoint !== null
    ) {
      message.enableGraphqlEndpoint = object.enableGraphqlEndpoint;
    } else {
      message.enableGraphqlEndpoint = false;
    }
    if (object.operations !== undefined && object.operations !== null) {
      for (const e of object.operations) {
        message.operations.push(Operation.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: UserDefinedApi): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.engineConfiguration !== undefined &&
      (obj.engineConfiguration = message.engineConfiguration
        ? EngineConfiguration.toJSON(message.engineConfiguration)
        : undefined);
    message.enableGraphqlEndpoint !== undefined &&
      (obj.enableGraphqlEndpoint = message.enableGraphqlEndpoint);
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
