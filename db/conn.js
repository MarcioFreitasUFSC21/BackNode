'use strict'
//************************************************* */
// import the mongoose data bank 
//************************************************** */
const mongoose = require('mongoose');

//************************************************** */
//  the async main function to auxiliary of connection data bank
//********************************************************** */
    mongoose.set("strictQuery", true);
async function main () {
    try {
        await mongoose.connect("mongodb+srv://marciofreitasufsc21:OpxHz0P8YoLDFk7R@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority");
        console.log("data bank connected");
    } catch (error) {
        console.log("problem connecting");
        console.log ('Error: ${error}');
    }
}

//***************************************************************** */
//            module to export the main function
//****************************************************************** */
module.exports = main;
///OpxHz0P8YoLDFk7R password to mongoDB
//mongodb+srv://marciofreitasufsc21:<password>@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majoritynpm start