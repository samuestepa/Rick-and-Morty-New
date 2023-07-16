const { User } = require('../DB_connection');

postUser = async (req, res) => {
        const { email, password } = req.body;
    try {
        
        if(!email && !password) throw new Error('Faltan datos');

        const newUser = await User.findOrCreate({
            where: {email},
            default: {
                password
            }
        })
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).send(error.message)
        res.status(500).send(error.message)
    }
}
    
module.exports = { postUser }

