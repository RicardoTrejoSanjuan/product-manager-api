import express from 'express';
import router from './router';
import db from './config/db';

import { Logger } from 'logger-colors';
export const log = new Logger();

async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        log.success('successful DB connection');
        
    } catch (error) {
        log.error('An error occurred when connecting to the database');
    }
}

connectDB();

const server = express();

server.use(express.json())

server.use('/api/v1/products', router);

export default server