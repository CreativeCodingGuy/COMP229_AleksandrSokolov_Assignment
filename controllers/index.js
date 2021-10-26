let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create user model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', {title: 'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title: 'Services'});
}

module.exports.displayContactsPage = (req, res, next) => {
    res.render('index', {title: 'Contacts'});
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if user is not already loged in
    if (!req.user) {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
        })
    }
    else {
        res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        //if server err
        if (err) {
            return next(err);
        }

        //if there is a user login error
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        } 

        req.login(user, (err) => {
            // server error?
            if(err) {
                return next(err);
            }
            return res.redirect('contact-list');
        });
        
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}