import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'

/*
 mongodb connection
import db from '../db';
b.on('error', console.error.bind(console, 'connection error'));
db.on('error', () => {
  console.log("connection error!");
});
db.once('open', () => {
  console.log("we're connected!");
}) */

import user from '../routes/user';
import product from '../routes/product';
import category from '../routes/category';

const app = express();

const server = http.createServer(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
  res.send({
    success: "Hello World"
  });
})

app.use('/v1/user', user);
app.use('/v1/product', product);
app.use('/v1/category', category);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server started on localhost:3000")
})