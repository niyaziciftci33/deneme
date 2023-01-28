const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i", "botbilgi", "bot-bilgi"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "istatistik",
usage: ""
}