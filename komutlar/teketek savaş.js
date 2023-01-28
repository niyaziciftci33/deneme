const Discord = require('discord.js');//Fiber <3 LysteX
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
		  
	    var sans = ["Niyazi paşa ile savaştın ve", "Semih paşa ile savaştın ve", "Kayzer ile savaştın ve", "Mehmet paşa ils savaştın ve", "Mert paşa ile savaştın ve"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
 var zırh = await db.fetch(`${message.author.id}.zırh`);
let cd = 10000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre2_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha talim etmek için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
        if (!zırh) return message.channel.send("Zırh bulunmamaktadır")
        let gelcekpara = Math.round(Math.random() * 1000)
        db.add(`bakiye_${message.author.id}`, gelcekpara)
   message.channel.send(`
${sonuc} ganimet olarak **${gelcekpara}** Akçe kazandın
`)
       

  
   db.set(`calissüre2_${message.member.id}`, Date.now())
  

                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["talim"],
  permLevel: 0
};

exports.help = {
  name: 'talim', 
  description: "1e1 talim edersiniz.",
  usage: 'talim'
};