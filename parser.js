
const commands = require('./commands/commands.js')

const parser = (payload) => {
  if (payload.message[0] === '!') {
    const message = payload.message.split(' ')
    payload.commandName = message[0]
    payload.command = commands.get(message[0])
    payload.variables = message.filter((el, i) => i > 0)
    payload.type = '!'
  } else if (payload.message[0] === '~') {
    const message = payload.message.split(' ')
    payload.commandName = message[0]
    payload.command = commands.get(message[0])
    payload.variables = message.filter((el, i) => i > 0)
    payload.type = '~'
  } else {
    payload.command = null
  }
}

module.exports = parser
