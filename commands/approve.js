var Discord = require('discord.js');

module.exports = {
    name: 'approve',
    permission: 2,
    main: async function (bot, msg) {
        const yup = bot.emojis.cache.find(emoji => emoji.name == "yup").toString();
        var log = msg.guild.channels.cache.get(bot.config.logChannel);
        const registree = msg.mentions.members.first();
        
        //party member id: 783419251259736101

        if (registree != null) {
            var logEmbed = new Discord.MessageEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL())
                .addField('Party member approved:', yup + ` **${registree} (${registree.id}) has been registered!**`)
                .setFooter('The Democratic National Committee', bot.user.avatarURL())
                .setTimestamp()
                .setColor(3447003);

            await registree.roles.add('783419251259736101');
            await msg.channel.send({
                embed: logEmbed
            })
            await log.send({
                embed: logEmbed
            })
        } else {
            msg.reply("mention the registree! Usage: `d!approve [@user]`");
        }

        msg.delete();
    }
}