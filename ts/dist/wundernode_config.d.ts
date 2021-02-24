import { Writer, Reader } from "protobufjs/minimal";
import { Duration } from "./google/protobuf/duration";
export declare const protobufPackage = "wgpb";
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    ERROR = 2,
    WARNING = 3,
    PANIC = 4,
    FATAL = 5
}
export declare function logLevelFromJSON(object: any): LogLevel;
export declare function logLevelToJSON(object: LogLevel): string;
export declare enum OperationType {
    QUERY = 0,
    MUTATION = 1,
    SUBSCRIPTION = 2
}
export declare function operationTypeFromJSON(object: any): OperationType;
export declare function operationTypeToJSON(object: OperationType): string;
export declare enum DataSourceKind {
    STATIC = 0,
    REST = 1,
    GRAPHQL = 2
}
export declare function dataSourceKindFromJSON(object: any): DataSourceKind;
export declare function dataSourceKindToJSON(object: DataSourceKind): string;
export declare enum HTTPMethod {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3
}
export declare function hTTPMethodFromJSON(object: any): HTTPMethod;
export declare function hTTPMethodToJSON(object: HTTPMethod): string;
export declare enum ArgumentSource {
    OBJECT_FIELD = 0,
    FIELD_ARGUMENT = 1
}
export declare function argumentSourceFromJSON(object: any): ArgumentSource;
export declare function argumentSourceToJSON(object: ArgumentSource): string;
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
    corsConfiguration: CorsConfiguration | undefined;
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
    header: {
        [key: string]: HTTPHeader;
    };
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
    corsConfiguration: CorsConfiguration | undefined;
}
export interface CorsConfiguration {
    /**
     * AllowedOrigins is a list of origins a cross-domain request can be executed from.
     * If the special "*" value is present in the list, all origins will be allowed.
     * An origin may contain a wildcard (*) to replace 0 or more characters
     * (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penalty.
     * Only one wildcard can be used per origin.
     * Default value is ["*"]
     */
    allowedOrigins: string[];
    /**
     * AllowedMethods is a list of methods the client is allowed to use with
     * cross-domain requests. Default value is simple methods (HEAD, GET and POST).
     */
    allowedMethods: string[];
    /**
     * AllowedHeaders is list of non simple headers the client is allowed to use with
     * cross-domain requests.
     * If the special "*" value is present in the list, all headers will be allowed.
     * Default value is [] but "Origin" is always appended to the list.
     */
    allowedHeaders: string[];
    /**
     * ExposedHeaders indicates which headers are safe to expose to the API of a CORS
     * API specification
     */
    exposedHeaders: string[];
    /**
     * MaxAge indicates how long (in seconds) the results of a preflight request
     * can be cached
     */
    maxAge: number;
    /**
     * AllowCredentials indicates whether the request can include user credentials like
     * cookies, HTTP authentication or client side SSL certificates.
     */
    allowCredentials: boolean;
}
export declare const WunderNodeConfig: {
    encode(message: WunderNodeConfig, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): WunderNodeConfig;
    fromJSON(object: any): WunderNodeConfig;
    fromPartial(object: DeepPartial<WunderNodeConfig>): WunderNodeConfig;
    toJSON(message: WunderNodeConfig): unknown;
};
export declare const Server: {
    encode(message: Server, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Server;
    fromJSON(object: any): Server;
    fromPartial(object: DeepPartial<Server>): Server;
    toJSON(message: Server): unknown;
};
export declare const Certificate: {
    encode(message: Certificate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Certificate;
    fromJSON(object: any): Certificate;
    fromPartial(object: DeepPartial<Certificate>): Certificate;
    toJSON(message: Certificate): unknown;
};
export declare const Logging: {
    encode(message: Logging, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Logging;
    fromJSON(object: any): Logging;
    fromPartial(object: DeepPartial<Logging>): Logging;
    toJSON(message: Logging): unknown;
};
export declare const Api: {
    encode(message: Api, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Api;
    fromJSON(object: any): Api;
    fromPartial(object: DeepPartial<Api>): Api;
    toJSON(message: Api): unknown;
};
export declare const Operation: {
    encode(message: Operation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Operation;
    fromJSON(object: any): Operation;
    fromPartial(object: DeepPartial<Operation>): Operation;
    toJSON(message: Operation): unknown;
};
export declare const OperationMock: {
    encode(message: OperationMock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): OperationMock;
    fromJSON(object: any): OperationMock;
    fromPartial(object: DeepPartial<OperationMock>): OperationMock;
    toJSON(message: OperationMock): unknown;
};
export declare const EngineConfiguration: {
    encode(message: EngineConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): EngineConfiguration;
    fromJSON(object: any): EngineConfiguration;
    fromPartial(object: DeepPartial<EngineConfiguration>): EngineConfiguration;
    toJSON(message: EngineConfiguration): unknown;
};
export declare const DataSourceConfiguration: {
    encode(message: DataSourceConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DataSourceConfiguration;
    fromJSON(object: any): DataSourceConfiguration;
    fromPartial(object: DeepPartial<DataSourceConfiguration>): DataSourceConfiguration;
    toJSON(message: DataSourceConfiguration): unknown;
};
export declare const DataSourceCustomREST: {
    encode(message: DataSourceCustomREST, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DataSourceCustomREST;
    fromJSON(object: any): DataSourceCustomREST;
    fromPartial(object: DeepPartial<DataSourceCustomREST>): DataSourceCustomREST;
    toJSON(message: DataSourceCustomREST): unknown;
};
export declare const DataSourceCustomGraphQL: {
    encode(message: DataSourceCustomGraphQL, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DataSourceCustomGraphQL;
    fromJSON(object: any): DataSourceCustomGraphQL;
    fromPartial(object: DeepPartial<DataSourceCustomGraphQL>): DataSourceCustomGraphQL;
    toJSON(message: DataSourceCustomGraphQL): unknown;
};
export declare const GraphQLFederationConfiguration: {
    encode(message: GraphQLFederationConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GraphQLFederationConfiguration;
    fromJSON(object: any): GraphQLFederationConfiguration;
    fromPartial(object: DeepPartial<GraphQLFederationConfiguration>): GraphQLFederationConfiguration;
    toJSON(message: GraphQLFederationConfiguration): unknown;
};
export declare const DataSourceCustomStatic: {
    encode(message: DataSourceCustomStatic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DataSourceCustomStatic;
    fromJSON(object: any): DataSourceCustomStatic;
    fromPartial(object: DeepPartial<DataSourceCustomStatic>): DataSourceCustomStatic;
    toJSON(message: DataSourceCustomStatic): unknown;
};
export declare const GraphQLSubscriptionConfiguration: {
    encode(message: GraphQLSubscriptionConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GraphQLSubscriptionConfiguration;
    fromJSON(object: any): GraphQLSubscriptionConfiguration;
    fromPartial(object: DeepPartial<GraphQLSubscriptionConfiguration>): GraphQLSubscriptionConfiguration;
    toJSON(message: GraphQLSubscriptionConfiguration): unknown;
};
export declare const FetchConfiguration: {
    encode(message: FetchConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): FetchConfiguration;
    fromJSON(object: any): FetchConfiguration;
    fromPartial(object: DeepPartial<FetchConfiguration>): FetchConfiguration;
    toJSON(message: FetchConfiguration): unknown;
};
export declare const FetchConfiguration_HeaderEntry: {
    encode(message: FetchConfiguration_HeaderEntry, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): FetchConfiguration_HeaderEntry;
    fromJSON(object: any): FetchConfiguration_HeaderEntry;
    fromPartial(object: DeepPartial<FetchConfiguration_HeaderEntry>): FetchConfiguration_HeaderEntry;
    toJSON(message: FetchConfiguration_HeaderEntry): unknown;
};
export declare const RESTSubscriptionConfiguration: {
    encode(message: RESTSubscriptionConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): RESTSubscriptionConfiguration;
    fromJSON(object: any): RESTSubscriptionConfiguration;
    fromPartial(object: DeepPartial<RESTSubscriptionConfiguration>): RESTSubscriptionConfiguration;
    toJSON(message: RESTSubscriptionConfiguration): unknown;
};
export declare const URLQueryConfiguration: {
    encode(message: URLQueryConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): URLQueryConfiguration;
    fromJSON(object: any): URLQueryConfiguration;
    fromPartial(object: DeepPartial<URLQueryConfiguration>): URLQueryConfiguration;
    toJSON(message: URLQueryConfiguration): unknown;
};
export declare const HTTPHeader: {
    encode(message: HTTPHeader, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): HTTPHeader;
    fromJSON(object: any): HTTPHeader;
    fromPartial(object: DeepPartial<HTTPHeader>): HTTPHeader;
    toJSON(message: HTTPHeader): unknown;
};
export declare const FieldConfiguration: {
    encode(message: FieldConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): FieldConfiguration;
    fromJSON(object: any): FieldConfiguration;
    fromPartial(object: DeepPartial<FieldConfiguration>): FieldConfiguration;
    toJSON(message: FieldConfiguration): unknown;
};
export declare const TypeField: {
    encode(message: TypeField, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): TypeField;
    fromJSON(object: any): TypeField;
    fromPartial(object: DeepPartial<TypeField>): TypeField;
    toJSON(message: TypeField): unknown;
};
export declare const ArgumentConfiguration: {
    encode(message: ArgumentConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ArgumentConfiguration;
    fromJSON(object: any): ArgumentConfiguration;
    fromPartial(object: DeepPartial<ArgumentConfiguration>): ArgumentConfiguration;
    toJSON(message: ArgumentConfiguration): unknown;
};
export declare const DataUsageMetric: {
    encode(message: DataUsageMetric, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DataUsageMetric;
    fromJSON(object: any): DataUsageMetric;
    fromPartial(object: DeepPartial<DataUsageMetric>): DataUsageMetric;
    toJSON(message: DataUsageMetric): unknown;
};
export declare const WunderNodeMetrics: {
    encode(message: WunderNodeMetrics, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): WunderNodeMetrics;
    fromJSON(object: any): WunderNodeMetrics;
    fromPartial(object: DeepPartial<WunderNodeMetrics>): WunderNodeMetrics;
    toJSON(message: WunderNodeMetrics): unknown;
};
export declare const WunderGraphConfiguration: {
    encode(message: WunderGraphConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): WunderGraphConfiguration;
    fromJSON(object: any): WunderGraphConfiguration;
    fromPartial(object: DeepPartial<WunderGraphConfiguration>): WunderGraphConfiguration;
    toJSON(message: WunderGraphConfiguration): unknown;
};
export declare const UserDefinedApi: {
    encode(message: UserDefinedApi, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): UserDefinedApi;
    fromJSON(object: any): UserDefinedApi;
    fromPartial(object: DeepPartial<UserDefinedApi>): UserDefinedApi;
    toJSON(message: UserDefinedApi): unknown;
};
export declare const CorsConfiguration: {
    encode(message: CorsConfiguration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CorsConfiguration;
    fromJSON(object: any): CorsConfiguration;
    fromPartial(object: DeepPartial<CorsConfiguration>): CorsConfiguration;
    toJSON(message: CorsConfiguration): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
