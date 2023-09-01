const { Site } = require('../models')

const siteController = {

    async getAllSites(req, res) {

        try {

            const sites = await Site.findAll({
            include: [
                {association: "picturesFromSite"},
                {association: "technosFromSite"},
                {association: "stateOfSite"},
            ],
            order: [
                ['id', 'ASC']
            ]

        });

        return res.json(lists);

        } catch (error) {

        console.trace(error); 
        res.status(500).json({ message : error.message }); 
        
        }
    },

    getOneSite(req, res) {
        console.log('GET /sites/:id');
    },

}

module.exports = siteController;