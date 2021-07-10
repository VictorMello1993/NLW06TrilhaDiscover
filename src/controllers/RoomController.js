const Database = require('../database/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const password = req.body.password

    let roomId = ''
    let roomIdExists = true

    while (roomIdExists) {
      //Gerando número da sala aleatoriamente
      for (let i = 0; i < 6; i++) {
        roomId += Math.floor(Math.random() * 10).toString()
      }
      const roomsId = await db.all(`SELECT id FROM rooms`)
      roomIdExists = roomsId.some(id => id === roomId)
    }

    if (!roomIdExists) {
      await db.run(`INSERT INTO rooms (id, password)
                           VALUES(${parseInt(roomId)}, ${password})`)
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  },

  async open(req, res) {
    const db = await Database()

    const roomId = req.params.room
    const questions = await db.all(`SELECT * FROM questions WHERE roomId = ${roomId} AND read = 0`)
    const questionsRead = await db.all(`SELECT * FROM questions WHERE roomId = ${roomId} AND read = 1`)    

    let thereAreNoQuestions

    if(questions.length === 0){
      if(questionsRead.length === 0){
        thereAreNoQuestions = true
      }
    }

    res.render('room', { roomId, questions, questionsRead, thereAreNoQuestions})
  },

  enter(req, res) {
    const roomId = req.body.roomId

    res.redirect(`/room/${roomId}`)
  }
}