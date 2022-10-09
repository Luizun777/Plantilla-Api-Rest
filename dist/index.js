"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const enviroment_1 = require("./global/enviroment");
const server = new server_1.default();
// conectar a DB
const urlDB = `mongodb+srv://DB_Name:${enviroment_1.PASSWORD_MONGO_DB}@cluster0.evgpn.mongodb.net/${enviroment_1.MONGO_DB}?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
};
// body
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Rutas
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`El servidor esta corriendo el puerto ${server.port}`);
    // await mongoose.connect(urlDB, options).then(() => {
    //   console.log('Conectado a Mongo');
    // }, () => {
    //   console.log('Error');
    // });
});
