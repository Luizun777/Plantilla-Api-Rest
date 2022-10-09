export const SERVER_PORT: number = Number(process.env.PORT) || 5000;
export const URL: string = SERVER_PORT === 5000 ? 'http://localhost:5000/' : 'finalHost';
export const PASSWORD_MONGO_DB: string = 'PASSWORD_MONGO_DB';
export const MONGO_DB: string = 'MongoDBName';