const Comment = require('../models/comments')
const User = require('../models/user.model')

async function getAllComments(req, res) {
  try {
    const comments = await Comment.findAll(
      {
        where: req.query
      })
    if (comments) {
      return res.status(200).json(comments)
    } else {
      return res.status(404).send("No Comments found");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneComment(req, res) {
  try {
    const comment = await Comment.findByPk(req.params.id)

    if (comment) {
      return res.status(200).json(comment)
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createComment(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const comment = await Comment.create({
        author_id: user.id,
        message: req.body.message,
        receiver_id: req.body.receiver_id,
        userId: req.body.receiver_id
      })
      return res.status(200).json({ message: 'Comment created' })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateComment(req, res) {
  try {
    const comment = await Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (comment) {
      return res.status(200).json({ message: `Comment with ID ${req.params.id} has been updated` })
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    if (comment) {
      return res.status(200).json(`Comment with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnComment(req, res) {
  try {
    const comment = await Comment.findAll({
      where: {
        receiver_id: res.locals.user.id,    //cambiar userId por receiver_id
      }
    })
    if (comment) {
      return res.status(200).json({
        message: 'This are all your comments',
        comment: comment
      })
    } else {
      return res.status(404).send('You have not any comment already')
    }
  } catch (error) {
    res.json(error)
  }
}
// added
async function getOwnCommentAuthor(req, res) {
  try {
    const comment = await Comment.findAll({
      where: {
        author_id: res.locals.user.id
      }
    })
    if (comment) {
      return res.status(200).json({
        message: 'This are all your comments',
        comment: comment
      })
    } else {
      return res.status(404).send('You have not any comment already')
    }
  } catch (error) {
    res.json(error)
  }
}

async function updateOwnComment(req, res) {
  try {
    const comment = await Comment.findOne({
      where: {
        author_id: res.locals.user.id,
        id: req.params.id
      }
    })
    if (comment) {
      await comment.update(req.body)
      return res.status(200).json({ message: 'Yor Comment has been updated :)' })
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteOwnComment(req, res) {
  try {
    const comment = await Comment.findOne({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (comment) {
      await comment.destroy()
      return res.status(200).json({ message: `Your Comments with ID ${req.params.id} has been deleted` })
    } else {
      return res.status(404).send('Comment not found or you dont have authorization.')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createOwnComment(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const comment = await Comment.create({
        author_id: user.id,
        message: req.body.message,
        receiver_id: req.body.receiver_id,
        userId: user.id
      })
      return res.status(200).json({ message: 'Yor Comment has been created' })
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
  getOwnComment,
  updateOwnComment,
  deleteOwnComment,
  createOwnComment,
  getOwnCommentAuthor
}