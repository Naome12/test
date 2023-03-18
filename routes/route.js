const express = require('express')
const { user,gete,text, update,register, delet } = require('../controllers/control')
const router = express.Router()


router.post('/good',user)
router.get('/text',user)
router.get('/gete',gete)
router.get('/',text)
router.post('/register',register)
router.put('/update/:id', update)
router.delete('/delete/:id',delet)
module.exports = router