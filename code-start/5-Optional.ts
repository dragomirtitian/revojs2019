interface Person {
    name: string,
    age: number,
    aliases: string[]
}

type MakeOptional<T, K extends keyof T> = T

type PersonWithSomeOptional = MakeOptional<Person, "aliases" | "age">

let p: PersonWithSomeOptional = {
    name: ""
}













export{}
