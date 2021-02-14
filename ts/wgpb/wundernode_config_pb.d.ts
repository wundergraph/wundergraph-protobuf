// package: wgpb
// file: wundernode_config.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class WunderNodeConfig extends jspb.Message {
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
  toObject(includeInstance?: boolean): WunderNodeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WunderNodeConfig): WunderNodeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WunderNodeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WunderNodeConfig;
  static deserializeBinaryFromReader(message: WunderNodeConfig, reader: jspb.BinaryReader): WunderNodeConfig;
}

export namespace WunderNodeConfig {
  export type AsObject = {
    server?: Server.AsObject,
    logging?: Logging.AsObject,
    apisList: Array<Api.AsObject>,
  }
}

export class Server extends jspb.Message {
  clearHostsList(): void;
  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): void;
  addHosts(value?: Host, index?: number): Host;

  hasGracefulShutdownTimeout(): boolean;
  clearGracefulShutdownTimeout(): void;
  getGracefulShutdownTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setGracefulShutdownTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasKeepAlive(): boolean;
  clearKeepAlive(): void;
  getKeepAlive(): google_protobuf_duration_pb.Duration | undefined;
  setKeepAlive(value?: google_protobuf_duration_pb.Duration): void;

  hasReadTimeout(): boolean;
  clearReadTimeout(): void;
  getReadTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setReadTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasWriteTimeout(): boolean;
  clearWriteTimeout(): void;
  getWriteTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setWriteTimeout(value?: google_protobuf_duration_pb.Duration): void;

  hasIdleTimeout(): boolean;
  clearIdleTimeout(): void;
  getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;

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
    hostsList: Array<Host.AsObject>,
    gracefulShutdownTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    keepAlive?: google_protobuf_duration_pb.Duration.AsObject,
    readTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    writeTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
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

  getOperationType(): OperationTypeMap[keyof OperationTypeMap];
  setOperationType(value: OperationTypeMap[keyof OperationTypeMap]): void;

  hasVariablesSchema(): boolean;
  clearVariablesSchema(): void;
  getVariablesSchema(): JSONSchema | undefined;
  setVariablesSchema(value?: JSONSchema): void;

  hasResponseSchema(): boolean;
  clearResponseSchema(): void;
  getResponseSchema(): JSONSchema | undefined;
  setResponseSchema(value?: JSONSchema): void;

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
    operationType: OperationTypeMap[keyof OperationTypeMap],
    variablesSchema?: JSONSchema.AsObject,
    responseSchema?: JSONSchema.AsObject,
  }
}

export class JSONSchema extends jspb.Message {
  getType(): JSONSchemaTypeMap[keyof JSONSchemaTypeMap];
  setType(value: JSONSchemaTypeMap[keyof JSONSchemaTypeMap]): void;

  clearPropertiesList(): void;
  getPropertiesList(): Array<JSONSchemaProperty>;
  setPropertiesList(value: Array<JSONSchemaProperty>): void;
  addProperties(value?: JSONSchemaProperty, index?: number): JSONSchemaProperty;

  hasItems(): boolean;
  clearItems(): void;
  getItems(): JSONSchema | undefined;
  setItems(value?: JSONSchema): void;

  clearRequiredList(): void;
  getRequiredList(): Array<string>;
  setRequiredList(value: Array<string>): void;
  addRequired(value: string, index?: number): string;

  getAdditionalProperties(): boolean;
  setAdditionalProperties(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JSONSchema.AsObject;
  static toObject(includeInstance: boolean, msg: JSONSchema): JSONSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JSONSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JSONSchema;
  static deserializeBinaryFromReader(message: JSONSchema, reader: jspb.BinaryReader): JSONSchema;
}

export namespace JSONSchema {
  export type AsObject = {
    type: JSONSchemaTypeMap[keyof JSONSchemaTypeMap],
    propertiesList: Array<JSONSchemaProperty.AsObject>,
    items?: JSONSchema.AsObject,
    requiredList: Array<string>,
    additionalProperties: boolean,
  }
}

export class JSONSchemaProperty extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): JSONSchema | undefined;
  setSchema(value?: JSONSchema): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JSONSchemaProperty.AsObject;
  static toObject(includeInstance: boolean, msg: JSONSchemaProperty): JSONSchemaProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JSONSchemaProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JSONSchemaProperty;
  static deserializeBinaryFromReader(message: JSONSchemaProperty, reader: jspb.BinaryReader): JSONSchemaProperty;
}

