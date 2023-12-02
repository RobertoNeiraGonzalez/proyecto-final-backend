const Info_user = require('../models/info_user')
const User = require('../models/user.model')

async function getAllInfoUsers(req, res) {
  try {
    const info = await Info_user.findAll(
      {
        where: req.query
      })
      if (info) {
        return res.status(200).json(info)
      } else {
        return res.status(404).send("No info found");
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOneInfoUser(req, res) {
  try {
    const info = await Info_user.findByPk(req.params.id)

    if (info) {
      return res.status(200).json(info)
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createInfoUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    const info = await Info_user.create(req.body)
    await user.setInfo_user(info) //revisar, crea la info, pero no la añade al userID
    return res.status(200).json({ message: 'Info created', info: info, user: user.firstName})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateInfoUser(req, res) {
  try {
    const info = await Info_user.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (info) {
     return res.status(200).json({ message: `Info with ID ${req.params.id} has been updated`})
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteInfoUser(req, res) {
  try {
    const info = await Info_user.destroy({
      where: {
        id: req.params.id
      }
    })
    if (info) {
      return res.status(200).json(`Info with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllInfoUsers,
  getOneInfoUser,
  createInfoUser,
  updateInfoUser,
  deleteInfoUser
  }