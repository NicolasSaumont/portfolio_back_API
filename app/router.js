const { Router } = require('express');
const router = Router();

const siteController = require('./controller/siteController');

// Homepage
router.get('/', (req, res) => {
    res.send("Hello from Nicolas Saumont's Portfolio API");
});

// Sites
router.get('/sites', siteController.getAllSites);
router.get('/sites/:id', siteController.getOneSite);

// Back office
// router.post('/admin', siteController.getAllSites);
// router.post('/admin/site', siteController.createSite);
// router.patch('/admin/site/:id', siteController.editSite);
// router.delete('/admin/site/:id', siteController.deleteSite);

module.exports = router;