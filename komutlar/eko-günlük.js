const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const DBL = require('dblapi.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



exports.run = async (client, message, args) => {
const dbl = new DBL('', client); //Dbl Tokeninizi Yazınız.
		  
	
    let timeout = 86400000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`günlükpara_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Günlük ödülünü tekrar alabilmek için **${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye** beklemelisin!`)
    } else {
      if(client.ekoayarlar.dbloy == false) {
        db.set(`günlükpara_${message.author.id}`, Date.now())
        if(client.ekoayarlar.rastgelepara == true) {
          const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
          db.add(`bakiye_${message.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar.renk)
          .setDescription(`**Günlük Akçe**`)
          .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)
          message.channel.send(para1)
        } else {
          if(client.ekoayarlar.rastgelepara == false) {
            db.add(`bakiye_${message.author.id}`, client.ekoayarlar.günlükpara)
            let para1 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`**Günlük Akçe**`)
            .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
            message.channel.send(para1)
          }
        }
      } else {
        if(client.ekoayarlar.dbloy == true) {
          const datal = new DBL(client.ekoayarlar.dblkey, client)
          dbl.hasVoted(message.author.id).then(voted => {
            if(voted) {
              db.set(`günlükpara_${message.author.id}`, Date.now())
              if(client.ekoayarlar.rastgelepara == true) {
                const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
                db.add(`bakiye_${message.author.id}`, randomizer)
                let para1 = new Discord.MessageEmbed()
                .setColor(client.ekoayarlar.renk)
                .setDescription(`**Günlük Akçe**`)
                .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)
                message.channel.send(para1)
              } else {
                if(client.ekoayarlar.rastgelepara == false) {
                  db.add(`bakiye_${message.author.id}`, client.ekoayarlar.günlükpara)
                  let para1 = new Discord.MessageEmbed()
                  .setColor(client.ekoayarlar.renk)
                  .setDescription(`**Günlük Akçe**`)
                  .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
                  message.channel.send(para1)
                }
              }
            } else {
              return message.channel.send(`${client.ekoayarlar.dblmsj}`)
            }
          })
        }
      }
  
}


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['günlük-akçe'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'günlük',
    description: 'Günlük para alırsınız.',
    usage: 'günlükpara'
}