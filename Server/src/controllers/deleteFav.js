const Favorite = require('../models/Favorite');

const deleteFav = async(req, res) => {
   try {
       const { id } = req.params;
   
       const deleteFavorite = await Favorite.findByPk(id);
        if(!deleteFavorite) res.status(404).send('No existe o ya fue eliminado');

        await Favorite.destroy({where: { id }});

    const allFavorites = Favorite.findAll();

       res.status(200).json(allFavorites);
    
   } catch (error) {
    res.status(500).json(error.message)
   }

}

module.exports = { deleteFav };