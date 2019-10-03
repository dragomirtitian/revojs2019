
const queries = {
    getProductById: {
        params: { id: 'number' },
        sql: `select * from product where id = :id`
    },
    getCustomerById: {
        params: { id: 'number' },
        sql: `select * from customer where id = :id`
    }
};




















export {}