export namespace JSONSchemaProperty {
  export type AsObject = {
    name: string,
    schema?: JSONSchema.AsObject,
  }
}

export class EngineConfiguration extends jspb.Message {
  getDefaultFlushInterval(): number;
  setDefaultFlushInterval(value: number): void;

  clearDatasourceConfigurationsList(): void;
  getDatasourceConfigurationsList(): Array<DataSourceConfiguration>;
  setDatasourceConfigurationsList(value: Array<DataSourceConfiguration>): void;
  addDatasourceConfigurations(value?: DataSourceConfiguration, index?: number): DataSourceConfiguration;

  clearFieldConfigurationsList(): void;
  getFieldConfigurationsList(): Array<FieldConfiguration>;
  setFieldConfigurationsList(value: Array<FieldConfiguration>): void;
  addFieldConfigurations(value?: FieldConfiguration, index?: number): FieldConfiguration;

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
    datasourceConfigurationsList: Array<DataSourceConfiguration.AsObject>,
    fieldConfigurationsList: Array<FieldConfiguration.AsObject>,
  }
}

export class DataSourceConfiguration extends jspb.Message {
  getKind(): DataSourceKindMap[keyof DataSourceKindMap];
  setKind(value: DataSourceKindMap[keyof DataSourceKindMap]): void;

  clearRootNodesList(): void;
  getRootNodesList(): Array<TypeField>;
  setRootNodesList(value: Array<TypeField>): void;
  addRootNodes(value?: TypeField, index?: number): TypeField;

  clearChildNodesList(): void;
  getChildNodesList(): Array<TypeField>;
  setChildNodesList(value: Array<TypeField>): void;
  addChildNodes(value?: TypeField, index?: number): TypeField;

  getOverrideFieldPathFromAlias(): boolean;
  setOverrideFieldPathFromAlias(value: boolean): void;

  hasCustomRest(): boolean;
  clearCustomRest(): void;
  getCustomRest(): DataSourceCustom_REST | undefined;
  setCustomRest(value?: DataSourceCustom_REST): void;

  hasCustomGraphql(): boolean;
  clearCustomGraphql(): void;
  getCustomGraphql(): DataSourceCustom_GraphQL | undefined;
  setCustomGraphql(value?: DataSourceCustom_GraphQL): void;

  hasCustomStatic(): boolean;
  clearCustomStatic(): void;
  getCustomStatic(): DataSourceCustom_Static | undefined;
  setCustomStatic(value?: DataSourceCustom_Static): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceConfiguration): DataSourceConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceConfiguration;
  static deserializeBinaryFromReader(message: DataSourceConfiguration, reader: jspb.BinaryReader): DataSourceConfiguration;
}

export namespace DataSourceConfiguration {
  export type AsObject = {
    kind: DataSourceKindMap[keyof DataSourceKindMap],
    rootNodesList: Array<TypeField.AsObject>,
    childNodesList: Array<TypeField.AsObject>,
    overrideFieldPathFromAlias: boolean,
    customRest?: DataSourceCustom_REST.AsObject,
    customGraphql?: DataSourceCustom_GraphQL.AsObject,
    customStatic?: DataSourceCustom_Static.AsObject,
  }
}

export class DataSourceCustom_REST extends jspb.Message {
  hasFetch(): boolean;
  clearFetch(): void;
  getFetch(): FetchConfiguration | undefined;
  setFetch(value?: FetchConfiguration): void;

  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): RESTSubscriptionConfiguration | undefined;
  setSubscription(value?: RESTSubscriptionConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceCustom_REST.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceCustom_REST): DataSourceCustom_REST.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceCustom_REST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceCustom_REST;
  static deserializeBinaryFromReader(message: DataSourceCustom_REST, reader: jspb.BinaryReader): DataSourceCustom_REST;
}

export namespace DataSourceCustom_REST {
  export type AsObject = {
    fetch?: FetchConfiguration.AsObject,
    subscription?: RESTSubscriptionConfiguration.AsObject,
  }
}

