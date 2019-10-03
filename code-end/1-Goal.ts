type Property = 
    | (()=> any) // simple definition 
    | [()=> any] // simple array definition 
    | { type: () => any, required?: boolean } // complex definition 
    | { type: [() => any], required?: boolean } // complex array definition 

function define<T extends Record<string, Property>>(o: T) {
    return o
}
type PropertyType<T extends Property> = 
    T extends () => infer R ? R : 
    T extends [() => infer R] ? R[] :  
    T extends { type: () => infer R }? R : 
    T extends { type: [() => infer R] } ? R[] : 
    never


const name = { type: String };
const age = Number;
const aliases = { type: [String] as [StringConstructor] };

type nameProp = PropertyType<typeof name> // expected string
type ageProp = PropertyType<typeof age> // expected number
type aliasesProp = PropertyType<typeof aliases> // expected string[]

var personSchema = define({
    name: { type: String, required: true },
    age: Number,
    aliases: { type: [String], required: false },
})

type SchemaToProps<T extends Record<string, Property>> = {
    [P in keyof T ]: PropertyType<T[P]>
}
type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T]
type MakeOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
type SchemaToPropsWithOpt<T extends Record<string, Property>> =
    MakeOptional<SchemaToProps<T>, KeyOfType<T, { required: false }>>

interface Person extends Id<SchemaToPropsWithOpt<typeof personSchema>> {
    
}


















export {}