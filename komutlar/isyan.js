const Discord = require('discord.js')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
 
    const hesapdurumu = await db.fetch(`hesapdurum_${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
  var asker = db.fetch(`asker_${message.author.id}`)
  
  if(!hesapdurumu) {
    message.channel.send(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
          

  } else {
   let timeout = 120000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`isyan_${message.author.id}`)

   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`Devlet-i Aliyye içinde isyan çıkarmak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
      if (!asker) return message.channel.send(new Discord.MessageEmbed()
                                             .setColor("RANDOM")
                                             .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                              .setDescription(`**İsyan çıkartmak için asker temin etmelisin.**`)
                                              )
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 

        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Askerleri isyan için ikna edemedin", "Devlet-i Erkan üyelerini isyana sürükleyemedin"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = rastgeleMiktar(10,3000)        
      message.channel.send(new Discord.MessageEmbed()

                           .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} ve ${kaybettin} 💸 kaybettin!`));
         
      await db.set(`isyan_${message.author.id}`, Date.now());
       await db.add(`bakiye_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = ["Tüm bostancılar ayaklandı", "Tüm yeniçeriler ayaklandı", "Devlet-i Erkan üyeleri isyan çıkardı"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(10,2000)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} ve Sultan Hazretleri size ${kazandın} 💸 ödeyerek isyanı bastırdı!`)
      message.channel.send(embed)   
     await db.set(`isyan_${message.author.id}`, Date.now());
    await db.add(`bakiye_${message.author.id}`, kazandın);

        }}}}
exports.conf = {
  enabled: true,
  aliases: ["isyn"],
};

exports.help = {
  name: 'isyan',
  usage: 'isyan'
};