type KeyOfType<T, U> = keyof T

type Sample = {a: 1, b: '', c: 0, d: () => 1}

type AC= KeyOfType<Sample, number>
type B = KeyOfType<Sample, string>
type D = KeyOfType<Sample, Function>
























export {}