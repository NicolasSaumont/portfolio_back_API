const mainController = {

    homepage (req, res) {

        res.send("Hello from Nicolas Saumont's Portfolio API");

    },
    
    adminPage (req, res) {

        res.send("You're on the admin page");
        // res.render('admin.html');

    },

}

module.exports = mainController;