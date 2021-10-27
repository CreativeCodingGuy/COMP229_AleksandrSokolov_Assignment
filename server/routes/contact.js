let express = require('express');
let router = express.Router();
let passport = require('passport');


// connect to our Contact Model
let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ operation. */
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE operation. */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE operation. */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Update page - UPDATE operation. */
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/* POST Route for processing the Update page - UPDATE operation. */
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/* GET Route to perform Deletion - DELETE operation. */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;