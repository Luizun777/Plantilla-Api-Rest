import Server from "./classes/server";
import router from "./routes/router";
import bodyParse from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGO_DB, PASSWORD_MONGO_DB } from "./global/enviroment";

const server = new Server();

// conectar a DB
const urlDB = `mongodb+srv://DB_Name:${PASSWORD_MONGO_DB}@cluster0.evgpn.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
};

// body
server.app.use(bodyParse.urlencoded({extended: true}));
server.app.use(bodyParse.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas
server.app.use('/', router);

server.start(() => {
  console.log(`El servidor esta corriendo el puerto ${server.port}`);
  // await mongoose.connect(urlDB, options).then(() => {
  //   console.log('Conectado a Mongo');
  // }, () => {
  //   console.log('Error');
  // });
});