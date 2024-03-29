const express = require('express');
const router = express.Router();
const {AddPage, GetAllPage, UpdatePage, DeletePage} = require('../controllers/SingleServiceController')


router.post('/addSingleService', AddPage);
router.get('/getAllPage', GetAllPage);
router.put('/updatePage', UpdatePage);
router.put('/deletePage', DeletePage);

module.exports = router;
