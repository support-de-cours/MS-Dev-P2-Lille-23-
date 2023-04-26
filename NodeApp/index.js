"use strict";

const path = require('path');
const ejs = require('ejs')
const express = require('express');

const app = express();


// App settings
// --

// Define the "views" directory
app.set('views', path.join(__dirname, "views"));

// Define the HTML engine
app.set('view engine', "html");
app.engine('html', ejs.__express);

// Add the access to the "public" directory
app.use( express.static( path.join(__dirname, "public") ) );



// App routings
// --

app.use( require('./controllers/homepage') );
app.use( require('./controllers/about') );
app.use( require('./controllers/contact') );


// App routings
// --


app.listen(3000, () => console.log(`App is listening on port http://localhost:3000}`))
