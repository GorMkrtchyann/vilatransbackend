const express = require('express');
const router = express.Router();
const {GetFooter, UpdateLogo, UpdateSocialMedia} = require('../controllers/FooterController')

router.get('/getFooter', GetFooter);
router.put('/updateLogo', UpdateLogo);
router.put('/updateSocialMedia', UpdateSocialMedia);

module.exports = router;
