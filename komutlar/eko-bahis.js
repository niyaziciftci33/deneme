const Discord = require('discord.js')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const ms = require('parse-ms');
exports.run = async (client, message, args) => {
let para = db.fetch(`bakiye_${message.author.id}`) 
  
  let timeout = 25000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Bahis oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için miktar girmelisin`))
  if(miktar < 300) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için en az 300 Akçe oynayabilirsin.`))
  if(miktar > 20001) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Buna izin veremem dostum eğer kaybedersen çok zarara uğrarsın o yüzden lütfen ``20000 Akçe`` miktarından az bi miktar gir`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cebinde ${para ? "sadece " + para + ' Akçe var!' : 'hiç paran yok!'}`))
if(!para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cebinde Akçe bulunmamaktadır.`))
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = miktar*2.5        
      message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Bahisi kaybettin ve cebinden ${kaybettin} akçe eksildi!`));
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`bakiye_${message.author.id}`, -kaybettin);   
        } else {
          var kazandın = miktar*2
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`Bahisi kazandın ve cebine ${kazandın} akçe eklendi!`)
      message.channel.send(embed)     
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`bakiye_${message.author.id}`, kazandın);
        }}}
exports.conf = {
  enabled: true,
  aliases: ["bahis"],
};

exports.help = {
  name: 'Bahis',
};