const express = require('express');
const { getProducts, createProducts } = require('../controllers/functionforitem');
const router = express.Router();

router.route('/getProducts').get(getProducts)
router.route('/createProducts').post(createProducts);

module.exports = router;