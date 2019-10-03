interface Foo<T> {
    (arg: T): T;
    doFoo(): void;
}
type JustSignature<T extends (...a: any[]) => unknown> = 
    T extends (...a: infer P) => infer R ? (...p: P) => R : never;

const foo: JustSignature<Foo<string>> = (arg: string) => arg;





















export {}