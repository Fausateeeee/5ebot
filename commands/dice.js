function roll (payload) {
  const sides = 6
  const num = Math.floor(Math.random() * sides) + 1
  payload.client.say(payload.target, `You rolled a ${num}`)
  payload.log = `* ${payload.context['display-name']} executed ${payload.commandName} command and rolled ${num}`
}

module.exports = {
  roll
}
