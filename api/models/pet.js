const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Pet = connection.define("pet", {
 name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['free', 'embrace','adoption'],
    defaultValue: 'free'
  }
},
  {
    timestamps: false
  }
);

module.exports = Pet