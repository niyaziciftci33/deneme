const Discord = require('discord.js');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async(client, message, args) => {
   let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
if(!hesapismi) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
   const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
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
  
 {
    let türler = ["Kale","Meydan","Şehir","Köy"];
    if (!türler.includes(args[0]))
      return message.channel.send(
        `Yardım alabileceğiniz paşalar şeyler: \`${türler}\`
\`\`\`Bilgi;\`\`\`
**⭐ Niyazi Paşa'dan Kale savaşında yardım alırsınız.;Paşadan yardım almak için (.paşaal Niyazi)
⭐ Kerim Paşadan Meydan savaşında yardım alırsınız.;Paşadan yardım almak için (.paşaal Kerim)
⭐ Semih Paşadan Şehir savaşında yardım alırsınız.;Paşadan yardım almak için (.paşaal Semih)
⭐ Mert paşadan köy savaşında yardım alırsınız.;Paşadan yardım almak için (.paşaal Mert)
**Örnek: .savaş meydan**
`
      );
  /*global client*/
  let ms = require("parse-ms");

  let timeout = 300000;

  let weekly = await db.get(`paşayok_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));

    message.reply(
      `Paşaların emrindeki askerler yoruldu, yeniden savaşmak için (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin.)`
    );
  } else {
    let para = await db.fetch(`bakiye_${message.author.id}`);
    
    if (args[0] === "Kale") {
    let ms = require("parse-ms");

    let timeout = 300000;

    let weekly = await db.get(`paşaal_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Paşaların emrindeki askerler yoruldu, yeniden çalışmak için (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var niyaziadet = await db.fetch(`${message.author.id}.niyazi_adet`);
      if (!niyaziadet) {
        message.reply("**Niyazi Paşa'ya yardım isteği göndermediğin için savaşı kaybettin ve soyuldun. 1000 akçe kaybettin**");
         await db.set(`bakiye_${message.author.id}`, para - 1000)
      }
    
      if (niyaziadet) {

        let para = Math.floor(Math.random() * 3000) + 1;

        await db.add(`bakiye_${message.author.id}`, +para);

        await db.set(`${message.author.id}.niyazi_adet`, niyaziadet - 1);

        await db.set(`kale_${message.author.id}`, Date.now());
        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Kale savaşında üstün başarı göstererek Niyazi Paşa ve askerleri sayesinde savaşı kazandın  ve ganimet olarak ${para} akçe aldın.`
          )
          .setColor("GREEN")
        .setImage("https://cdn.discordapp.com/attachments/1048828374107303996/1067220139268911175/77cd6f0152fab3ca60e9d5ad4bfb4ad7.jpg")
          .setTimestamp();
        message.channel.send(embed);
      }
    }
  }
    if (args[0] === "Meydan") {
    let ms = require("parse-ms");

    let timeout = 300000;

    let weekly = await db.get(`paşaal_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Paşaların emrindeki askerler yoruldu, yeniden çalışmak için (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var kerimadet = await db.fetch(`${message.author.id}.kerim_adet`);
      if (!kerimadet) {
        message.reply("**Kerim Paşa'ya yardım isteği göndermediğin için savaşı kaybettin ve soyuldun. 1000 akçe kaybettin**");
         await db.set(`bakiye_${message.author.id}`, para - 1000)
      }
    
      if (kerimadet) {

        let para = Math.floor(Math.random() * 4000) + 1;

        await db.add(`bakiye_${message.author.id}`, +para);

        await db.set(`${message.author.id}.kerim_adet`, kerimadet - 1);

        await db.set(`meydan_${message.author.id}`, Date.now());
        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Meydan savaşında üstün başarı göstererek Kerim Paşa ve askerleri sayesinde savaşı kazandın  ve ganimet olarak ${para} akçe aldın.`
          )
          .setColor("GREEN")
        .setImage("https://cdn.discordapp.com/attachments/1048828374107303996/1067220139268911175/77cd6f0152fab3ca60e9d5ad4bfb4ad7.jpg")
        .setTimestamp();
        message.channel.send(embed);
      }
    }
  }
    
          if (args[0] === "Şehir") {
    let ms = require("parse-ms");

    let timeout = 300000;

    let weekly = await db.get(`paşaal_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Paşaların emrindeki askerler yoruldu, yeniden çalışmak için (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var semihadet = await db.fetch(`${message.author.id}.semih_adet`);
      if (semihadet) {
        message.reply("**Semih Paşa'ya yardım isteği göndermediğin için savaşı kaybettin ve soyuldun. 1000 akçe kaybettin**");
         await db.set(`bakiye_${message.author.id}`, para - 1000)
      }
    
      if (semihadet) {

        let para = Math.floor(Math.random() * 2500) + 1;

        await db.add(`bakiye_${message.author.id}`, +para);

        await db.set(`${message.author.id}.semih_adet`, semihadet - 1);

        await db.set(`şehir_${message.author.id}`, Date.now());
        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Şehir savaşında üstün başarı göstererek Semih Paşa ve askerleri sayesinde savaşı kazandın  ve ganimet olarak ${para} akçe aldın.`
          )
          .setColor("GREEN")
        .setImage("https://cdn.discordapp.com/attachments/1048828374107303996/1067220139268911175/77cd6f0152fab3ca60e9d5ad4bfb4ad7.jpg")
          .setTimestamp();
        message.channel.send(embed);
      }
    }
  }
   if (args[0] === "Köy") {
    let ms = require("parse-ms");

    let timeout = 300000;

    let weekly = await db.get(`paşaal_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));

      message.reply(
        `Paşaların emrindeki askerler yoruldu, yeniden çalışmak için (**${time.minutes}dakika ${time.seconds}saniye** beklemelisin)`
      );
    } else {
     var mertadet = await db.fetch(`${message.author.id}.mert_adet`);
      if (mertadet) {
        message.reply("**Mert Paşa'ya yardım isteği göndermediğin için savaşı kaybettin ve soyuldun. 1000 akçe kaybettin**");
         await db.set(`bakiye_${message.author.id}`, para - 1000)
      }
    
      if (mertadet) {

        let para = Math.floor(Math.random() * 2000) + 1;

        await db.add(`bakiye_${message.author.id}`, +para);

        await db.set(`${message.author.id}.mert_adet`, mertadet - 1);

        await db.set(`köy_${message.author.id}`, Date.now());
        let embed = new Discord.MessageEmbed()
          .setDescription(
            `${message.author.tag}, Köy savaşında üstün başarı göstererek Köy Paşa ve askerleri sayesinde savaşı kazandın  ve ganimet olarak ${para} akçe aldın.`
          )
          .setColor("GREEN")
        .setImage("https://cdn.discordapp.com/attachments/1048828374107303996/1067220139268911175/77cd6f0152fab3ca60e9d5ad4bfb4ad7.jpg")
          .setTimestamp();
        message.channel.send(embed);
      }
    }
   }
}
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["savaş"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "savaş",
usage: ""
}