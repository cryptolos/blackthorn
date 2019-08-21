import {NextFunction, Request, Response, Router} from 'express';
import { db } from '../utils/db';

export const  Authentication = (req: Request , res: Response, next: NextFunction) => {

    const token = req.headers['blackthorn-access-token'];

    if (token) {
        db.query('SELECT * FROM api_keys WHERE api_key = ?', [token]).then((apikey) => {
            if (apikey.length > 0) {
                next();
            } else {
                return res.status(403).json({ status: 403, message: 'Unauthorized access' });
            }
        });
    } else {
        return res.status(403).json({ status: 403, message: 'Unauthorized access' });

    }
};