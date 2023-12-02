const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config();


async function signup (req, res){
  try {
    const saltRounds= bcrypt.genSaltSync(process.env.ROUND)
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
   
    const user = await User.create(req.body)
    
    const payload = { email: req.body.email }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h'})
    
    return res.status(200).json({token})
  } catch (error) {
   console.log(error)
  }
  }

  async function login (req, res) {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
  
    if (!user) return res.status(404).send('Email or password incorrect')
    const comparePass = bcrypt.compareSync(req.body.password, user.password)
  
    if (comparePass) {
      const payload = { email: req.body.email }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h'})
      return res.status(200).json({token})
    } else {
      return res.status(404).json('Error: Wrong mail or password')
    }
  }

  module.exports = {
    signup,
    login
  }