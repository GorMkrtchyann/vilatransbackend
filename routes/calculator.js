const express = require('express');
const {CreateImg, GetAllImg, CreateSelect, DeleteSelect, EditSelect, GetAllSelect} = require('../controllers/Calculator');
const {CreateRequest} = require('../controllers/CalculatorController');
const router = express.Router();

///Images request
router.patch('/updateBanner', CreateImg);
router.get('/images', GetAllImg);

///Select request
router.get('/selection', GetAllSelect);
router.post('/selection', CreateSelect);
router.delete('/selection', DeleteSelect);
router.patch('/selection', EditSelect);


router.post('/sendDeliveryRequest', CreateRequest);

module.exports = router;
