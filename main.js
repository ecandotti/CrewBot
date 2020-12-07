const { Client, Collection } = require('discord.js');
const fs = require('fs');
const { token, prefix, help_com } = require('./config.json');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(files => files.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log(`Commande loaded = ${command.name}`);
	help_com.push(`${command.howUse}`);
}

client.on('ready', () => {
	console.log(`Lucio is ready, with ${client.user.tag}`);
});


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');

	const command = args.shift().toLowerCase();


	if(!client.commands.has(command)) return;

	client.commands.get(command).execute(message, args);
});


client.login(token);