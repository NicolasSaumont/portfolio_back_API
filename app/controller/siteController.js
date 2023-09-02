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

    async createNewSite (req, res) {
        try {

        if (!req.body.name) {
            return res.status(400).json({ message: "Missing body parameter : name" });
        }
        if (typeof req.body.name !== 'string') {
            return res.status(400).json({ message: "Invalid type: name should be a string" });
        }

        if (!req.body.description) {
            return res.status(400).json({ message: "Missing body parameter : description" });
        }
        if (typeof req.body.description !== 'string') {
            return res.status(400).json({ message: "Invalid type: description should be a string" });
        }

        let siteLink = req.body.site_link;
        if (req.body.site_link === undefined) {
            siteLink = '';
        }

        let githubLink = req.body.github_link;
        if (req.body.github_link === undefined) {
            githubLink = '';
        } 

        const newSite = await Site.create({
            name: req.body.name,
            description: req.body.description,
            site_link: siteLink,
            github_link: githubLink,
        });

        return res.status(201).json(newSite);

        } catch (error) {
            console.trace(error);
            res.status(500).json({ message: error.message });
        }
    },

}

module.exports = siteController;