const { Site } = require('../models')

const siteController = {

    async getAllSites(req, res) {
        console.log('GET /sites');

        // try {

        //     const sites = await Site.findAll({
        //     include: "cardsFromList", // On recup les cartes des chaque liste
        //     order: [
        //         ['position', 'ASC'] // Et on ordonne par position
        //     ]

        // });

        // return res.json(lists);

        // } catch (error) {

        // console.trace(error); 
        // res.status(500).json({ message : error.message }); 
        
        // }
    },

    getOneSite(req, res) {
        console.log('GET /sites/:id');
    },

}

module.exports = siteController;