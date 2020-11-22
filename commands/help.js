const { prefix } = require("../config.json")
const fs = require('fs')

const commandFiles = fs.readdirSync("./commands").filter(files => files.endsWith(".js"))

module.exports = {
    name: "help",
    description: "Donne les commandes existantes",
    async execute(message) {

        message.channel.send(`Préfix utilisé : ${prefix}`)
        for(const file of commandFiles){
            const command = require(`./commands/${file}`)
            message.channel.send(`Commande chargé = ${command.name}`)
        }
    }
}