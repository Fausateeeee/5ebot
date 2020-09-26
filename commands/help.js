function commands (payload) {
  const help = 'http://fausa.tech/5ebot'
  payload.client.say(payload.target, `Commands --> ${help}`)
  console.log(`* Executed ${payload.variables[0]} command`)
}

module.exports = {
  commands
}
