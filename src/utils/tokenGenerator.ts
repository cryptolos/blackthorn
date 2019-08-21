import { db } from '../utils/db';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const generate = async () => {
    try {
        const token =  Buffer.from(Math.random().toString(36).substring(2, 15) + process.env.TOKEN_SECRET).toString('base64');

        await db.query(`INSERT INTO api_keys (api_key) VALUES (?)`, [token]);

        console.info('Api key created');
        console.info(token);

        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
};

generate();
