const GetCommand = require('./commands.js')
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "5ebot",
    password: "oauth:taneui520k6d4hgnie7dg791wmlsk0"
  },
  channels: [
    "fausateeeee"
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  const command = GetCommand(commandName)
  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = command()
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === '!commands'){
    const answer = command()
    client.say(target, `Commands --> ${answer}`)
    console.log(`* Executed ${commandName} command`);
  }
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

