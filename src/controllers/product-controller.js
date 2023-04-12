//******************************************************* */
// Defining the Code controllers
//******************************************************** */
'use strict'
router.post('/' , (req, res, next) => {
    res.status(201).send (req.body);
});