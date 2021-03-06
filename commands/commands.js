const commands = require('./index')

function get (message) {
  switch (message) {
    case '!dice':
      return commands.dice.roll
    case '!commands':
      return commands.help.commands
    case '!addquote':
      return commands.quotes.add
    case '!hack':
      return commands.hack.current
    case '!updatehack':
      return commands.hack.update
    default:
      return null
  }
}

module.exports = {
  get
}
