const express = require('express')
const path = require('path');
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', (req, res) => {
    res.render('index', {name: "Alex", id: 4 })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/cabinetsearch', (req, res) => {
    res.render('CabinetSearch')
})
app.get('/teachers', (req, res) => {
    res.render('teachers')
})

let port = 3033
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})