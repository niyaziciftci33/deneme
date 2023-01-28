const Discord = require('discord.js');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let kanal = message.mentions.channels.first();  
  if(args[0] === "sıfırla") {
  const sıfırlandı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)  
  .setTitle(`${client.user.username} | Log kanal sıfırlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`Log kanalı başarıyla sıfırlandı!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Devlet-i Aliyye`)
  message.channel.send(sıfırlandı)
  db.delete(`soygunlog_${message.guild.id}`)
  return;
  }
 if(args[0] === "ayarla") {
    db.set(`soygunlog_${message.guild.id}`, kanal.id)
    const ayarlandı = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} | Log ayarlama komutu.`)
    .setColor(0x36393F)
    .setDescription(`Log başarıyla ${kanal} olarak ayarlandı!`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Devlet-i Aliyye`)
    message.channel.send(ayarlandı)
 } 
 
  if (!kanal) {
    const ayarlanmadı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())  
  .setTitle(`${client.user.username} | Log ayarlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`Lütfen bir kanal veya sıfırlama belirtiniz. .log ayarla #kanal veya sıfırla!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Devlet-i Aliyye`)
  message.channel.send(ayarlanmadı)
  }
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["log"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "log",
usage: ""
}
