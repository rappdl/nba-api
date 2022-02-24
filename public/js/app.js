const fetch = require('node-fetch')
const path = require('path') 
const express = require("express");
const nbaDB = require('./nbaDB')(fetch)
const services = require('./services')(nbaDB)
const webApi = require('./web-api')(services, express)
const webSite = require('./website')(services, express)


const PORT = 3333

var app = express(); //initilize express

app.listen(PORT, () => {
    console.log("The server is running on port 3333")
    console.log("-> http://localhost:3333")
})

//ROUTES
app.use("/api", webApi)
app.use("/website", webSite)
//app.engine('handlebars', expressHbs());     // Registers in the Express that the views will be in handlebars type
app.set('views','../views')  // Defines the directory that contains the views
app.set('view engine', 'hbs')                    // Defines the view engine as handlebars
app.use(express.static('public'))
/*
const nba = require('nba.js').default;

nba.data.teams({
    year: 2016
  }).then(function(res) {
    console.log(res.league.standard[0].fullName);
  }).catch(function(err) {
    console.error(err);
  });*/

exports.app = app
