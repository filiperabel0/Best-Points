import model from '../model/mEstado.js'

async function listar_estados(req, res) {
  var pontos = await model.listar_todos()
  res.render('index', { pt: pontos })
  console.log(pontos);
}

async function inserir(req, res) {
  model.inserir_pontos({ nome: req.body.nome, sigla: req.body.sigla })
  res.redirect('/')
}

async function inicio(req, res) {
  //model.inserir_pontos({ nome: req.body.nome, sigla: req.body.sigla })
  res.redirect('/home')
}

export default {
  listar_estados,
  inserir
}
