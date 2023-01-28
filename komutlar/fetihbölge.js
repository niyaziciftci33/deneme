const Discord = require('discord.js');
const db = require('all.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir bölge numara'sı girmelisin!`)
  .setFooter(`Fethedilecek bölgeler listesine bakmak için: ${client.ekoayarlar.botunuzunprefixi}fetih-bilgi`)
  .setColor(client.ekoayarlar.renk)
  if(!kasaid) return message.channel.send(kasaidembeds)
  if(kasaid > kasasayisi) return message.channel.send(kasaidembeds)
  if(isNaN(kasaid)) return message.channel.send(kasaidembeds)
  
  const kasalarfilter = kasalar.filter(x => x.kasaid == kasaid).map(x => `Fethedilecek bölge ismi: **${x.isim}** Ordu maaliyeti: **${x.fiyat}** Belirtilen bölge açıklaması: **${x.açıklama}**`).join('\n ')
  const icindekiler = require(`.././kasa${kasaid}`)
  const kasalariçindekilerfilter = icindekiler.map(x => x).join(' ')
  const embed = new Discord.MessageEmbed()
  .addField(`Bölge Bilgisi (İD: ${kasaid})`, `${kasalarfilter}`)
  .addField(`Bölgeler;`, `${kasalariçindekilerfilter}`)
  .setFooter(`Fethedilecek bölgeler listesine bakmak için: ${client.ekoayarlar.botunuzunprefixi}fetih-bilgi`)
  .setColor(client.ekoayarlar.renk)
  message.channel.send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'fb', 'fetihb'],
    permLevel: 0
}

exports.help = {
    name: 'fetih-bölge',
    description: 'Asreaper',
    usage: 'Asreaper'
}