const { prefix, help_com } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Show commands',
	howUse: `${prefix}help`,
	async execute(message) {
		message.channel.send(`Prefix used : ${prefix}`);
		for(let i = 0; i < help_com.length; i++) {
			message.channel.send(String(help_com[i]));
		}
	},
};