const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const checkAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Need a token to continue...")
    }
    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.send("Invalid Token")
        const user = await User.findOne({
            where: {
                email: result.email
            }
        })
        res.locals.user = user
        next()
    })
}

const checkAdmin = (req, res, next) => {
    if (res.locals.user.role !== "admin") {
        return res.status(401).send("You are not an Admin")
    } else {
        next()
    }
}

module.exports = { checkAuth, checkAdmin }