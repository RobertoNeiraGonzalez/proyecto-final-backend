const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Info_pet = connection.define("info_pet", {
  species: {
    type: DataTypes.STRING,
    allowNull: true
  },
  race: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  size: {
    type: DataTypes.STRING,
    allowNull: true
  },
  character: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
  {
    timestamps: false
  }
);


module.exports = Info_pet