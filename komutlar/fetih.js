const Discord = require('discord.js')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
 
    const hesapdurumu = await db.fetch(`hesapdurum_${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
  var kılıç = db.fetch(`kılıç_${message.author.id}`)
  
  if(!hesapdurumu) {
    message.channel.send(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
            if (!olta) return message.channel.send("Oltanız bulunmamaktadır")

  } else {
   let timeout = 120000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`fetih_${message.author.id}`)

   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`Tekrardan fetih yapmak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
     let gerekenpara = 20000
     let para = db.fetch(`bakiye_${message.author.id}`)
     if (!kılıç) return message.channel.send(new Discord.MessageEmbed()
                                             .setColor("RANDOM")
                                             .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                              .setDescription(`**Fetih yapmak için kılıç temin etmelisin.**`)
											  )
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 

        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Savaş sırasında yaralandın","Kılıcın kırıldı","Askerlerin kaçtı"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = 500         
      message.channel.send(new Discord.MessageEmbed()

                           .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} ve ${kaybettin} akçe kaybettin!`));
         
      await db.set(`fetih_${message.author.id}`, Date.now());
       await db.add(`bakiye_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = [ "Mora yarımadasını fethettin","Sinop'u fethettin","İstambul'u fethettin", "Bir kaleyi fethettin", "Bir şehri fethettin"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(10,200)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} ve Sultan Hazretleri ganimet olarak sana ${kazandın} akçe ödedi!`)
      message.channel.send(embed)   
     await db.set(`fetih_${message.author.id}`, Date.now());
    await db.add(`bakiye_${message.author.id}`, kazandın);

        }}}}
exports.conf = {
  enabled: true,
  aliases: ["fetih"],
};

exports.help = {
  name: 'Fetih',
};