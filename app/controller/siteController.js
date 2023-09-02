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

    async createSite (req, res) {
        // try {

        // if (!req.body.name) {
        //     return res.status(400).json({ message: "Missing body parameter : name" });
        // }
        // if (typeof req.body.name !== 'string') {
        //     return res.status(400).json({ message: "Invalid type: name should be a string" });
        // }
        // if (typeof req.body.position !== undefined && isNaN(req.body.position)) { // Si position existe ET qu'il n'est pas de type number
        //     return res.status(400).json({ message: "Invalid type: position should be a number" });
        // }

        // // 2. Création la ressouce
        // // Une fois toutes les verifs passées, on peut créer notre nouvelle liste
        // const newList = await List.create({
        //     name: req.body.name,
        //     position: req.body.position
        // });

        // // 3. On répond au client
        // // On donne le code HTTP 201 Created et on retourne la nouvelle liste en JSON
        // return res.status(201).json(newList);
        // } catch (error) {
        // console.trace(error);
        // res.status(500).json({ message: error.message });
        // }
    },

}

module.exports = siteController;