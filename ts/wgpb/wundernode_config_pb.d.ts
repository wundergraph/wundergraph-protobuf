// package: wgpb
// file: wundernode_config.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Config extends jspb.Message {
  hasServer(): boolean;
  clearServer(): void;
  getServer(): Server | undefined;
  setServer(value?: Server): void;

  hasLogging(): boolean;
  clearLogging(): void;
  getLogging(): Logging | undefined;
  setLogging(value?: Logging): void;

  clearApisList(): void;
  getApisList(): Array<Api>;
  setApisList(value: Array<Api>): void;
  addApis(value?: Api, index?: number): Api;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    server?: Server.AsObject,
    logging?: Logging.AsObject,
    apisList: Array<Api.AsObject>,
  }
}

export class Server extends jspb.Message {
  getListenAddr(): string;
  setListenAddr(value: string): void;

  clearHostsList(): void;
  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): void;
  addHosts(value?: Host, index?: number): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Server.AsObject;
  static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Server;
  static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
  export type AsObject = {
    listenAddr: string,
    hostsList: Array<Host.AsObject>,
  }
}

export class Host extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKeyPem(): string;
  setKeyPem(value: string): void;

  getCertPem(): string;
  setCertPem(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Host.AsObject;
  static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Host;
  static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
  export type AsObject = {
    name: string,
    keyPem: string,
    certPem: string,
  }
}

export class Logging extends jspb.Message {
  getLevel(): LogLevelMap[keyof LogLevelMap];
  setLevel(value: LogLevelMap[keyof LogLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logging.AsObject;
  static toObject(includeInstance: boolean, msg: Logging): Logging.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Logging, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logging;
  static deserializeBinaryFromReader(message: Logging, reader: jspb.BinaryReader): Logging;
}

export namespace Logging {
  export type AsObject = {
    level: LogLevelMap[keyof LogLevelMap],
  }
}

export class Api extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasEngineConfiguration(): boolean;
  clearEngineConfiguration(): void;
  getEngineConfiguration(): EngineConfiguration | undefined;
  setEngineConfiguration(value?: EngineConfiguration): void;

  getEnableSingleFlight(): boolean;
  setEnableSingleFlight(value: boolean): void;

  getEnableGraphqlEndpoint(): boolean;
  setEnableGraphqlEndpoint(value: boolean): void;

  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Api.AsObject;
  static toObject(includeInstance: boolean, msg: Api): Api.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Api;
  static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
}

export namespace Api {
  export type AsObject = {
    name: string,
    engineConfiguration?: EngineConfiguration.AsObject,
    enableSingleFlight: boolean,
    enableGraphqlEndpoint: boolean,
    operationsList: Array<Operation.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    content: string,
  }
}

export class EngineConfiguration extends jspb.Message {
  getDefaultFlushInterval(): number;
  setDefaultFlushInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: EngineConfiguration): EngineConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineConfiguration;
  static deserializeBinaryFromReader(message: EngineConfiguration, reader: jspb.BinaryReader): EngineConfiguration;
}

export namespace EngineConfiguration {
  export type AsObject = {
    defaultFlushInterval: number,
  }
}

export interface LogLevelMap {
  DEBUG: 0;
  INFO: 1;
  ERROR: 2;
  WARNING: 3;
  PANIC: 4;
  FATAL: 5;
}

export const LogLevel: LogLevelMap;

