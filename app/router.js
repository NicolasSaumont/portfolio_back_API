const { Router } = require('express');
const router = Router();

const mainController = require('./controller/mainController');
const siteController = require('./controller/siteController');

// Homepage
router.get('/', mainController.homepage);

// Sites
router.get('/sites', siteController.getAllSites);
router.get('/sites/:id', siteController.getOneSite);

// Back office
router.get('/admin', mainController.adminPage);
// router.get('/admin/profile', mainController.getProfile)
// router.patch('/admin/profile', mainController.editProfile)

// router.get('/admin/sites', siteController.newSite);
router.post('/admin/sites', siteController.createNewSite);
router.get('/admin/sites/:id', siteController.getOneSite);
router.patch('/admin/sites/:id', siteController.editSite);
router.delete('/admin/sites/:id', siteController.deleteSite);


module.exports = router;