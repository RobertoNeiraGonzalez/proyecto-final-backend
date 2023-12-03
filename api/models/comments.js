const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Comment = connection.define('comment',
    {
      author_id: {
        type: DataTypes.INTEGER,
        unique: false,
        //allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0,255], 
      },
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0,255], 
      },
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false
      },
    },
    { timestamps: false }
  )
  
  module.exports = Comment