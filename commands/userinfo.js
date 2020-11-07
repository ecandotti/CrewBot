module.exports = {
    name: "userinfo",
    description: "Donne des infos sur l'utilisateur",
    execute(message,args) {
        const user_mention = message.mentions.users.first()
        message.channel.send(`Voici le tag de la personne mentionné : ${user_mention.tag}`)
    }
}