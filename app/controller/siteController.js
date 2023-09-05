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
                top_site: req.body.top_site,
                state_id: req.body.state_id,
            });

            return res.status(201).json(newSite);

        } catch (error) {
            console.trace(error);
            res.status(500).json({ message: error.message });
        }
    },

    async editSite (req, res) {
        try {

        const siteId = parseInt(req.params.id, 10);
        const foundSite = await Site.findByPk(siteId, {
            include: [
                {association: "picturesFromSite"},
                {association: "technosFromSite"},
                {association: "stateOfSite"},
            ]
        });

        if (!foundSite) {
            return res.status(404).json({ message: "Site not found. Please verify the provided id" });
        }

        if (typeof(req.body.name) !== "undefined" && typeof(req.body.name) !== "string"){
            return res.status(400).json({ message: "Invalid body parameter 'name'. Should provide a string." });
        }
        
        if (typeof(req.body.description) !== "undefined" && typeof(req.body.description) !== "string"){
            return res.status(400).json({ message: "Invalid body parameter 'description'. Should provide a string." });
        }

        const updateSite = await foundSite.update({
            name: req.body.name,
            description: req.body.description,
            site_link: req.body.site_link,
            github_link: req.body.github_link,
            top_site: req.body.top_site,
            state_id: req.body.state_id,
        });

        return res.json(updateSite);

        } catch (error) {
            console.trace(error);
            res.status(500).json({ message: error.message });
        }
    },

    async deleteSite (req, res) {
    try {

        const siteId = parseInt(req.params.id, 10);

        const affectedRows = await Site.destroy({
            where: {
            id: siteId
            }
        });

        if (affectedRows === 0) {
            return res.status(404).json({ message: "Site not found. Please verify the provided id" });
        }

        return res.sendStatus(204);

        } catch (error) {
            console.trace(error);
            res.status(500).json({ message: error.message });
        }
    },

}

module.exports = siteController;