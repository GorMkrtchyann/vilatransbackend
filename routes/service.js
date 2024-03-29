const express = require('express');
const {GetAllData} = require('../controllers/servicesPage/ServiceLeave');
const {EditInfoDescription, EditInfoImages, EditInfoTitle, GetAllInfoData} = require('../controllers/servicesPage/ServiceInfo');
const {GetAllTransportData, EditTransportDescription, EditTransportTitle} = require('../controllers/servicesPage/ServiceTransport');
const {GetAllImagesData, EditImages} = require('../controllers/servicesPage/ServiceBanner');
const {GetAllStepsData, EditStepsDescription, EditStepsTitle} = require('../controllers/servicesPage/ServiceSteps');
const router = express.Router();
//info request
router.patch('/info/title', EditInfoTitle)
router.patch('/info/description', EditInfoDescription)
router.get('/info', GetAllInfoData)
router.patch('/info/images', EditInfoImages)
///transport request
router.get('/transport', GetAllTransportData)
router.patch('/transport/title', EditTransportTitle)
router.patch('/transport/description', EditTransportDescription)
///banner request
router.get('/images', GetAllImagesData)
router.patch('/images', EditImages)
///steps request
router.get('/steps', GetAllStepsData)
router.patch('/steps/title', EditStepsTitle)
router.patch('/steps/description', EditStepsDescription)
///Leave request
router.get('/leave', GetAllData);

module.exports = router;
