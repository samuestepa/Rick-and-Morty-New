const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require("morgan");
const { conn, Favorite } = require('./DB_connection');
const postFav = require('./controllers/postFav');
const login = require('./controllers/login');
const postUser = require('./controllers/postUser');
const deleteFav = require('./controllers/deleteFav');
const getCharById = require('./controllers/getCharById');
const PORT = 3001;

server.use(morgan("dev"))
server.use(express.json());   


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
);
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      
});
   
      

server.use("/rickandmorty", router);   
server.get('/login', login);
server.post('/login', login);
server.post('/fav', postFav);
server.delete('/fav/:id', deleteFav)
      
server.listen(PORT, ()=> {
    console.log("Server raised in port: " + PORT)})
