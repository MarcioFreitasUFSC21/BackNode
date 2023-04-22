//************************************************************* */
//            Code of app.js
//************************************************************* */
     'use strict' 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

//const config = require('config');
//****************************************************************** */
//                   the mongose router
//****************************************************************** */

try {
     await mongoose.connect("mongodb+srv://marciofreitasufsc21:OpxHz0P8YoLDFk7R@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority");
     console.log("data bank connected");
     //mongoose.conect('mongodb://localhost:27017');
} catch (error) {
     console.log("problem connecting");
        console.log ('Error: ${error}');  
}
//****************************************************************** */
//                    Charge routes
//****************************************************************** */
const indexRoute = require('./routes/index-route');
const productRoute = require ('./routes/product-route');
//****************************************************************/
//              the Json comunication conversion protocoll
//*************************************************************** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//****************************************************************** */
//           Defining routes
//***************************************************************** */
app.use('/', indexRoute);
app.use('/products', productRoute);
//***************************************************************** */
module.exports = app;
//***************************************************************** */