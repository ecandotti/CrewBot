const { prefix } = require('../config.json');

module.exports = {
	name: 'stop',
	description: 'Stop song and clear playlist',
	howUse: `${prefix}stop`,
	execute(message) {
		if(message.member.voice.channel) {
			message.member.voice.channel.join()
				.then(connexion => {
					const dispatcher = connexion.play();
					dispatcher.destroy();
					connexion.disconnect();
				})
				.catch(err => {
					message.channel.send(`Error occured : ${err}`);
				});
		}
		else {
			message.channel.send('You have to be in channel');
		}
	},
};