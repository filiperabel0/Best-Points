import express from 'express'
import cEstado from './controller/cEstado.js'
import cCadastro from './controller/cCadastro.js'
const server = express()
server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json()) // se nao funcionar, voltar pro body parser

server.get('/', async (req, res) => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
  res.render('home')
})

server.get('/cadastro', (req, res) => {
  res.render('cadastro')
})

server.post('/cadastro', cCadastro.cadastrarUsuario)

server.get('/login', (req, res) => {
  res.render('login')
})

server.get('/validate_login', cCadastro.logarUsuario)

server.get('/maps', cEstado.listar_estados)

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
