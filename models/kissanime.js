'use strict'
const scraper = require('scraperjs')


//get the links
const getLinks =(req,res,next)=>{
  // res.items=['link1', 'link2'] how to save the data
  let link = req.query.link
  let username = process.env.KISS_USER
  let password = process.env.KISS_PASS
  res.items = [link]


  next()
}

module.exports = {getLinks}
