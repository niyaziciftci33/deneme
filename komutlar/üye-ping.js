const Discord = require('discord.js');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async(client, message, args) => {
    const embed2 = new Discord.MessageEmbed()
  .setDescription('**Botun pingi hesaplanıyor...**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(embed2)
    let diff = (Date.now() - start); 
    let API = (client.ws.ping).toFixed(2)
  
 const Embed = new Discord.MessageEmbed()
 .setColor("ff0000")
 .setAuthor("Dijitalaile", client.user.avatarURL())
.setDescription(`
 Pingim = **${client.ws.ping} ms**
 Mesaj Gecikmem = **${message.createdTimestamp} ms**`)
 .setFooter(`Dijitalaile`, message.author.avatarURL())
 .setTimestamp() 
 
  const newEmbed = new Discord.MessageEmbed()
 .setColor("ff0000")
 .setAuthor("Dijitalaile", client.user.avatarURL())
.setDescription(`
 Pingim = **${client.ws.ping} ms**
 Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Dijitalaile`, message.author.avatarURL())
 .setTimestamp() 
  
   const newEmbed2 = new Discord.MessageEmbed()
 .setColor("f7ff00")
 .setAuthor("Dijitalaile", client.user.avatarURL())
.setDescription(`
 Pingim = **${client.ws.ping} ms**
 Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Dijitalaile`, message.author.avatarURL())
 .setTimestamp() 
    setInterval(() => {
  const newEmbed = new Discord.MessageEmbed()
 .setColor("ff0000")
 .setAuthor("Dijitalaile", client.user.avatarURL())
.setDescription(`
 Pingim = **${client.ws.ping} ms**
 Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Dijitalaile`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(newEmbed)
        }, 4000)
  /*
    setInterval(() => {
  const newEmbed2 = new Discord.MessageEmbed()
 .setColor("f7ff00")
 .setAuthor("Carnoxis", client.user.avatarURL())
.setDescription(`
<a:altin4:829828404249231450> Pingim = **${client.ws.ping} ms**
<a:altin4:829828404249231450> Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Carnoxis`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(newEmbed2)
        }, 6000)  
    setInterval(() => {
  const Embed = new Discord.MessageEmbed()
 .setColor("ff0000")
 .setAuthor("Carnoxis", client.user.avatarURL())
.setDescription(`
<a:altin4:829828404249231450> Pingim = **${client.ws.ping} ms**
<a:altin4:829828404249231450> Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Carnoxis`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(Embed)
        }, 80000)  
  */
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "ping",
usage: ""
}