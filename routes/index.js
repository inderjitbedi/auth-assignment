/*!
* File Name: routes/index.js
* Name: Inderjit Singh Bedi 
* Student Id: 301313264
* Date: 11/02/2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Inderjit Bedi Protfolio' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Inderjit Bedi Protfolio Home' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Inderjit' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects by Inderjit' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services Inderjit provide' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Inderjit' });
});

module.exports = router;