export class DataSourceCustom_GraphQL extends jspb.Message {
  hasFetch(): boolean;
  clearFetch(): void;
  getFetch(): FetchConfiguration | undefined;
  setFetch(value?: FetchConfiguration): void;

  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): GraphQLSubscriptionConfiguration | undefined;
  setSubscription(value?: GraphQLSubscriptionConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceCustom_GraphQL.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceCustom_GraphQL): DataSourceCustom_GraphQL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceCustom_GraphQL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceCustom_GraphQL;
  static deserializeBinaryFromReader(message: DataSourceCustom_GraphQL, reader: jspb.BinaryReader): DataSourceCustom_GraphQL;
}

export namespace DataSourceCustom_GraphQL {
  export type AsObject = {
    fetch?: FetchConfiguration.AsObject,
    subscription?: GraphQLSubscriptionConfiguration.AsObject,
  }
}

export class DataSourceCustom_Static extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceCustom_Static.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceCustom_Static): DataSourceCustom_Static.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSourceCustom_Static, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceCustom_Static;
  static deserializeBinaryFromReader(message: DataSourceCustom_Static, reader: jspb.BinaryReader): DataSourceCustom_Static;
}

export namespace DataSourceCustom_Static {
  export type AsObject = {
    data: string,
  }
}

export class GraphQLSubscriptionConfiguration extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphQLSubscriptionConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: GraphQLSubscriptionConfiguration): GraphQLSubscriptionConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphQLSubscriptionConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphQLSubscriptionConfiguration;
  static deserializeBinaryFromReader(message: GraphQLSubscriptionConfiguration, reader: jspb.BinaryReader): GraphQLSubscriptionConfiguration;
}

export namespace GraphQLSubscriptionConfiguration {
  export type AsObject = {
    url: string,
  }
}

export class FetchConfiguration extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getMethod(): HTTPMethodMap[keyof HTTPMethodMap];
  setMethod(value: HTTPMethodMap[keyof HTTPMethodMap]): void;

  getHeaderMap(): jspb.Map<string, HTTPHeader>;
  clearHeaderMap(): void;
  getBody(): string;
  setBody(value: string): void;

  clearQueryList(): void;
  getQueryList(): Array<URLQueryConfiguration>;
  setQueryList(value: Array<URLQueryConfiguration>): void;
  addQuery(value?: URLQueryConfiguration, index?: number): URLQueryConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: FetchConfiguration): FetchConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchConfiguration;
  static deserializeBinaryFromReader(message: FetchConfiguration, reader: jspb.BinaryReader): FetchConfiguration;
}

export namespace FetchConfiguration {
  export type AsObject = {
    url: string,
    method: HTTPMethodMap[keyof HTTPMethodMap],
    headerMap: Array<[string, HTTPHeader.AsObject]>,
    body: string,
    queryList: Array<URLQueryConfiguration.AsObject>,
  }
}

export class RESTSubscriptionConfiguration extends jspb.Message {
  getPollingIntervalMillis(): number;
  setPollingIntervalMillis(value: number): void;

  getSkipPublishSameResponse(): boolean;
  setSkipPublishSameResponse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RESTSubscriptionConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: RESTSubscriptionConfiguration): RESTSubscriptionConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RESTSubscriptionConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RESTSubscriptionConfiguration;
  static deserializeBinaryFromReader(message: RESTSubscriptionConfiguration, reader: jspb.BinaryReader): RESTSubscriptionConfiguration;
}

export namespace RESTSubscriptionConfiguration {
  export type AsObject = {
    pollingIntervalMillis: number,
    skipPublishSameResponse: boolean,
  }
}

export class URLQueryConfiguration extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): URLQueryConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: URLQueryConfiguration): URLQueryConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLQueryConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLQueryConfiguration;
  static deserializeBinaryFromReader(message: URLQueryConfiguration, reader: jspb.BinaryReader): URLQueryConfiguration;
}

export namespace URLQueryConfiguration {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class HTTPHeader extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPHeader.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPHeader): HTTPHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPHeader;
  static deserializeBinaryFromReader(message: HTTPHeader, reader: jspb.BinaryReader): HTTPHeader;
}

