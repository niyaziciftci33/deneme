const Discord = require("discord.js");
const ms = require("ms");
const moment = require('moment')
const momentt = require("moment-duration-format")
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let member = message.author;
 
if (!message.member.roles.cache.has(ayarlar.PremiumYetkilisi) && !message.member.roles.cache.has(ayarlar.ownerRol) && !message.member.hasPermission(8)) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Premium vermem gereken kişiyi belirt`)

 
    var hesapd = db.fetch(`hesapismi_${message.author.id}`)
    let prekisi = message.mentions.members.first() || message.guild.members.cache.find(c => c.id === args[0]);
    if (!prekisi) { message.channel.send(`Premium vermem gereken kişiyi belirt`);
    if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `d!hesap-oluştur <isim>`")
   } else {
      if (prekisi.roles.highest.position >= message.member.roles.highest.position)
      {
        return message.channel.send(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`);
      } 
          try {
            message.channel.send(
              new Discord.MessageEmbed()
              .setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
                .setColor(`GREEN`)
                .setDescription(`<@${kişi.id}>'ye premium verildi.`)
            );
            prekisi.roles.add(ayarlar.PremiumRol);
          } catch (e) {
            console.log(e);
          }
        }
  }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prever"],
  permLevel: 0,
  name: "PremiumVer"
}

exports.help = {
  name: "PremiumVer"
};