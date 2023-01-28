
const Discord = require("discord.js");
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
var ayarlar = require('../ayarlar.json');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
		  
	
  let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  var asker = await db.fetch(`${message.author.id}.asker`);
  var kılıç = await db.fetch(`${message.author.id}.kılıç`);
  var zırh = await db.fetch(`${message.author.id}.zırh`);
  if (!hesapdurumu) {
    if (args[0])
      return message.reply(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
        const embedczdn = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar.renk)
          .setDescription(
            `Hesap İsmi: **${hesapismi ? hesapismi : 'Bilinmiyor.'}**\n\nEmrindeki Asker sayısı: **${asker ? asker : 'Yok.'}**\n Envanterindeki Kılıç Sayısı: **${kılıç ? kılıç : 'Yok.'}**\n Envanterindeki Zırh Sayısı: **${zırh ? zırh : 'Yok.'}**`
          );
        message.channel.send(embedczdn);
      }
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sb"],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "silahbilgi",
  description: "Silah bilgi gösterir.",
  usage: "silahbilgi <@kullanıcı>"
};
