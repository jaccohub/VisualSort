const publicRoutes = require('./public')

function routes(app) {
  app.use('/', publicRoutes)
}

module.exports = routes
