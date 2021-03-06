﻿'use strict';
var express = require('express');
var router = express.Router();
const envName = process.env['NODE_ENV'] || 'development';
const users = require(`../data/${envName}.users.json`)

/* GET home page. */
router.get('/', function (req, res) {
  res.render('users', { title: 'Users', users: users.users, envName: envName.charAt(0).toUpperCase() + envName.slice(1) });
});

module.exports = router;
