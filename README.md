<h1 align="center">
    <img height="250" hidth="200" src="https://miro.medium.com/max/3840/1*bNYZYQisFmGr8TpCtCaPTQ.jpeg">
    <img height="250" hidth="200" src="https://www.actugaming.net/wp-content/uploads/2019/10/lucio-guide-overwatch.jpg">
</h1>

# 🤖 - Lucio
Bot sing music who user select  
The user must enter a name followed by the music url, the latter will be saved in a MongoDB database. After the user to launch their music  

To list all the possible commands, hit <prefix>help

Work with his personnal [API](https://github.com/ecandotti/LucioAPI.git)  
Don't forget to initiate prefix and token in config.son  

Use :  
- DiscordJS  
- ffmpeg-static, @discordjs/opus, fluent-ffmpeg, opusscript (encoding music)
- ytdl-core (youtube download)
- node-fetch (to dialog with api)

## Use the project  
- git clone https://github.com/ecandotti/Lucio.git
- cd Lucio  
- npm i  
- npm start  
