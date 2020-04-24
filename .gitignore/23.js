const Discord = require("discord.js");
const client = new Discord.Client();
const BOT = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("-");

client.on("message", (message) => {

    if(message.content === "Bonjour") {
        message.channel.send("Je suis 23. Que puis-je faire ?")
    }
    
    if(message.content === prefix + "help") {
        message.channel.send("Besoin d'aide ?")
    }

});
