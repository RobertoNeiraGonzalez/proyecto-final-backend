const bcrypt = require('bcrypt')

const User = require('../models/user.model')
const Info_user = require('../models/info_user')
const Pet = require('../models/pet')
const Info_pet = require('../models/info_pet')

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll(
      {
        where: req.query
      })
      if (users) {
        return res.status(200).json(users)
      } else {
        return res.status(404).send("No Users found")
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user){
      return res.status(200).json({message: 'This is your profile', user: user})
    } else {
      return res.status(404).send('You have not profile')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if(user) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send("User not found1");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

//Lazy
async function getOneUserwithInfo(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    const info = await user.getInfo_user({ joinTableAttributes: [] });
    if (info) {
      return res.status(200).json({ user: user, info: info });
    } else {
      return res.status(404).send("Info not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Lazy info user con pets + info pets
async function getOneUserwithInfoPets(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    const pet = await user.addPet({ joinTableAttributes: [] });
    if (pet) {
      console.log(pet)
      return res.status(200).json({ user, pet });
    } else {
      return res.status(404).send("pet not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}



async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(200).json({ message: "User created", user: user });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (user !== 0) {
      return res.status(200).json({ message: "User updated"})
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user) {
      await user.update(req.body)
      return res.status(200).json({ message: "User updated" })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (user) {
      return res.status(200).json("User deleted")
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user) {
      await user.destroy()
      return res.status(200).json({ message: "Your user has been deleted"})
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  getOneUserwithInfo,
  getOneUserwithInfoPets,
  createUser,
  updateUser,
  deleteUser,
  updateOwnProfile,
  deleteOwnProfile,
  // changePassword,
}