export namespace HTTPHeader {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class FieldConfiguration extends jspb.Message {
  getTypeName(): string;
  setTypeName(value: string): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  getDisableDefaultFieldMapping(): boolean;
  setDisableDefaultFieldMapping(value: boolean): void;

  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  getRespectOverrideFieldPathFromAlias(): boolean;
  setRespectOverrideFieldPathFromAlias(value: boolean): void;

  clearArgumentsConfigurationList(): void;
  getArgumentsConfigurationList(): Array<ArgumentConfiguration>;
  setArgumentsConfigurationList(value: Array<ArgumentConfiguration>): void;
  addArgumentsConfiguration(value?: ArgumentConfiguration, index?: number): ArgumentConfiguration;

  clearRequiresFieldsList(): void;
  getRequiresFieldsList(): Array<string>;
  setRequiresFieldsList(value: Array<string>): void;
  addRequiresFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: FieldConfiguration): FieldConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldConfiguration;
  static deserializeBinaryFromReader(message: FieldConfiguration, reader: jspb.BinaryReader): FieldConfiguration;
}

export namespace FieldConfiguration {
  export type AsObject = {
    typeName: string,
    fieldName: string,
    disableDefaultFieldMapping: boolean,
    pathList: Array<string>,
    respectOverrideFieldPathFromAlias: boolean,
    argumentsConfigurationList: Array<ArgumentConfiguration.AsObject>,
    requiresFieldsList: Array<string>,
  }
}

export class TypeField extends jspb.Message {
  getTypeName(): string;
  setTypeName(value: string): void;

  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeField.AsObject;
  static toObject(includeInstance: boolean, msg: TypeField): TypeField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeField;
  static deserializeBinaryFromReader(message: TypeField, reader: jspb.BinaryReader): TypeField;
}

export namespace TypeField {
  export type AsObject = {
    typeName: string,
    fieldNamesList: Array<string>,
  }
}

export class ArgumentConfiguration extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSourceType(): ArgumentSourceMap[keyof ArgumentSourceMap];
  setSourceType(value: ArgumentSourceMap[keyof ArgumentSourceMap]): void;

  clearSourcePathList(): void;
  getSourcePathList(): Array<string>;
  setSourcePathList(value: Array<string>): void;
  addSourcePath(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArgumentConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: ArgumentConfiguration): ArgumentConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArgumentConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArgumentConfiguration;
  static deserializeBinaryFromReader(message: ArgumentConfiguration, reader: jspb.BinaryReader): ArgumentConfiguration;
}

export namespace ArgumentConfiguration {
  export type AsObject = {
    name: string,
    sourceType: ArgumentSourceMap[keyof ArgumentSourceMap],
    sourcePathList: Array<string>,
  }
}

export interface LogLevelMap {
  LOGLEVEL_UNDEFINED: 0;
  DEBUG: 1;
  INFO: 2;
  ERROR: 3;
  WARNING: 4;
  PANIC: 5;
  FATAL: 6;
}

export const LogLevel: LogLevelMap;

export interface OperationTypeMap {
  OPERATIONTYPE_UNDEFINED: 0;
  QUERY: 1;
  MUTATION: 2;
  SUBSCRIPTION: 3;
}

export const OperationType: OperationTypeMap;

export interface JSONSchemaTypeMap {
  JSONSCHEMATYPE_UNDEFINED: 0;
  STRING: 1;
  INTEGER: 2;
  NUMBER: 3;
  OBJECT: 4;
  ARRAY: 5;
  BOOLEAN: 6;
  NULL: 7;
}

export const JSONSchemaType: JSONSchemaTypeMap;

export interface DataSourceKindMap {
  DATASOURCEKIND_UNDEFINED: 0;
  STATIC: 1;
  REST: 2;
  GRAPHQL: 3;
}

export const DataSourceKind: DataSourceKindMap;

export interface HTTPMethodMap {
  HTTPMETHOD_UNDEFINED: 0;
  GET: 1;
  POST: 3;
  PUT: 4;
  DELETE: 5;
}

export const HTTPMethod: HTTPMethodMap;

export interface ArgumentSourceMap {
  ARGUMENTSOURCE_UNDEFINED: 0;
  OBJECT_FIELD: 1;
  FIELD_ARGUMENT: 2;
}

export const ArgumentSource: ArgumentSourceMap;

