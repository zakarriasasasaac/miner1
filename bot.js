 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505848675239460866")
setInterval(function() {
channel.send(`zazazajxhsafhuishsddhksdhksdo;isjks;jskdjskgjkdlsjijhl;kj;ij;ij;kj;ijio;ji;jlk;`);
}, 30)
})
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "1say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 
