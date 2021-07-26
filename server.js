var express = require('express')
var path = require('path')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index')
})

// about page
app.get('/about', function (req, res) {
  res.render('pages/about')
})

// gallery page
app.get('/gallery', function (req, res) {
  res.render('pages/gallery')
})

// menu page
app.get('/menu', function (req, res) {
  res.render('pages/menu')
})

// contact page
app.get('/contact', function (req, res) {
  res.render('pages/contact')
})

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('Server is listening on port 3000')
