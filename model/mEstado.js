import { promises as fs } from 'fs'

async function listar_todos() {
  return JSON.parse(await fs.readFile('./Data/capitais.json'))
}

async function inserir_pontos(turistico) {
  var pontosT = await listar_todos()
  pontosT.forEach(element => {
    if (element.Sigla === turistico.sigla) {
      element.pt = turistico.nome
    }
  })
  fs.writeFile('./Data/capitais.json', JSON.stringify(pontosT, null, 2))
}
export default {
  listar_todos,
  inserir_pontos
}
