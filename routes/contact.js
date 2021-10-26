let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contact Model
let Contact = require('../models/contacts');

/* GET for Contact list - READ operation. */
router.get('/', (req, res, next) => {

    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('contact/list', {title: 'Contacts List', ContactList : contactList});
        }
    });

});

/* GET Route for displaying the Add page - CREATE operation. */
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});
});

/* POST Route for processing the Add page - CREATE operation. */
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* GET Route for displaying the Edit page - UPDATE operation. */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);    
        } else {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    })
});

/* POST Route for processing the Edit page - UPDATE operation. */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);    
        } else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });

});

/* GET Route to perform Deletion - DELETE operation. */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);    
        } else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;