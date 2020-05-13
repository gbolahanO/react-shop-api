import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
require('dotenv').config({ path: './variables.env' });

import userRouter from './routes/user';
import productRouter from './routes/product';
import categoryRouter from './routes/category';

const app = express();

const server = http.createServer(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
  res.send({
    success: "Hello World"
  });
})

app.use('/v1/users', userRouter);
app.use('/v1/products', productRouter);
app.use('/v1/categories', categoryRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("server started on localhost:5000")
});

export { app };