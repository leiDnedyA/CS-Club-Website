require('dotenv').config();
const Discord = require('discord.js');

// Get API key from .env
const DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN || "No key found...";

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds]});

client.on('ready', () => {
    console.log(`Logged into Discord as ${client.user.tag}!`);
})

// client.login(DISCORD_API_TOKEN);

export async function GET(request: Request) {

    client.login(DISCORD_API_TOKEN);

    console.log(client);

    return new Response(`Logged into discord as dwadwa`)
}
