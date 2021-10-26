let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: String
},
{
    collection: "business_contacts"
});

module.exports = mongoose.model('Contacts', contactModel);