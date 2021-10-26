let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutMePage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contacts', indexController.displayContactsPage);

/* GET Route for displaying the Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);

/* GET Route to perform user Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;