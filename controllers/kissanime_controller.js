'use strict'
//require express router
const router = require('express').Router()
const {getLinks} = require('../models/kissanime')


// / route
router.get('/', getLinks, function(req, res) {
  res.json(res.items)
  }) //end /


//export it
module.exports = router
