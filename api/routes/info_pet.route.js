const router = require('express').Router()

const {
getAllInfoPets,
getOneInfoPet,
createInfoPet,
updateInfoPet,
deleteInfoPet
} = require('../controllers/info_pet.controller')

router.get('/', getAllInfoPets)
router.get('/:id', getOneInfoPet)
router.post('/', createInfoPet)
router.put('/:id', updateInfoPet)
router.delete('/:id', deleteInfoPet)


module.exports = router