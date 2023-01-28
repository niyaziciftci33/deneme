
const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async (client, message, args) => {
	{
    let cooldown = 20000;

    let weekly = await db.get(`paşaal_${message.author.id}`);

    if (weekly !== null && cooldown - (Date.now() - weekly) > 0) {
      let time = ms(cooldown - (Date.now() - weekly));

      message.reply(
        `Paşalardan yeni bir yardım almak için **${time.seconds} saniye** beklemelisin`
      );
    } else {
		var hesapd = db.fetch(`hesapismi_${message.author.id}`)
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
 var paşayok = await db.has(`paşa_${message.author.id}`)


      let para = (await db.fetch(`bakiye_${message.author.id}`)) || 0;

      let eşyalar = ["Niyazi", "Semih", "Mert", "Kerim"];
      if (!eşyalar.includes(args[0]))
        return message.channel.send((new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`**Yardım alabileceğiniz paşalar:** \n **Niyazi** - \`8000 Akçe\n\` *Yönetim konusunda bilgilidir. Ordu nizama girer Tecrübesi* **Orta** *seviyededir. Dayanıklılığı* **Orta** *seviyededir*\n\` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`**Kerim** - \`10000 Akçe\n\` *Askerlerin gücünü arttırır Liderlik özelliğinden dolayı işleri hızlıca bitirmenizi sağlar. Tecrübesi* **Yüksek** *seviyededir. Dayanıklılığı* **Yüksek** *seviyededir*\n\` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`**Semih** - \`6000 Akçe\n\` *Savaş tecrübesi sebebiyle taktiksel destek verir. Tecrübesi* **Orta** *seviyededir. Dayanıklılığı* **Düşük** *seviyededir*\n\` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`**Mert** - \`4000 Akçe\n\`*Zekası ile savaşları kazanmada büyük pay sağlar. Tecrübesi* **Orta** *seviyededir. Dayanıklılığı* **Orta** *seviyededir*\n\` ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`**Not:** *Size yardım eden paşalar* **5** *savaşa katılabilir.* *Yani* **5** *kullanımlıktır.*\n\`Komudu her kullanmanız 5 savaşa katılacak paşadan yardım almanız demektir.\``))
        );

      if (args[0] === "Niyazi") {
        if (para < 8000) {
          message.reply(
            "`Niyazi` adlı çalışanı almak için 8000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 8000) {
          message.reply(
            `\`Niyazi\` adlı çalışanı işe aldın. Şuanki paran: ${para -
              8000} `
          );
          await db.add(`${message.author.id}.niyazi_adet`, 5);
          await db.set(`bakiye_${message.author.id}`, para -8000);
          db.set(`çalışan_${message.author.id}`, Date.now());
        }
      }

      if (args[0] === "Kerim") {
        if (para < 10000) {
          message.reply(
            "`Kerim` Paşadan yardım almak için 10000 akçeye ye ihtiyacın var. Senin akçen: **" +
              para +
              "**"
          );
        }

        if (para > 10000) {
          message.reply(
            ` \`Kerim Paşa'dan\` yardım aldın. Şuanki akçen: ${para -
              10000} `
          );
          await db.add(`${message.author.id}.kerim_adet`, 5);
        await db.set(`bakiye_${message.author.id}`, para - 10000);
          db.set(`paşa_${message.author.id}`, Date.now());
        }
      }

      if (args[0] === "Semih") {
        if (para < 6000) {
          message.reply(
            "`Semih Paşa'dan` yardım almak için 6000 akçeye ye ihtiyacın var. Senin akçen: **" +
              para +
              "**"
          );
        }

        if (para > 6000) {
          message.reply(
            `\`Semih Paşa'dan\` yardım aldın. Şuanki akçen: ${para -
              6000} `
          );
         await db.add(`${message.author.id}.semih_adet`, 5);
          await db.set(`bakiye_${message.author.id}`, para - 6000);
          db.set(`paşa_${message.author.id}`, Date.now());
        }
      }

      if (args[0] === "Mert") {
        if (para < 4000) {
          message.reply(
            "`Mert Paşa'dan` yardım almak için 4000 akçeye ye ihtiyacın var. Senin akçen: **" +
              para +
              "**"
          );
        }

        if (para >= 4000) {
          message.reply(
            `\`Mert Paşa'dan\` yardım aldın. Şuanki akçen: ${para -
              6000} `
          );
          await db.add(`${message.author.id}.mert_adet`, 5);
          await db.set(`bakiye_${message.author.id}`, para - 4000);
          db.set(`paşa_${message.author.id}`, Date.now());
           }
      }
    }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pa"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'paşaal',
    description: 'Paşa alırsınız.',
    usage: '.paşaal'
}