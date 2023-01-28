const Discord = require('discord.js');//Fiber <3 LysteX
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})
const kasalar = require('.././kasalar');
  const ms = require('parse-ms');

exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const bakiye = await db.fetch(`bakiye_${message.author.id}`);
  const hesapdurumu = await db.fetch(`hesapismi_${message.author.id}`);
  const kasasayisi = kasalar.length
  if(!hesapdurumu) return message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir Bölge İD!si girmelisin!`)
  .setFooter(`Fethedilecek bölgeler listesine bakmak için: ${client.ekoayarlar.botunuzunprefixi}fetih-bölge`)
  .setColor(client.ekoayarlar.renk)
  if(!kasaid) return message.channel.send(kasaidembeds)
  if(kasaid > kasasayisi) return message.channel.send(kasaidembeds)
  if(isNaN(kasaid)) return message.channel.send(kasaidembeds)
  const kasafiyat = kasalar.filter(x => x.kasaid == kasaid).map(x => x.fiyat)
  if(bakiye < kasafiyat) return message.channel.send(`:warning: Akçeniz Yetersiz!`)
    const embed = new Discord.MessageEmbed()
  message.channel.send(`Bölgeyi fethetmek için gitmek istediğinize emin misiniz?\n Şu anda \`${bakiye} ${client.ekoayarlar.parabirimi}\` var bölgeye gittikten açtıktan sonra \`${bakiye - kasafiyat}\` akçen kalacak. \n\`Eğer gitmek istiyorsan evet(e) istemiyorsan hayır(h) yazabilirsin.\``)
  
  
  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const choice = response.first().content
    if (choice == 'hayır' || choice == 'h') return message.channel.send('🚀 İşlem iptal edildi.')
    if (choice !== 'evet' && choice !== 'e') {
      message.channel.send('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
    }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
    try {
      db.add(`bakiye_${message.author.id}`, -kasafiyat)
      message.channel.send("Ordu Kuruluyor.").then(async msg => {
        const icindekiler = require(`.././kasa${kasaid}`)
        setTimeout(() => {
          msg.edit("Ordu hazırlanyor..");
        }, 1000);
        setTimeout(() => {
          msg.edit("Yolculuğa Çıkılıyor...");
        }, 2000);
        setTimeout(() => {
          msg.edit("Karargah Kuruluyor..");
        }, 3000);
        setTimeout(() => {
          msg.edit("Emirler Veriliyor.");
        }, 4000);
        setTimeout(() => {
          msg.edit("Saldırıldı!");
          msg.delete()
        }, 5000);
        setTimeout(() => {
          const icindeki = icindekiler[Math.floor(Math.random() * icindekiler.length)];
          message.channel.send(`Ganimet olarak \`${icindeki}\` ${client.ekoayarlar.parabirimi} kazandın!`)
          db.add(`bakiye_${message.author.id}`, icindeki)
        }, 7800)
      })
      //const activity = activitys[Math.floor(Math.random() * activitys.length)];
      } catch(e) {
        message.channel.send(':warning: Bir hata var!')
      }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fy'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'fetih-yap',
    description: 'Asreaper',
    usage: 'Asreaper'
}