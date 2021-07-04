const express = require('express')
const router = require('../routes')
const path = require('path')

const app = express()

//Configuração do template engine (EJS)
app.set('view engine', 'ejs')

//Configurando os arquivos estáticos (html css e scripts js) para que seja possível renderizar na página toda estilizada
//Todos esses arquivos estão na pasta public
app.use(express.static('public'))

//Configuração das views que estão em src/views
//Por padrão, o express reconhece que a pasta 'views' fica na pasta raíz do projeto
app.set('views', path.join(__dirname, 'views'))

//Configuração de middlewares
app.use(express.urlencoded({extended: true}))

//Inicializando as rotas
app.use(router)

//http://localhost:3000
app.listen(3000, () => console.log('Server is loading...'))