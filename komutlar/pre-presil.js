const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
    
if (!message.member.roles.cache.has(ayarlar.PremiumYetkilisi) && !message.member.roles.cache.has(ayarlar.ownerRol) && !message.member.hasPermission(8)) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Premiumu kaldırmam gereken kişiyi belirt!`)

            const sil = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true }))
  .setColor(`RED`)
  .setDescription(`<@${kişi.id}> adlı üyenin premiumu kaldırıldı!`)
  kişi.roles.remove(ayarlar.PremiumRol);
message.channel.send(sil)
    

}
      
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["presil"],
  permLevel: 0,
}

exports.help = {
  name: "PremiumSil"
};