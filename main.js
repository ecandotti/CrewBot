// Import de la class Collection et Client depuis DiscordJS + Import de FileSystem + les valeurs dans config.json
const { Client, Collection } = require("discord.js")
const fs = require('fs')

// Instanciation de Client (bot) + Création d'une collection pour les commandes
const client = new Client()
client.commands = new Collection()

// Récupération des .js dans le dossier commands (chaque fichier = une commande)
// Ajout de la commande dans la collection commands
const commandFiles = fs.readdirSync("./commands").filter(files => files.endsWith(".js"))
for(const file of commandFiles){
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
  console.log(`Commande chargé = ${command.name}`)
}

// Temoin annonçant le bon lancement du bot
client.on("ready", () => {
  console.log("Prêt ! sous le pseudo : " + client.user.tag);
});


// Traitement du message reçu dans un chanel.
client.on("message", message => {
  // Si le message ne commence pas par le prefix ou lit son propre message = rien faire
  if(!message.content.startsWith(prefix) || message.author.bot) return
  
  // Retrait du prefix + commande et args en array 
  const args = message.content.slice(prefix.length).split(' ')
  // On recupère le array[0] qui correspond à la commande (args contient alors que des arguments)
  const command = args.shift().toLowerCase()

  // Si la commande ne correspond à aucun fichier = rien faire
  if(!client.commands.has(command)) return

  // Récupération de la commande en question 
  // Execution (voir architecture de la commande dans son fichier ./commande/<command>.js)
  client.commands.get(command).execute(message,args)
})


client.login(token)
