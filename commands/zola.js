function whichMusic(musicUrl) {
    switch(musicUrl){
        case 'sauveur' || '1':
            return 'https://id.time2rap.io/a/1039//01%20-%20Le%20sauveur.mp3'
        case 'pistou' || '2':
            return 'https://id.time2rap.io/a/1039//02%20-%20Pistou.mp3'
        case 'papillon' || '3':
            return 'https://id.time2rap.io/a/1039//03%20-%20Papillon.mp3'
        case 'jolie' || '4':
            return 'https://id.time2rap.io/a/1039//04%20-%20Ma%20jolie%20(feat.%20Leto).mp3'
        case 'tlma' || '5':
            return 'https://id.time2rap.io/a/1039//05%20-%20TLMA.mp3'
        case 'wow' || '6':
            return 'https://id.time2rap.io/a/1039//06%20-%20Wow.mp3'
        case 'madame' || '7':
            return 'https://id.time2rap.io/a/1039//07%20-%20Madame.mp3'
        case 'pollos' || '8':
            return 'https://id.time2rap.io/a/1039//08%20-%20Pollos%20Hermanos.mp3'
        case '9113' || '9':
            return 'https://id.time2rap.io/a/1039//09%20-%209%201%201%203%20(feat.%20SCH).mp3'
        case 'bro' || '10':
            return 'https://id.time2rap.io/a/1039//10%20-%20Bro%20Bro.mp3'
        case 'mula' || '11':
            return 'https://id.time2rap.io/a/1039//11%20-%20Mula.mp3'
        case 'money' || '12':
            return 'https://id.time2rap.io/a/1039//12%20-%20Money%20Train.mp3'
        case 'connais' || '13':
            return 'https://wvv.33rapfr.com/wp-content/uploads/2020/11/13-Tu-connais-lgang.mp3'
        case 'cachecash' || '14':
            return 'https://id.time2rap.io/a/1039//14%20-%20Cache%20Cash.mp3'
        case 'puristes' || '15':
            return 'https://id.time2rap.io/a/1039//15%20-%20Les%20puristes.mp3'
    }
}

module.exports = {
    name: "zola",
    description: "Playing last album of Zola",
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