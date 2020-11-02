const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/db.js')


const db = { modelsList: [] }
const basename = path.basename(module.filename)
const sequelize = new Sequelize(config.database, config.username, config.password, config)


fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
    db.modelsList.push(model.name)
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
db.Op = Sequelize.Op

module.exports = db
