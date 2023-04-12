//**************************************************************** */
//  file index.js avec les routines necéssaires

'use strict'
//***************************************************************** */
//**************************************************************** */
const express = require('express');
const router = express.Router();
//**************************************************************** */
//                         the  Get/Create routine
//***************************************************************** */
 router.get('/' , (req, res, next) => {
    res.status(200).send ({
        title: "Node Store API", 
        version: "0.0.5 ok!"
    });
});
/***************************************************************** */
//               the   Post/Create routine 201 ms
//**************************************************************** */
router.post('/' , (req, res, next) => {
    res.status(201).send (req.body);
});
//******************************************************************* */
//               the Put routine 
//******************************************************************** */
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send ({
        id: id, 
        item: req.body
    });
});
//***************************************************************** */
//             The Delete routine
//***************************************************************** */
router.delete('/' , (req, res, next) => {
    res.status(200).send (req.body);
});
//*************************************************************** */
//                 module exports
//*************************************************************** */
module.exports = router;