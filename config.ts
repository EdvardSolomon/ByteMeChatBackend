import { config } from 'dotenv';

config();

export default {
  PORT: process.env.PORT || 5000,
  DB: {
    port: +process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
