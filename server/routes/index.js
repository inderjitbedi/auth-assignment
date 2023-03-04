//  file name : index.js
//    Name : Inderjit Bedi
//    Student ID : 301313264
// 	Date : 03-03-2023




let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

// get router for login page
router.get('/login',indexController.displayLoginPage);

//post router for login page
router.post('/login',indexController.processLoginPage);

// get router for register page
router.get('/register',indexController.displayRegisterPage);

//post router for regsiter page
router.post('/register',indexController.processRegisterPage);

//get to perform logout
router.get('/logout',indexController.performLogout);

module.exports = router;
