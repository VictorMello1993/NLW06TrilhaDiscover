const Database = require('../database/config')

module.exports = {
  async create(req, res){
    const db = await Database()
    const password = req.body.password

    let roomId = ''

    Math.floor(Math.random() * 10)

    //Gerando número da sala aleatoriamente
    for (let i = 0; i < 6; i++) {
      roomId += Math.floor(Math.random() * 10).toString()
    }        

    await db.run(`INSERT INTO rooms (id, password)
                         VALUES(${parseInt(roomId)}, ${password})`)

    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}