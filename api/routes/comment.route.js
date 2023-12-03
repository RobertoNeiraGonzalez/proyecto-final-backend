const router = require('express').Router()
const { getAllComments, getOneComment, createComment, updateComment, deleteComment, getOwnComment, updateOwnComment, deleteOwnComment, createOwnComment, getOwnCommentAuthor } = require("../controllers/comment.scontrollers")
const { checkAuth, checkAdmin } = require("../middlewares/index")

router.get('/inbox/me', getOwnComment)
router.get('/send/me', getOwnCommentAuthor)
router.get('/', getAllComments)
router.get('/:id', getOneComment)
router.post('/me', createOwnComment)
router.post('/', checkAuth, createComment)
router.put('/me/:id', updateOwnComment)
router.put('/:id', updateComment)
router.delete('/me/:id', deleteOwnComment)
router.delete('/:id', deleteComment)

module.exports = router