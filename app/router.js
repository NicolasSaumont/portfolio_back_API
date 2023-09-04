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

// router.get('/admin/site', siteController.newSite);
router.post('/admin/site', siteController.createNewSite);
// router.get('/admin/site/:id', siteController.showSiteDetails);
// router.patch('/admin/site/:id', siteController.editSite);
// router.delete('/admin/site/:id', siteController.deleteSite);


module.exports = router;