const Pet = require('../models/pet')
const Info_pet = require('../models/info_pet')

async function getAllPets(req, res) {
  try {
    const pets = await Pet.findAll(
      {
        where: req.query
      })
      if (pets) {
        return res.status(200).json(pets)
      } else {
        return res.status(404).send("No pets found")
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOnePet(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id)
    if(pet) {
      return res.status(200).json(pet)
    } else {
      return res.status(404).send("Pet not found");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createPet(req, res) {
  try {
    const pet = await Pet.create(req.body)
    return res.status(200).json({ message: "Pet created", pet: pet });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updatePet(req, res) {
  try {
    const pet = await Pet.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (pet !== 0) {
      return res.status(200).json({ message: "Pet updated"})
    } else {
      return res.status(404).send("Pet not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deletePet(req, res) {
  try {
    const pet = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (pet) {
      return res.status(200).json("Pet deleted")
    } else {
      return res.status(404).send("Pet not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}



//Eager
async function getOnePetWithInfo(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) {
      return res.status(404).send("Pet not found");
    }
    const pets = await pet.getInfo_pet({ joinTableAttributes: [] });
    if (pets) {
      return res.status(200).json({ pet: pet, pets: pets });
    } else {
      return res.status(404).send("Pets not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Lazy
async function getOnePetandInfo(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
    const info = await pet.getInfo_pet({ joinTableAttributes: [] });
    if (info) {
      return res.status(200).json({ pet: pet, info: info });
    } else {
      return res.status(404).send("Info not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllPets,
  getOnePet,
  getOnePetWithInfo,
  getOnePetandInfo,
  createPet,
  updatePet,
  deletePet
}