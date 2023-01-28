const Discord = require('discord.js');//Fiber <3 LysteX
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
		  
	    var sans = ["Geyik avladın ve", "Kuş avladın ve", "Ceylan avladın ve", "Koyun kestin ve", "Keklik avladın ve", "Balık avladın ve"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
var kılıç = db.fetch(`kılıç_${message.author.id}`)
let cd = 120000 //2 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre2_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha avlanmak çekmek için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
        if (!kılıç) return message.channel.send("Kılıcınız bulunmamaktadır")
        let gelcekpara = Math.round(Math.random() * 1500)
        db.add(`bakiye_${message.author.id}`, gelcekpara)
   
   message.channel.send(`
${sonuc} **${gelcekpara}** Akçe kazandın
`)
       

  
   db.set(`calissüre2_${message.member.id}`, Date.now())

                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["av"],
  permLevel: 0
};

exports.help = {
  name: 'avlan', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'avlan'
};