const express = require('express');

const router = express.Router();
const userId = require('./userId');
const seller = require('./seller');
const address = require('./address');
const product = require('./product');
const category = require('./category');
const subCategory = require('./subCategory');
const subSubCategory = require('./subSubCategory');

router
  .use('/user', userId)
  .use('/seller', seller)
  .use('/address', address)
  .use('/product', product)
  .use('/category', category)
  .use('/subcategory', subCategory)
  .use('/subsubcategory', subSubCategory)
  .get('/', function(req,res) {
    res.send({
      message: 'Welcome to Tokodidia API',
      about: 'TOKOSIDIA-WEB APP v1',
      author: 'Tokosidia Team',
      thanks: 'Thanks to visit our API'
    })
  })

module.exports = router;