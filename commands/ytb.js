const ytdl = require("ytdl-core")
const { prefix } = require('../config.json')

module.exports = {
    name: "ytb",
    description: "Play musique from youtube's url",
    howUse: `${prefix}ytb <url>`,
    execute(message,args) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connexion => {
                    if(!args[0]){
                        message.channel.send("Aucun url a été transmis")
                        message.channel.send("Fin de transmission")
                        connexion.disconnect()
                    }else {
                        let dispatcher = connexion.play(ytdl(args[0], {quality: "highestaudio"}))

                        dispatcher.on("finish", () => {
                            dispatcher.destroy()
                            connexion.disconnect()
                        })

                        dispatcher.on("error", err => {
                            message.channel.send(`Une erreur est survenu sur le dispatcher : ${err}`)
                        })
                    }
                })
                .catch(err => {
                    message.channel.send(`Une erreur est survenu : ${err}`)
                })
        }else {
            message.channel.send("Vous devez êtres présent sur un salon vocal ! Banane !")
        }
    }
}