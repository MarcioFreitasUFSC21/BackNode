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
    const  product = new Product(req.body);
    product.save().then((x) => {
        res.status(201).send({msg: 'product created with sucessully'})
        
    }).catch((err) => {
        console.log("failure product creation");
        res.status(404).send (req.body); 
    });
    };
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