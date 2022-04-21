const Discord = require('discord.js')
const client = new Disord.Client({ intents : 32767})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.token)