const Discord = require('discord.js');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async(client, message, args) => {
    const WestraEmbed = new Discord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
  WestraEmbed.setAuthor(`Dijitalaile Ekonomi'yi davet ederek sunucunda eğlen!`)
  WestraEmbed.setDescription(`Dijitalaile Ekonomi'yi davet etmek için [buraya](https://discord.com/api/oauth2/authorize?client_id=1001790539202580480&permissions=8&scope=bot%20applications.commands) tıkla!`)
  message.channel.send(WestraEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "davet",
usage: ""
}