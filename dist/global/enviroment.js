"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB = exports.PASSWORD_MONGO_DB = exports.URL = exports.SERVER_PORT = void 0;
exports.SERVER_PORT = Number(process.env.PORT) || 5000;
exports.URL = exports.SERVER_PORT === 5000 ? 'http://localhost:5000/' : 'finalHost';
exports.PASSWORD_MONGO_DB = 'PASSWORD_MONGO_DB';
exports.MONGO_DB = 'MongoDBName';
