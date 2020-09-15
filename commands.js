function GetCommand(command){
    switch(command){
        case '!dice':
            return rollDice
        case '!commands':
          return getCommands
        default:
            return null
    }
}

function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

function getCommands () {
  return 'http://fausa.tech/5ebot'
}

module.exports = GetCommand