const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("Dijitalaile - Ekonomi", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**Dijitalaile - Ekonomi**") //BURAYA BOTUNUZUN ADINI YAZIN 
 .setURL(`https://discord.com/api/oauth2/authorize?client_id=783835501408813058&permissions=8&scope=bot`) //BURAYA BOTUNUZUN DAVET LİNKİNİ KOYUN
  .setDescription(`                 
 **d!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`d!çantam\`
Botu davet etmek için: \`d!davet\`
`)
                  
  .addField("💸 Para komutları", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`market\` \`satın-al\` \`soygun\` \`blackmarket\` \`kira - (d!eval)\` \`video\` \`av\`
`)

   .addField("🤖 Başlangıç", `
Bot komutları;
\`çantam\` \`param\` \`cüzdan\` \`transfer\` \`hesap-oluştur\` \`bilgiler\` \`banka\`
`)
  
    .addField("🎡 Casino komutları", `
Kasino para kazanma komutları;
\`slots\` \`balık-tut\` \`kasa\` \`çiftlikbank\` \`bahis\`
`)
 
   .addField("🛠️ Ayarlar", `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`)
 
   .addField("🤖 Bot komutları", `
Bot komutları;
\`davet\` \`istatistik\` \`ping\`
`)
 
   .addField("🕘 Süreli komutlar", `
Süreli para komutları;
\`günlük-para\`
`) 
 
  .setFooter(`Dijitalaile © | Tüm hakları saklıdır.`)
  
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['yaraq'], 
  permLevel: 0 
} 
exports.help = {
  name: "yaraq", 
  description: "CodeWork V12 MC-AT yardım ", 
  usage: "yardım" 
}

