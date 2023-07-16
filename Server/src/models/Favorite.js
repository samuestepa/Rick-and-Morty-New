const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         dataType: integer,
         allowNull: false,
         primaryKey: true
      },
      name: {
         dataType: string,
         allowNull: false
      },
      status: {
         dataType: Enum (Alive - Dead - unknown),
         allowNull: false
      },
      species: {
         dataType: string,
         allowNull: false
      },
      gender: {
         dataType: Enum (Female - Male - Genderless - unknown),
         allowNull: false
      }
   }, { timestamps: false });
};
