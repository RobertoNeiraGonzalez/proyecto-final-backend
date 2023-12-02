const router = require('express').Router()

const {
  getAllInfoUsers,
  getOneInfoUser,
  createInfoUser,
  updateInfoUser,
  deleteInfoUser
} = require('../controllers/info_user.controller')

router.get('/', getAllInfoUsers)
router.get('/:id', getOneInfoUser)
router.post('/', createInfoUser)
router.put('/:id', updateInfoUser)
router.delete('/:id', deleteInfoUser)


module.exports = router