# Plantilla para back

## Descripción
Una plantilla de back para poder empezar una api rest con las peticiones básicas de Get, Post, Put y Delete además de estar instalado y preconfigurada la base de datos a mongo instalado si se necesita tan solo ejecutarla con los siguientes pasos.

## Instalar dependencias
* ``npm install -g typescript``
* ``npm install -g nodemon``

## Quick Links
Descarga de dependiencias: ``npm i``

Ejecutar para empezar a desarrollar: ``tsc -w`` despues ``nodemon dist/`` y listo 😁

## Ejecutar con mongoDB
Para poder ejecutar el proyecto con mongoDB se necesitan realizar unos pasos antes.

```js
//En el componente enviroment.ts por los datos de tu base de datos de MongoDB

export const SERVER_PORT: number = Number(process.env.PORT) || 5000;
export const URL: string = SERVER_PORT === 5000 ? 'http://localhost:5000/' : 'finalHost';
export const PASSWORD_MONGO_DB: string = 'PASSWORD_MONGO_DB';
export const MONGO_DB: string = 'MongoDBName';
```

```js
...

// En la Linea 11 hay un stringConnection para la base de datos esa nada mas cambian el nombre que tiene DB_Name
const urlDB = `mongodb+srv://DB_Name:${PASSWORD_MONGO_DB}@cluster0.evgpn.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
};

...

// Aquí tenemos que descomentar la conexión para que se conecte a la base de datos de mongoDB y hacemos async la función
server.start(async () => {
  console.log(`El servidor esta corriendo el puerto ${server.port}`);
  await mongoose.connect(urlDB, options).then(() => {
    console.log('Conectado a Mongo');
  }, () => {
    console.log('Error');
  });
});

```