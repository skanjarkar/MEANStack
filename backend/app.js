const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const postsRoutes = require('./routes/posts');

mongoose.connect("mongodb+srv://smya:43skaqfdLP81kdrd@cluster0-ejp55.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() =>  {
    console.log('connected to database!')
  })
  .catch(() => {
    console.log('connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;
