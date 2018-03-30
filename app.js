const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views',  path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.get('/', (req,res) =>{
//     res.render('index', {
//         title: 'This is a variable title',
//         message: 'This is my message',
//         partial: 'is cool!',
//         list: {jared: 'abc@mail.com', bill: '123@mail.com', james: '456@mail.com', jim: 'efg@mail.com'},
//         date: new Date().toDateString()
//     });
// });

app.get('/', (req,res) => {
    res.render('index', {
        list: ['jared', 'joe', 'brad']
    })
});

app.get('/users/:userName', (req, res) => {
    res.end(`you clicked on: ${req.params.userName}`)
});

// this didn't quite work. incomplete code
// app.get('/users/:userName', (req, res) => {
//     res.render('someOtherView', {userName: req.params.userName});
// });

app.get('/form', (req, res) => {
    res.render('form');
});
app.post('/create', (req,res) => {
    let user = {
        name: req.body.name,
        email: req.body.email
    };
    res.end(`Name: ${user.name}\nEmail: ${user.email}`);
});



app.listen(3000);