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
router.post('/sites', siteController.createSite);
router.patch('/sites', siteController.editSite);
router.delete('/sites', siteController.deleteSite);

module.exports = router;