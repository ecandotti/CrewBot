const { myqueue, prefix } = require('../config.json')

module.exports = {
    name: "play",
    description: "Launch the playlist",
    howUse: `${prefix}play list`,
    execute(message,args) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connexion => {
                    if(!args[0]){
                        message.channel.send("Aucun argument transmis")
                        message.channel.send(`Peut etre voulez-vous faire ${prefix}play list ?`)
                        connexion.disconnect()
                    }
                    else if(args[0] === 'list') {
                        if(myqueue.length > 0){
                            let dispatcher = connexion.play(myqueue[0], {quality: "highestaudio"})

                            myqueue.shift()

                            dispatcher.on("finish", () => {
                                if(myqueue[0]) {
                                    let dispatcher = connexion.play(myqueue[0], {quality: "highestaudio"})
                                } else {
                                    message.channel.send("Merci d'avoir écouter ma musique")
                                    dispatcher.destroy()
                                    connexion.disconnect()
                                }

                                dispatcher.on("error", err => {
                                    message.channel.send(`Une erreur est survenu sur le dispatcher : ${err}`)
                                })
                            })
                            dispatcher.on("error", err => {
                                message.channel.send(`Une erreur est survenu sur le dispatcher : ${err}`)
                            })
                        }
                    } else {
                        message.channel.send("La liste est vide")
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