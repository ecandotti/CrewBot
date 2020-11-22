function whichMusic(musicUrl) {
    switch(musicUrl){
        case 'bandeorganise' || '1':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/01-Bande-organis%C3%A9e.mp3'
        case 'etoile' || '2':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/02-L%C3%A9toile-sur-le-maillot.mp3'
        case 'combien' || '3':
            return 'https://id.time2rap.io/a/984//03%20-%20Combien.mp3'
        case 'lameme' || '4':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/04-Partout-c%E2%80%99est-la-m%C3%AAme.mp3'
        case 'magadji' || '5':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/05-Ma-gadji.mp3'
        case 'toutachange' || '6':
            return 'https://id.time2rap.io/a/984//06%20-%20Tout%20a%20chang%C3%A9.mp3'
        case 'warzone' || '7':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/07-War-Zone.mp3'
        case 'heat' || '8':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/08-Heat.mp3'
        case 'miamivice' || '9':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/09-Miami-Vice.mp3'
        case 'maintenant' || '10':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/10-C%E2%80%99est-maintenant.mp3'
        case '13balles' || '11':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/11-13-balles.mp3'
        case 'lanuit' || '12':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/12-La-nuit.mp3'
        case 'marseille' || '13':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/13-Je-suis-Marseille.mp3'
    }
}

module.exports = {
    name: "13",
    description: "Playing 13 Organisé sound",
    execute(message,args) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
            .then(connexion => {
                if(!args[0]){
                    message.channel.send("Aucun url a été transmis")
                    message.channel.send("Fin de transmission")
                    connexion.disconnect()
                }else {
                    let dispatcher = connexion.play(whichMusic(args[0], {quality: "highestaudio"}))

                    dispatcher.on("finish", () => {
                        message.channel.send(`Merci d'avoir écouter le J`)
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