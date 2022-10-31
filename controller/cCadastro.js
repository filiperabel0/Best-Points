import { promises as fs } from 'fs'
import m from '../model/mCadastro'

async function cadastrarUsuario(req, res) {
  var data = await m.listarTodosUsuarios()
  const { nome, usuario, email, senha } = req.body
  data.push({
    id: Math.floor(Math.random() * 100),
    nome: nome,
    usuario: usuario,
    email: email,
    senha: senha
  })
  fs.writeFile('./Data/cadastros.json', JSON.stringify(data, null, 2))
  res.status(200).redirect('/login')
}

async function logarUsuario(req, res) {
  var data = await m.listarTodosUsuarios()
  const { email, senha } = req.query
  console.log(req.query)
  const loginData = data.find(
    item => item.email == email && item.senha == senha
  )
  if (!loginData)
    return res.send(
      'Registro não encontrado ou usuário e senha estão incorretos'
    )
  res.redirect('/maps')
}

export default {
  cadastrarUsuario,
  logarUsuario
}
