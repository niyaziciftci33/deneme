const Discord = require('discord.js')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
var ayarlar = require('../ayarlar.json');



exports.run = async (client, message, args) => {
		  
	
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Akçe Miktarı: ${bakiye}\n Hesap Oluşturma Tarihi: Bilinmiyor`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`Hesap İsmi: ${hesapismi}\n Akçe: ${bakiye}\n Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu!`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
 
}

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bilgilerim"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bilgiler',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}