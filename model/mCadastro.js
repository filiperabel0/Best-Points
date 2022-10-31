import { promises as fs } from 'fs'

async function listarTodosUsuarios() {
  return JSON.parse(await fs.readFile('./Data/cadastros.json'))
}

async function jogarProBanco() {
  
}

export default {
  listarTodosUsuarios
}