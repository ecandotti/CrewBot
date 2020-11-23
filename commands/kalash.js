const { myqueue } = require('../config.json')

function whichMusic(musicUrl) {
    switch(musicUrl){
        case 'twitter' || '1':
            return 'https://id.time2rap.io/a/1041//01%20-%20Insta%20Twitter.mp3'
        case 'doute' || '2':
            return 'https://id.time2rap.io/a/1041//02%20-%20Doute.mp3'
        case 'tarifs' || '3':
            return 'https://id.time2rap.io/a/1041//03%20-%20Tarifs.mp3'
        case 'paniques' || '4':
            return 'https://id.time2rap.io/a/1041//04%20-%20Tu%20paniques%20(feat.%20Niska).mp3'
        case 'magadji' || '5':
            return 'https://wwv.33rapfr.com/wp-content/uploads/2020/10/05-Ma-gadji.mp3'
        case 'butenor' || '6':
            return 'https://id.time2rap.io/a/1041//06%20-%20But%20en%20or%20(feat.%20Damso).mp3'
        case 'boulot' || '7':
            return 'https://id.time2rap.io/a/1041//07%20-%20Sale%20boulot.mp3'
        case 'shooter' || '8':
            return 'https://id.time2rap.io/a/1041//08%20-%20Shooter.mp3'
        case 'zone' || '9':
            return 'https://id.time2rap.io/a/1041//09%20-%20Dans%20la%20zone%20(feat.%20Jul).mp3'
        case 'gang' || '10':
            return 'https://id.time2rap.io/a/1041//10%20-%20Elle%20est%20gang.mp3'
        case 'droga' || '11':
            return 'https://id.time2rap.io/a/1041//11%20-%20Droga%20(feat.%2024%20Keuss).mp3'
        case 'deathnote' || '12':
            return 'https://id.time2rap.io/a/1041//12%20-%20Death%20Note.mp3'
        case 'moments' || '13':
            return 'https://id.time2rap.io/a/1041//13%20-%20Moments%20(feat.%20Bigflo%20&%20Oli).mp3'
        case 'incompris' || '14':
            return 'https://id.time2rap.io/a/1041//14%20-%20Incompris.mp3'
        case 'mauvais' || '15':
            return 'https://id.time2rap.io/a/1041//15%20-%20Tr%C3%A8s%20mauvais.mp3'
        case 'turnup' || '16':
            return 'https://id.time2rap.io/a/1041//16%20-%20Turn%20Up%20(feat.%20Nekfeu).mp3'
        case 'finishhim' || '17':
            return 'https://id.time2rap.io/a/1041//17%20-%20Finish%20Him.mp3'
        default:
            return false
    }
}

module.exports = {
    name: "kalash",
    description: "Playing last album of Kalash Criminel sound",
    execute(message,args) {
        if(message.member.voice.channel) {
            message.member.voice.channel.join()
            .then(connexion => {
                if(!args[0]){
                    message.channel.send("Aucun url a été transmis")
                    message.channel.send("Fin de transmission")
                    connexion.disconnect()
                }else {
                    
                    myqueue.push(whichMusic(args[0]))
                    console.log(myqueue)

                    let dispatcher = connexion.play(myqueue[0], {quality: "highestaudio"})

                    dispatcher.on("finish", () => {
                        message.channel.send(`Merci d'avoir écouter Kalash Criminou`)
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