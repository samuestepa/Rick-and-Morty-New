const { User } = require('../models/User');

const login = (req, res) => {
    try {
        const { email, password } = req. query;
            if(!email && !password) 
            res.status(400).send('Faltan datos');
            
            const sameUser = User.find(user => user.email === email);

            if(!sameUser) 
            res.status(404).send('Usuario no econtrado');

            if(sameUser.password !== password)
            res.status(403).send('Contraseña incorrecta');

            res.status(200).json({access: true})

        
    } catch (error) {
        res.status(500).json(error.message);
    }
}


module.exports = { login };