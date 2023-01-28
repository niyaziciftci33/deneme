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
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`olta_${kllanç.id}`)
  const bilet = db.get(`bilet._${kllanç.id}`)
  const telefon = db.get(`telefon_${kllanç.id}`)
  const kilit = db.get(`ev_${kllanç.id}`)
const market = new Discord.MessageEmbed()
.setAuthor("Dijitalaile Premium", client.user.avatarURL())
.setDescription(`
Premium
🔫 BlackMarket'den indirimli fiyata silah alabilirsin. \n --> Komut: d!prebm silahadı
🎣 Günlük para komudu ile daha yüksek para alabilirsin. \n --> Komut: d!pregünlük
📱 Premium kasa açarak daha güzel ödüller kazanabilirsin. Kaybetme şansın olduğunu unutma! \n --> Komut: d!kasaaç premium
`) 
.setFooter("Dijitalaile Premium", client.user.avatarURL())
.setTimestamp()
message.channel.send(market)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['prebilgi'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'premiumbilgi',
    description: 'Premium Bilgi Komudu.',
    usage: 'premiumbilgi'
}