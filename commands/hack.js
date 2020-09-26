function current (payload) {
  payload.client.say(payload.target, 'This command isn\'t ready yet. It should be soon enough :)')
  console.log(`* Executed ${payload.variables[0]} command`)
}

function update (payload) {
  payload.client.say(payload.target, 'This command isn\'t ready yet. It should be soon enough :)')
  console.log(`* Executed ${payload.variables[0]} command`)
}

module.exports = {
  current,
  update
}
