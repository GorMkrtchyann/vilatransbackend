const express = require('express');
const router = express.Router();
const {UpdateLogo, UpdatePhone, UpdateEmail, GetHeader} = require('../controllers/HeaderController')

router.put('/updateLogo', UpdateLogo);
router.put('/updatePhone', UpdatePhone);
router.put('/updateEmail', UpdateEmail);
router.get('/getHeader', GetHeader);

module.exports = router;
