const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Info_user = connection.define("info_user", {
  background: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  profile: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true
  },
  socialNetwork: {
    type: DataTypes.STRING,
    allowNull: true
  },
  schedules: {
    type: DataTypes.STRING,
    allowNull: true
  },
  priceHour: {
    type: DataTypes.STRING,
    allowNull: true
  },
},
  {
    timestamps: false
  }
);


module.exports = Info_user