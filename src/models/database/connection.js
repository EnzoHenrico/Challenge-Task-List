import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST } = process.env;
const { DB_PORT } = process.env;

// Database connection
const DB_CONNECTION = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}`)
.then(() => console.log('Database Connected!'))
.catch((error) => console.log('DATABASE ERROR: ' + error));

export default DB_CONNECTION;