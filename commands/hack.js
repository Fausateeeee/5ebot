function current (payload) {
  payload.client.say(payload.target, `The command ${payload.commandName} isn\'t ready yet. It should be soon enough :)`)
  payload.log = `* ${payload.context['display-name']} executed ${payload.commandName}`
}

function update (payload) {
  payload.client.say(payload.target, `The command ${payload.commandName} isn\'t ready yet. It should be soon enough :)`)
  payload.log = `* ${payload.context['display-name']} executed ${payload.commandName} with updates to ${payload.variables}`
}

module.exports = {
  current,
  update
}
