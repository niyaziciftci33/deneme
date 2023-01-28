const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const soygunlog = db.get(`soygunlog_${kllanç.id}`)
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const asker = db.get(`asker_${kllanç.id}`)
  const kılıç = db.get(`kılıç_${kllanç.id}`)
  const zırh = db.get(`zırh_${kllanç.id}`)
  if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Devlet-i Aliyye ", client.user.avatarURL())
.setDescription(`
Satın almak istediğiniz eşyanın id sini giriniz. **Örnek**\n
**.satın-al asker - 30000 Akçe\n.satın-al kılıç - 20000 Akçe\n.satın-al zırh - 15000 Akçe**`)
.setFooter("Devlet-i Aliyye", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "asker" || args[0].includes("asker")) {
    let fiyatcık = 30000 // istediğiniz fiyat
    if (bakiye < fiyatcık) return message.reply('Yeterli Paran Yok!')
  db.set(`${message.author.id}.asker`, true);
  db.set(`asker_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık)
  
  return message.reply(`İsyan için başarıyla 5 asker aldınız.\n Dikkat: 1 kullanımdan sonra size isyan edebilir, yeniden ücret ödemelisiniz.`)
}
  if(args[0] === "zırh" || args[0].includes("zırh")) {
    let fiyatcık3 = 15000 // istediğiniz fiyat
    if (bakiye < fiyatcık3) return message.reply('Yeterli Paran Yok!')
     db.set(`${message.author.id}.zırh`, true);
      db.set(`zırh_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık3)
          
    
    return message.reply(`Başarıyla 5 kullanımlık zırh aldınız.\n Dikkat: 1 kullanımdan sonra kırılabilir, yenisini almalısınız.`)
}
  if(args[0] === "kılıç") {
    let fiyatcık4 = 20000 // istediğiniz fiyat
    if (bakiye < fiyatcık4) return message.reply('Yeterli Paran Yok!')
      db.set(`kılıç_${kllanç.id}`, "Var")
    db.set(`${message.author.id}.kılıç`, true);
  db.add(`bakiye_${kllanç.id}`, -fiyatcık4)
    
return message.reply(`Başarıyla 5 kullanımlık kılıç aldınız.\n Dikkat: 1 kullanımdan sonra kırılabilir, yenisini almalısınız.`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["satınal","al"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'satın-al',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}