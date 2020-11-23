let { myqueue, prefix } = require('../config.json')

module.exports = {
    name: "show",
    description: "Show current queue",
    howUse: `${prefix}show`,
    async execute(message) {
        
        if(myqueue.length <= 0) {
            message.channel.send("La file d'attente est vide")
        }   
        else {
            message.channel.send("Voici la file d'attente :")
            for(var i= 0; i < myqueue.length; i++) {
                message.channel.send(String(myqueue[i]))
            }
        }
    }
}