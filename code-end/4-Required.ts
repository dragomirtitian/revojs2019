interface Validatable {
    value: string | undefined
    optionalValue?: string
}
type RequiredNotNullOrUndefined<T> =  {
    [P in keyof T] -?: Exclude<T[P], undefined>
}

declare function getValid(inst: Validatable): RequiredNotNullOrUndefined<Validatable>;

declare const inst:Validatable;

let value: string = getValid(inst).value // expected string, right now string | undefined
let optionalValue: string = getValid(inst).optionalValue // expected string, right now string | undefined













export{}
