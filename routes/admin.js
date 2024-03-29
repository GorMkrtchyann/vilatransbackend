const express = require('express');
const router = express.Router();
const {GetAllRequests, DeleteRequest} = require('../controllers/CalculatorController')
const {DeleteReview} = require('../controllers/ContactController')
const {Login, ForgetPassword} = require('../controllers/LoginController')

router.get('/getAllRequests', GetAllRequests);
router.put('/deleteReview', DeleteReview);
router.put('/deleteRequest', DeleteRequest);
router.post('/login', Login);
router.post('/forgetPassword', ForgetPassword);

module.exports = router;
