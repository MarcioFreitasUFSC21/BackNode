//******************************************************* */
// Defining the Code controllers
'use strict'
//******************************************************** */
//  importing the product modell
//********************************************************** */
const mongoose = require('mongoose');
const { schema } = require('../models/products');
const Product = mongoose.model('Product',schema);
//*********************************************************** */
exports.post = (req, res, next) => {
    var product = new Product(req.body.product);
    res.status(201).send (req.body); };
//*********************************************************** */
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send ({
        id: id, 
        item: req.body
    });
};
//************************************************************** */
exports.delete = (req, res, next) => {
    res.status(200).send (req.body);
};        