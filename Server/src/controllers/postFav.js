const Favorite = require('../models/Favorite');

const postFav = (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if(!name && !origin && !status && !image && !species && !gender)
        res.status(401).send('Faltan datos');

        


    } catch (error) {
        res.status(500).json(error.message);
    }

}


module.exports = { postFav }