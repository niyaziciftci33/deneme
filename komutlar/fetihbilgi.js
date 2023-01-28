const Discord = require('discord.js');
const db = require('all.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  
  const kasalarfilter = kasalar.filter(x => x.kasaid).map(x => `Fethedilecek bölge ismi: **${x.isim}** Ordu maaliyeti: **${x.fiyat}** İD: **${x.kasaid}**`).join('\n ')
  const embed = new Discord.MessageEmbed()
  .addField(`Fethedilecek bölge listesi ${client.ekoayarlar.botismi}`, `${kasalarfilter}`)
  .setFooter(`Fethedilecek bir bölge hakkında bilgi almak için: ${client.ekoayarlar.botunuzunprefixi}fetih-bilgi <bölgeno>`)
  .setColor(client.ekoayarlar.renk)
  message.channel.send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'fetih-bilgi',
    description: 'Anqriel',
    usage: 'fetih-bilgi'
}