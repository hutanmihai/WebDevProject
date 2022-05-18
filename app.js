// Importing express module
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const fs = require('fs');
 
app.use(express.json());

app.set('view engine', 'ejs');

app.use("/static", express.static("./static/"));

function writejson(data){
  
}
 
app.get('/', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});
 
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/myaccount', (req, res) => {
  res.render('myaccount');
});

app.get('/reviews', (req, res) => {
  res.render('reviews');
});

app.post('/addaccount', (req, res) => {
  const nume = req.body.nume;
  const pass = req.body.pass;
})

app.get("*", (req, res) => {
  res.render("error_page");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Our express server is up on port ${port}`);
});