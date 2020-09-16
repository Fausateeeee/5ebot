const getCommand = require('./commands.js')

const parser = (payload) => {
  if (payload.message[0] === '!') {
    const commands = payload.message.split(' ')
    payload.command = getCommand(commands[0])
    payload.variables = [...commands]
  } else {
    payload.command = null
  }
}
module.exports = parser
