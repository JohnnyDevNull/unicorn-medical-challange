/// <reference path="./angular-mocks.d.ts" />

// type definition for webpack
// - for simplicity, the type param from original type def has been replaced with string (<T>(path: string): T;)
declare var require: {
    (path: string): string;
    (paths: Array<string>, callback: (...modules: Array<any>) => void): void;
    ensure: (paths: Array<string>, callback: (require: <T>(path: string) => T) => void) => void;
};
