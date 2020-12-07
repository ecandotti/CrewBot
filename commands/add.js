const { prefix } = require('../config.json');
const fetch = require('node-fetch');

module.exports = {
	name: 'add',
	description: 'Add <nameMusic> <urlMusic>',
	howUse: `${prefix}add`,
	async execute(message, args) {
		if(args[0] && args[1]) {
			const music = { 'songName': args[0], 'songURL': args[1] };
			console.log(music);
			await fetch('http://localhost:8181/songs/add', {
				method: 'POST',
				body: JSON.stringify(music),
				headers: {
					'Content-Type': 'application/json',
				} })
				.then(message.channel.send('Musique ajouté'));
		}
		else {
			message.channel.send('pas assez d\'argument');
		}
	},
};