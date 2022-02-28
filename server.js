var express = require('express')
var path = require('path')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

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

app.listen(process.env.PORT || 3000;)
console.log('Server is listening on port 3000')
