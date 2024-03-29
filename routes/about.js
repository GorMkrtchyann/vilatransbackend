const express = require('express');
const router = express.Router();
const {GetBanner, UpdateBanner, GetInfoBlockOne, UpdateInfoBlockOne, GetInfoMap, UpdateInfoMap} = require('../controllers/AboutController')

router.put('/updateBanner', UpdateBanner);
router.get('/getBanner', GetBanner);
router.get('/getInfoBlockOne', GetInfoBlockOne);
router.get('/getInfoMap', GetInfoMap);
router.put('/updateInfoBlockOne', UpdateInfoBlockOne);
router.put('/updateInfoMap', UpdateInfoMap);

module.exports = router;
