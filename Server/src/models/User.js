const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         dataType: integer,
         allowNull: false,
         primaryKey: true
      },
      email: {
         dataType: String,
         allowNull: false,
         isEmail: true
      }
   }, { timestamps: false });
};
