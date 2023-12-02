const User = require('../api/models/user.model')
const Pet = require('../api/models/pet')
const Info_user = require('../api/models/info_user')
const Info_pet = require('../api/models/info_pet')

function addRelationsToModels() {
  try {
    User.hasOne(Info_user)
    Info_user.belongsTo(User)

    Pet.hasOne(Info_pet)
    Info_pet.belongsTo(Pet)

    User.hasMany(Pet)
    Pet.belongsTo(User)

  } catch (error) {
    throw error
  }
}

module.exports = { addRelationsToModels }