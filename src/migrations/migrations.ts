import migration = require('mysql-migrations');
import { db } from '../utils/db';

migration.init(db, __dirname + '/files');
