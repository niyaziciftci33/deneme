const Discord = require('discord.js');
const request = require('node-superfetch');
const Database = require("all.db")
const db = new Database({ dataPath: "database.json"})

exports.run = async (client, msg, args) => {
  const yasak = client.emojis.cache.get('801155304205189151');
      let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların parası bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
        let sira = '';
        var str = ''
        const sorted = msg.guild.members.cache.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`bakiye_${a.user.id}}`) - db.fetch(`bakiye_${a.user.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.cache.size)
        const mappedName = top10.filter(o => !o.bot).map(s => s.user.id);
        const mappedLevel = top10.filter(o => !o.bot).map(s => db.fetch(`bakiye_${s.user.id}`) || 0)
        const emoji = client.emojis.cache.get('1047307622694518804');

        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < 10; i++) {
            var lvl = mappedLevel[i]
      
            if(msg.author.id === mappedID[i]) {
                str += `**${i + 1}** ${emoji} ${lvl} - <@${mappedName[i]}>\n`
            }

            if(msg.author.id !== mappedID[i]) {
                str += `**${i + 1}** ${emoji} ${lvl} - <@${mappedName[i]}>\n`
            }
        }

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
        let wEmbed = new Discord.MessageEmbed()
        .setTitle(`Dijitalaile - Ekonomi`)
        .setColor('RANDOM')
        .setDescription(`${str}`)
        msg.channel.send(wEmbed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıralama", "lider", "lidertablosu"],
  permLevel: 0,
    kategori: "lvl"
};

exports.help = {
  name: 'sıralama',
  description: 'Seviye sisteminin sunucudaki liderlik tablosunu gĂ¶sterir.',
  usage: 'sıralama'
};
