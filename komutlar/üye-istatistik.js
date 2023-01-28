const Discord = require('discord.js');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const moment = require('moment');
const os = require('os');
const client = require("moment-duration-format");

exports.run = async(client, message, args) => {
   let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setAuthor(`Dijitalaile İstatistik`,client.user.avatarURL())
  .addField(" Geliştirici", `<@!331765705168912384>`, true) 
  .addField(" Discord.JS", `**v${Discord.version}**`, true)
  .addField(" Ping", `**${client.ws.ping}ms**`, true)
.addField(" Sunucu Sayısı", `**\`${client.guilds.cache.size.toLocaleString()}\`**`, true)
.addField(" Kullanıcı Sayısı", `**\`${client.guilds.cache.reduce((a,b)=>a+=b.memberCount,0)}\`**`, true)
.addField("Kanal Sayısı", `**\`${client.channels.cache.size.toLocaleString()}\`**`, true)
.addField(" Destek Sunucusu", `[Destek Sunucusu](https://discord.gg/7UQW2x6vJK)`, true)
.addField("Kuruluş Tarihi", `**\`${s}\`**`, true)
.addField(" Uptime", `\`${uptime}\``, true)
 .setFooter(client.user.tag,client.user.avatarURL())
 
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i", "botbilgi", "bot-bilgi"],
    permLevel: 0,
    katagori: "Ekonomi"}
exports.help = {
name: "istatistik",
usage: ""
}