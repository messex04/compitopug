const express = require('express');
const Eminem = require('./json/Eminem.json'); 
const JayZ = require('./json/JayZ.json');
const Tupac = require('./json/Tupac.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    Emi:Eminem.Eminem,
    Jay:JayZ['Jay-Z'],
    Tupa:Tupac['Tupac Shakur'],


    });
});

app.get('/Eminem', (req, res) => {
    res.render('cantanti', {
    title: 'Canzoni di Eminem',
    cant: Eminem.Eminem
    });
});

app.get('/Jayz', (req, res) => {
    res.render('cantanti', {
        title: 'Canzoni di JayZ',
        cant: JayZ['Jay-Z']
    });
});
app.get('/Tupac', (req, res) => {
    res.render('cantanti', {
        title: 'Canzoni di Tupac',
        cant:  Tupac['Tupac Shakur']
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});