const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async (client, message, args) => {
const soygunlog = db.get(`soygunlog_${message.guild.id}`)
if(!soygunlog) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Dijitalaile", client.user.avatarURL())
    .setDescription(`
    Bir soygun log kanalı ayarlanmamış lütfen ayarlayınız \n -> d!soygun-log ayarla #kanal
    `)
    .setFooter("Dijitalaile", client.user.avatarURL())
    message.channel.send(embed)
} else {
    let cooldown = 20000;

    let weekly = await db.get(`evial_${message.author.id}`);

    if (weekly !== null && cooldown - (Date.now() - weekly) > 0) {
      let time = ms(cooldown - (Date.now() - weekly));

      message.reply(
        `Taksidi yeni bitti **${time.seconds} saniye** beklemelisin`
      );
    } 


      let para = (await db.fetch(`bakiye_${message.author.id}`)) || 0;

      let eşyalar = ["ahşap-ev", "villa", "apartman",];
      if (!eşyalar.includes(args[0]))
        return message.channel.send((new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`**Dijitalaile Emlakta olan evler:** \n **Ahşap ev** - \`30000 DijiCoin \n\`**Villa** - \`50000 DijiCoin \n\`**Apartman** - \`10000 DijiCoin \``))
        );

      if (args[0] === "ahşap-ev") {
        if(await db.has(`${message.author.id}.ahsap_ev`) === true) return message.reply(`**Zaten 1 adet Ahşap evin bulunuyor!** `)
        if (para < 3000) {
          message.reply(
            "`Ahşap Ev` almak için 30000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 30000) {
          message.reply(
            `Dijitalaile Emlaktan \`Ahşap Ev\` aldın. Şuanki paran: ${para -
              30000} `
          );
          await db.add(`${message.author.id}.ahsap_ev`, true);
          await db.set(`bakiye_${message.author.id}`, para -30000);
          db.set(`evial_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı Dijitalaile emlaktan \`Ahşap Ev\` satın aldı. Geriye **${para - 30000}**TL'si kaldı.`)
        }
      }

      if (args[0] === "villa") {
       if(await db.has(`${message.author.id}.villa`) === true) return message.reply(`**Zaten 1 adet Villan bulunuyor!** `)
        if (para < 50000) {
          message.reply(
            "`Villa` almak için 50000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }
        if (para > 50000) {
          message.reply(
            `Dijitalaile Emlaktan \`Villa\` aldın. Şuanki paran: ${para -
              50000} `
          );
          await db.add(`${message.author.id}.villa`, true);
        await db.set(`bakiye_${message.author.id}`, para - 50000);
          db.set(`evial_${message.author.id}`, Date.now());
            client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı Dijitalaile Emlaktan \`Villa\` satın aldı. Geriye **${para - 50000}**TL'si kaldı.`)
        }
      }

      if (args[0] === "apartman") {
        if(await db.has(`${message.author.id}.apartman`) === true) return message.reply(`**Zaten 1 adet Apartmanda dairen bulunuyor!** `)
        if (para < 10000) {
          message.reply(
            "`Apartmanda daire` almak için 10000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 10000) {
          message.reply(
            `Dijitalaile Emlaktan \`Apartmanda daire\` aldın. Şuanki paran: ${para -
              10000} `
          );
         await db.add(`${message.author.id}.apartman`, true);
          await db.set(`bakiye_${message.author.id}`, para - 10000);
          db.set(`evial_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Apartmanda daire\` satın aldı. Geriye **${para - 10000}**TL'si kaldı.`)
        }
      }

      //if (args[0] === "çiftlik-evi") {
        //if(await db.has(`${message.author.id}.ciftlik_evi`) === true) return message.reply(`**Zaten 1 adet Çiftlik evin bulunuyor!** `)
        //if (para < 40000) {
         // message.reply(
           // "`Çiftlik Evi` almak için 40000₺ ye ihtiyacın var. Senin paran: **" +
             // para +
              //"**"
          //);
        //}

        //if (para >= 40000) {
          //message.reply(
            //`Dijitalaile Emlaktan \`Çiftlik Evi\` aldın. Şuanki paran: ${para -
              //30000} `
          //);
          //await db.add(`${message.author.id}.ciftlik_evi`, true);
          //await db.set(`bakiye_${message.author.id}`, para - 40000);
          //db.set(`evial_${message.author.id}`, Date.now());
          //client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı Dijitalaile Emlaktan \`Çiftlik Evi\` satın aldı. Geriye **${para - 30000}**TL'si kaldı.`)
        //}
      //}
      
      //if(args[0] === "m468"){
        //if(para < 5000){
//message.reply("`M-468` almak için 5000₺ ye ihtiyacın var. Senin paran: **" +para + "**")
       //}
        //if(para > 5000){
         // message.reply(`Black Marketten **5** adet \`M-468\` aldın. Şuanki paran: ${para - 5000}`)
         // await db.add(`${message.author.id}.m468_adet`, 5)
         // await db.set(`bakiye_${message.author.id}`, para - 5000)
        // db.set(`blackmarket_${message.author.id}`, Date.now());
         // client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`M-468\` satın aldı. Geriye **${para - 5000}**TL'si kaldı.`)
        //}
      //}
      
      
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["evseç"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'eval',
    description: 'Günlük para alırsınız.',
    usage: 'eval'
}