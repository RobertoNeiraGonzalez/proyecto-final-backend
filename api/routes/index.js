const router = require('express').Router()

router.use('/pets', require('./pet.route'))
router.use('/users', require('./users.route'))
router.use('/infoPets', require('./info_pet.route'))
router.use('/infoUsers', require('./info_user.route'))

module.exports = router