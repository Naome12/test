const express = require('express')
const { user,text, update,register, delet } = require('../controllers/control')
const router = express.Router()


router.post('/good',user)
router.get('/text',text)
router.get('/',user)
router.post('/register',register)
router.put('/update/:id', update)
router.delete('/delete/:id',delet)
module.exports = router