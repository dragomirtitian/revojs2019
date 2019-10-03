interface Foo<T> {
    (arg: T): T;
    doFoo(): void;
}

const foo: Foo<string> = (arg: string) => arg;





















export {}