let express = require('express');
let router = express.Router();

// connect to our Contact Model
let contactController = require('../controllers/contact');

/* GET Route for the Book List page - READ operation. */
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE operation. */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE operation. */
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE operation. */
router.get('/edit/:id',contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation. */
router.post('/edit/:id',contactController.processEditPage);

/* GET Route to perform Deletion - DELETE operation. */
router.get('/delete/:id',contactController.performDelete);

module.exports = router;