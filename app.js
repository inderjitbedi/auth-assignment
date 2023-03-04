// /*!
// * File Name: app.js
// * Name: Inderjit Singh Bedi 
// * Student Id: 301313264
// * Date: 11/02/2023
// */
// let createError = require('http-errors');
// let express = require('express');
// let path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');
// let router = require('./server/routes/index');
// let app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'node_modules')));

// app.use('/', router);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error', { title: 'Error' });
// });
// module.exports = app;
