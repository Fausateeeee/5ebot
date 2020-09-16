const getCommand = require('./commands.js')
const parser = require('./parser.js')
const tmi = require('tmi.js')

// Define configuration options
const opts = {
  identity: {
    username: '5ebot',
    password: 'oauth:taneui520k6d4hgnie7dg791wmlsk0'
  },
  channels: [
    'fausateeeee'
  ]
}

// Create a client with our options
const client = new tmi.client(opts)

// Register our event handlers (defined below)
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

// Connect to Twitch:
client.connect()

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim()
  const payload = {
    message: msg.trim(),
    client: client,
    target: target,
    context: context,
    log: '',
    command: null,
    variables: []
  }

  parser(payload)
  // If the command is known, let's execute it
  if (payload.command) {
    payload.command(payload)
    if (commandName === '!dice') {
    }
  } else {
    client.say(target, `Unknown command: ${payload.variables[0]}`)
    console.log(`* Unknown command ${commandName}`)
  }
}

// Function called when the "dice" command is issued

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`)
}
