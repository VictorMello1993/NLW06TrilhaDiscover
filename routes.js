const express = require('express')
const questionController = require('./src/controllers/QuestionController')
const roomController = require('./src/controllers/RoomController')

const router = express.Router()

router.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
router.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

router.post('/create-room', roomController.create)
router.get('/room/:room', roomController.open)
router.post('/enter-room', roomController.enter)

router.post('/question/create/:room', questionController.create)
router.post('/question/:room/:question/:action', questionController.index)

module.exports = router