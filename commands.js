function getCommand (message) {
  switch (message) {
    case '!dice':
      return rollDice
    case '!commands':
      return getCommands
    case '!addquote':
      return addQuote
    case '!hack':
      return currentHack
    case '!help':
      return help
    default:
      return null
  }
}

function getHelp (message) {
  switch (message) {
    case '!dice':
      return '!dice: Roll a six sided dice and return the value.'
    case '!commands':
      return '!commands: Link to a more complete documentation of every commands.'
    case '!addquote':
      return '!addquote [quote]: Add the given quote to the quote directory.'
    case '!hack':
      return '!hack: Return a link to the current hack.'
    case '!help':
      return '!help: hummmmmmmm, do you really need help with your help?'
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

function addQuote (payload) {
  payload.client.say(payload.target, 'This command isn\'t ready yet. It should be soon enough :)')
  console.log(`* Executed ${payload.variables[0]} command`)
}

function currentHack (payload) {
  payload.client.say(payload.target, 'This command isn\'t ready yet. It should be soon enough :)')
  console.log(`* Executed ${payload.variables[0]} command`)
}

function help (payload) {
  console.log(payload)
  if (payload.variables.length > 1) {
    let commandHelp = payload.variables[1]

    if (commandHelp[0] !== '!') commandHelp = '!' + commandHelp
    const help = getHelp(commandHelp)

    if (help) {
      payload.client.say(payload.target, help)
      console.log(`* Executed ${payload.variables[0]} ${commandHelp} command`)
    } else {
      payload.client.say(payload.target, `The command ${commandHelp} was not found :(`)
      console.log(`* Executed ${payload.variables[0]} ${commandHelp} command`)
    }
  } else {
    payload.client.say(payload.target, 'Use this command following it by another command to get a short instruction on how to use it.')
    console.log(`* Executed ${payload.variables[0]} command`)
  }
}

module.exports = getCommand
