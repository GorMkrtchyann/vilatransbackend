const express = require('express');
const router = express.Router();
const {GetBanner, UpdateBanner, GetMap, UpdateMap, AddOfficeInfo, GetAllOfficeInfo, EditOfficeInfo, DeleteOfficeInfo, CreateReview, GetAllReviews} = require('../controllers/ContactController')

router.post('/addOfficeInfo', AddOfficeInfo);
router.get('/getAllOfficeInfo', GetAllOfficeInfo);
router.put('/editOfficeInfo', EditOfficeInfo);
router.put('/deleteOfficeInfo', DeleteOfficeInfo);
router.post('/sendReview', CreateReview);
router.get('/getAllReviews', GetAllReviews);
router.put('/updateMap', UpdateMap);
router.get('/getMap', GetMap);
router.put('/updateBanner', UpdateBanner);
router.get('/getBanner', GetBanner);

module.exports = router;
