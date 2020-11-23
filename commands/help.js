const { prefix, exist_command } = require("../config.json")

module.exports = {
    name: "help",
    description: "Donne les commandes existantes",
    howUse: `${prefix}help`,
    async execute(message) {
        message.channel.send(`Préfix utilisé : ${prefix}`)
        for(var i= 0; i < exist_command.length; i++) {
            message.channel.send(String(exist_command[i]))
        }
    }
}