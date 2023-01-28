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
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const banka = await db.fetch(`bank_${kllanç.id}`)
  const bankaismi2 = await db.fetch(`banka_${kllanç.id}`)
   let deger = db.fetch(`bankabakiye_${message.author.id}`)

  let bak;
  
  if(bakiye < 0) {
    bak = "0"
    await db.set(`bakiye_${kllanç.id}`, 0)
    
  } else if(bakiye == null) {
    bak = "1"
    await db.set(`bakiye_${kllanç.id}`, 1)
    await db.set(`bankabakiye_${kllanç.id}`, 1000)
    
  } else if(bakiye => 0) {
    bak = bakiye
  };
  
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
💵 Paranız: ${hesapismi ? bak: "Hesap açın!"}
`)
.setFooter("Devlet-i Aliyye", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['akçe'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'akçem',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}