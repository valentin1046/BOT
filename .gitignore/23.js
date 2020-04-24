const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NzAzMzQ5MjUzMzIxNTIzMjgx.XqNT7w.GiPT4fkArT5iC5UoW7njBoToRH0");


var prefix = ("-");

client.on("message", (message) => {

    if(message.content === "Bonjour") {
        message.channel.send("Je suis 23. Que puis-je faire ?")
    }
    
    if(message.content === prefix + "help") {
        message.channel.send("Besoin d'aide ?")
    }

});
