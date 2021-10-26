let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//create user model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', {title: 'About Me', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title: 'Projects', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactsPage = (req, res, next) => {
    res.render('index', {title: 'Contacts', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if user is not already loged in
    if (!req.user) {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
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

            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            };

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });

            return res.redirect('contact-list');
        });
        
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}