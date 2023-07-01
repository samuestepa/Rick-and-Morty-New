const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    axios(`${URL}/${id}`)
    .then( response => response.data)
    .then( ({name, gender, species, origin, image, status}) => {
        if(name){
            const character = {
                id, 
                name, 
                gender,
                species,
                origin,
                image,
                status
            }
            return res.status(200).json(character)
        }
            return res.status(404).send('Not fount');
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
}