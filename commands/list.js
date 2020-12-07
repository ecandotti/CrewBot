const { prefix } = require('../config.json');
const fetch = require('node-fetch');

module.exports = {
	name: 'list',
	description: 'List nameMusic',
	howUse: `${prefix}list`,
	async execute(message) {
		await fetch('http://localhost:8181/songs/list')
			.then(response => response.json())
			.then(req => {
				for (const key in req) {
					message.channel.send(req[key].songName);
				}
			});
	},
};