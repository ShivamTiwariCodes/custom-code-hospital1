export interface IHmsSdkFactory<T> {
    getInstance: (version?: string) => T;
}