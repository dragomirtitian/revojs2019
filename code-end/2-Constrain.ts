interface IQuery {
    params?: { [paramName: string]: string };
    sql: string;
}
interface IQueryCollection {
    [queryName: string]: IQuery
}
function define<T extends IQueryCollection>(o: T) {
    return o;
}

const queries = define( {
    getProductById: {
        params: { id: 'number' },
        sql: ""
    },
    getCustomerById: {
        params: { id: 'number' },
        sql: `select * from customer where id = :id`
    }
});
queries.




















export {}