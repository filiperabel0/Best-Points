import { Sequelize, DataTypes } from 'sequelize'
import db from '../db'

const User = db.define(
  'User',
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(2000)
    }
  },
  {
    // Other model options go here
  }
)

export default User
