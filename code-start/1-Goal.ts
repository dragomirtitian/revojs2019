var personSchema = {
    name: { type: String, required: true },
    age: Number,
    aliases: { type: [String], required: false },
}

interface Person {
    name: string,
    age: number,
    aliases?: string[]
}

var personSchema: {
    name: {
        type: StringConstructor;
        required: boolean;
    };
    age: NumberConstructor;
    aliases: {
        type: StringConstructor[];
        required: boolean;
    };
}



















export {}