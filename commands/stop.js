let { myqueue, prefix } = require('../config.json')

module.exports = {
    name: "stop",
    description: "Stop currently song",
    howUse: `${prefix}stop`,
    execute(message) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connexion => {
                    let dispatcher = connexion.play('rien')
                    dispatcher.destroy()
                    connexion.disconnect()
                    myqueue = []
                    message.channel.send("File d'attente nettoyé")
                })
                .catch(err => {
                    message.channel.send(`Une erreur est survenu : ${err}`)
                })
        } else {
            message.channel.send("Vous devez êtres présent sur un salon vocal ! Banane !")
        }
    }
}