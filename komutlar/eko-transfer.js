const Discord = require('discord.js')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
var ayarlar = require('../ayarlar.json');



exports.run = async(client, message, args) => {
           	
    
  let transkllanç = message.mentions.users.first()
  if(!transkllanç) return message.channel.send("Lütfen Birini Etiketleyin.");
  let kllanç = message.author
  let  para = args[1]
  if(transkllanç == kllanç) return message.channel.send(`Kendinize akçe veremezsiniz.`)
  if(transkllanç.bot == true) return message.channel.send(`Botlara akçe veremezsiniz.`)
  if(!transkllanç) return message.channel.send(`Bir kullanıcı girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}transfer @${client.user.tag} 50\``)
  if(!para) return message.channel.send(`Vereceğiniz akçe sayısını girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}transfer @${client.user.tag} 50\``)
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  
  const transbakiye = await db.fetch(`bakiye_${transkllanç.id}`);
  const transhesapdurumu = await db.fetch(`hesapdurum_${transkllanç.id}`);
  const transhesapismi = await db.fetch(`hesapismi_${transkllanç.id}`);
  if(!hesapdurumu) {
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
          let parai = args.slice(1).join(" ");
            
            if(bakiye < para) return message.channel.send(`:warning: Akçenziz Yetersiz!`)
            if(!transhesapdurumu) return message.channel.send(`Akçe vermek istediğin kullanıcının bir hesabı bulunmamakta.`)
            if(parai.includes("-")) return message.channel.send("Maalesef, **-** li değer giremezsiniz!")
            if(isNaN(para)) return message.channel.send("Bu sadece sayı olabilir!")
            if(parai < 300) return message.channel.send("En az 300 Akçe gönderebilirsin!")
            if(transhesapdurumu) {
                db.add(`bakiye_${message.author.id}`, -para)
                db.add(`bakiye_${transkllanç.id}`, +para)
                transkllanç.send(`${message.author.tag} adlı kullanıcı size \`${para} ${client.ekoayarlar.parabirimi}\` yolladı`)
                message.channel.send(`${transkllanç} adlı kullanıcıya başarıyla \`${para} ${client.ekoayarlar.parabirimi}\` yolladınız.`)
              }
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['akçegönder', 'paragönder', 'ag', 'para-gonder', 'para-gönder'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'transfer',
    description: 'Hesabınızdan başka bir hesaba para transferi yaparsınız.',
    usage: 'transfer <@kullanıcı>',
}
