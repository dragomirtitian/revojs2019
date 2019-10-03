type KeyOfType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never
}[keyof T]

type Sample = {a: 1, b: '', c: 0, d: () => 1}

type AC= KeyOfType<Sample, number>
type B = KeyOfType<Sample, string>
type D = KeyOfType<Sample, Function>
























export {}