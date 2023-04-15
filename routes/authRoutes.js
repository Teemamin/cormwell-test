const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const auth = require('../middleware/authenticate')

router.get('/get-current-user', auth,authController.getCurrentUser)
router.get('/logout', authController.logout)
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router