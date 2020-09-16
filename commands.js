function getCommand (message) {
  switch (message) {
    case '!dice':
      return rollDice
    case '!commands':
      return getCommands
    default:
      return null
  }
}

function rollDice (payload) {
  const sides = 6
  const num = Math.floor(Math.random() * sides) + 1
  payload.client.say(payload.target, `You rolled a ${num}`)
  console.log(`* Executed ${payload.variables[0]} command`)
}

function getCommands (payload) {
  const help = 'http://fausa.tech/5ebot'
  payload.client.say(payload.target, `Commands --> ${help}`)
  console.log(`* Executed ${payload.variables[0]} command`)
}

module.exports = getCommand
