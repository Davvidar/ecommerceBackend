import {createPool} from 'mysql2/promise';

const CONFIG = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'ecommerceBackend'
};
export const connection = createPool(CONFIG);