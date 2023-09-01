const { Site } = require('../models')

const siteController = {

    async getAllSites (req, res) {

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

        return res.json(sites);

        } catch (error) {

        console.trace(error); 
        res.status(500).json({ message : error.message }); 
        
        }
    },

    async getOneSite (req, res) {
        try {
            
            const siteId = parseInt(req.params.id, 10);

            const site = await Site.findByPk(siteId, {
                include: [
                    {association: "picturesFromSite"},
                    {association: "technosFromSite"},
                    {association: "stateOfSite"},
                ]
            });

            if (!site) {
                return res.status(404).json({ message: "Site not found. Please verify the provided id" });
            };
            
            return res.json(site);

        } catch (error) {
            console.trace(error);
            res.status(500).json({ message: error.message });
        }
    },

}

module.exports = siteController;