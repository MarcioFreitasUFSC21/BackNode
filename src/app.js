//************************************************************* */
'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//****************************************************************/
//              the Json comunication conversion protocoll
//*************************************************************** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//*****************************************************************/
//                   The  CRUD routines
//*************************************************************** */
//                   the GET routine  200ms
//**************************************************************** */

const route = router.get('/' , (req, res, next) => {
    res.status(200).send ({
        title: "Node Store API", 
        version: "0.0.2"
    });
});
//***************************************************************** */
//               the   Post/Create routine 201 ms
//**************************************************************** */
const create = router.post('/' , (req, res, next) => {
    res.status(201).send (req.body);
});
//******************************************************************* */
//               the Put routine 
//******************************************************************** */
const put = router.put('/:id' , (req, res, next) => {
    const id = re.params.id;
    res.status(201).send ({
        id: id, 
        item: req.body
    });
});
//***************************************************************** */
//           defining routes
//***************************************************************** */
app.use('/', route);
app.use('/products', create);
app.use('/products', put);
//***************************************************************** */
module.exports = app;
//***************************************************************** */