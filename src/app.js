//************************************************************* */
//            Code of app.js
//************************************************************* */
     'use strict' 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
<<<<<<< Updated upstream
//const config = require('config');
=======
>>>>>>> Stashed changes
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