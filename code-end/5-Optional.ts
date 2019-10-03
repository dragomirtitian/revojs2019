interface Person {
    name: string,
    age: number,
    aliases: string[]
}

type MakeOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

type PersonWithSomeOptional = Id<MakeOptional<Person, "aliases" | "age">>

let p: PersonWithSomeOptional = {
    name: ""
}













export{}
