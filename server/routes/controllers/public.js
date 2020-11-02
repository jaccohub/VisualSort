const { name } = require('../../package.json')

const home = (req, res) => {
  res.json({ app: name })
}

module.exports = {
  home,
}
