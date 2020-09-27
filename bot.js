const parser = require('./parser.js')
const tmi = require('tmi.js')
const auth = require('./auth.js')
// Define configuration options

// Create a client with our options
const client = new tmi.client(auth.twitch)

// Register our event handlers (defined below)
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

// Connect to Twitch:
client.connect()

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  // Remove whitespace from chat message
  const payload = {
    client: client,
    target: target,
    context: context,
    message: msg.trim(),
    commandName: '',
    log: '',
    type: null,
    command: null,
    variables: []
  }

  parser(payload)
  // If the command is known, let's execute it
  if (payload.type === '!') {
    payload.command(payload)
    console.log(payload.log)
  } else if (payload.type === '~') {
    payload.client.say(payload.target, 'These types of commands are not yet implemented :( Stay tuned!')
    console.log(`* User tried the command ${payload.command}`)
  } else {

  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`)
}
