const express = require("express");
require("dotenv").config();
const {engine} = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8000;

const logger = (req, res, next) => {
  console.log(req.method);
  next();
};

app.use(express.json());

// add new template engine for express
app.engine("handlebars", engine());

// define handlebars as template engine in express
app.set("view engine", "handlebars");

// define the directory of the files
app.set("views", "./views");

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('home',{username:'jnahmias83'});
});

app.get('/contacts',(req,res) => {
    res.render('contacts',{text: 'Yonathan Nahmias'});
});

app.get('/products',(req,res) => {
    res.render('contacts',{text: 'All products are here'});
});

app.get('*',(req,res) => {
    res.render('404_error');
});

app.use(logger);

app.listen(PORT, () => console.log("Server started on port " + PORT));
