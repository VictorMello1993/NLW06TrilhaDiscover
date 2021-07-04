const express = require('express')
const questionController = require('./src/controllers/QuestionController')
const roomController = require('./src/controllers/RoomController')

const router = express.Router()

router.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
router.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))
router.get('/room/:room', (req, res) => res.render('room'))
router.post('/question/:room/:question/:action', questionController.index)
router.post('/create-room', roomController.create)

module.exports = router