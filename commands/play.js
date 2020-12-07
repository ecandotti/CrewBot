const { prefix } = require('../config.json');
const fetch = require('node-fetch');

module.exports = {
	name: 'play',
	description: 'Play music',
	howUse: `${prefix}play`,
	execute(message, args) {
		let urlPlay = '';
		if(message.member.voice.channel) {
			message.member.voice.channel.join()
				.then(connexion => {
					if(args[0]) {
						fetch(`http://localhost:8181/songs/byID/${args[0]}`)
							.then(response => response.json())
							.then(req => {
								for (const key in req) {
									urlPlay = req[key].songURL;
								}
								const dispatcher = connexion.play(urlPlay, { quality: 'highestaudio' });
								dispatcher;
							});
					}
					else {
						message.channel.send('Aucun argument transmis');
					}
				});
		}
	},
};