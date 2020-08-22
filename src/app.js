const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// // For static content.
// const publicDir = path.join(__dirname, '../public');

// // Serving public folder. Default index.html 
// app.use(express.static(publicDir));

// For dynamic content.
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');
app.set('views', viewsDir); // If not used, default is /views folder.
hbs.registerPartials(partialsDir);

// Serving views/index.hbs here.
app.get('', (req, res) => {
  res.render('index', { data: 'Some data here.' });
});

// Serving views/about.hbs here.
app.get('/about', (req, res) => {
  res.render('about');
});

// Route content and stuff.
app.get('/getjson', (req, res) => {
  res.send({
    'data': 'Some data here. You can even use HTML in res.send()'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});