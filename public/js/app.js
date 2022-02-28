const fetch = require('node-fetch')
const path = require('path') 
const express = require("express");
const nbaDB = require('./nbaDB')(fetch)
const services = require('./services')(nbaDB)
const webApi = require('./web-api')(services, express)


var app = express(); //initilize express
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const PORT = 3333



app.listen(PORT, () => {
    console.log("The server is running on port 3333")
    console.log("-> http://localhost:3333")
})

//ROUTES
app.use("/api", webApi)
app.use(express.static('public'))
exports.app = app
