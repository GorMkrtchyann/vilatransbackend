const express = require('express');
const router = express.Router();
const {slide, sendAllSlides, editSlide, deleteSlide, updateFeaturesData, getFeaturesData, updateServicesData, getServicesData} = require('../controllers/HomePageController')


router.post('/slide', slide);
router.get('/slide-data', sendAllSlides);
router.put('/slide-edit', editSlide);
router.delete('/slide-delete/:id', deleteSlide);

router.put('/update-services', updateServicesData);
router.get('/get-services', getServicesData);

router.put('/update-features', updateFeaturesData);
router.get('/get-features', getFeaturesData);

module.exports = router;
