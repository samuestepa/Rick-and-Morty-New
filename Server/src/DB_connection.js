require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const User = require('./models/User');
const Favorite = require('./models/Favorite');

const database = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

User(database);
Favorite(database);

User.belongsToMany(Favorite, {through: user_favorite});
Favorite.belongsToMany(User, {through: user_favorite});

module.exports = {
    User,
    Favorite,
   conn: Sequelize,
};
