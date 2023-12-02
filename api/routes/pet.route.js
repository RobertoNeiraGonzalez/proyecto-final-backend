const router = require('express').Router()

const {
  getAllPets,
  getOnePet,
  getOnePetWithInfo,
  getOnePetandInfo,
  createPet,
  updatePet,
  deletePet
} = require('../controllers/pet.controller')

router.get('/', getAllPets)
router.get('/:id', getOnePet)
router.get('/:id/pet/eager', getOnePetWithInfo)
router.get('/:id/pet/lazy', getOnePetandInfo)
router.post('/', createPet)
router.put('/:id', updatePet)
router.delete('/:id', deletePet)


module.exports = router