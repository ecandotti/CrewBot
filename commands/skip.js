const { myqueue, prefix } = require('../config.json')

module.exports = {
    name: "skip",
    description: "Skip to the next song",
    howUse: `${prefix}skip`,
    execute(message) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connexion => {
                    if(myqueue.length > 0) {

                        let dispatcher = connexion.play(myqueue[0], {quality: "highestaudio"})
                        myqueue.shift()
                        
                        dispatcher.on("finish", () => {
                            if(myqueue[0]) {
                                let dispatcher = connexion.play(myqueue[0], {quality: "highestaudio"})
                                myqueue.shift()
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
                    } else {
                        message.channel.send("Il n'y a rien après, je ne peux skipper")
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