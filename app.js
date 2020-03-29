var express = require('express');
var firebase = require("firebase/app");
var database = require("firebase/database");

var app = express();

var firebaseConfig = {
    apiKey: "AIzaSyDPi88WJVtbI-RfH6i3iLYSMm350w_yiGw",
    authDomain: "jornadacientificabank.firebaseapp.com",
    databaseURL: "https://jornadacientificabank.firebaseio.com",
    projectId: "jornadacientificabank",
    storageBucket: "jornadacientificabank.appspot.com",
    messagingSenderId: "932347915147",
    appId: "1:932347915147:web:f19c29641fda54182f9d8e"
};

firebase.initializeApp(firebaseConfig);

// Get a database reference to our blog
var db = firebase.database();
var ref = db.ref("aplicacao");

ref.on("child_added", (event) => {
    console.log("Elemento inserido")
});

ref.on("child_removed", (event) => {
    console.log("Elemento removido")
});

ref.on("child_changed", (event) => {
    console.log("Elemento Modificado");
});

app.get('/', function (req, res) {
    res.send('Hello World!');
    
});

app.get('/sync', function (res, res) {
    res.send('Executo a funcao de sincronizacao');
})

app.post('/', function (req, res) {
    //Incluir alguma coisa no banco de dados
    res.send('POST realizados');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});