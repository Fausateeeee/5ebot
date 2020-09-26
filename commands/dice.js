function roll (payload) {
  const sides = 6
  const num = Math.floor(Math.random() * sides) + 1
  payload.client.say(payload.target, `You rolled a ${num}`)
  payload.log = `* Executed ${payload.message} command`
  console.log()
}

module.exports = {
  roll
}
