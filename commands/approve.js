var Discord = require('discord.js');

module.exports = {
    name: 'approve',
    permission: 2,
    main: async function (bot, msg) {
        const yup = bot.emojis.cache.find(emoji => emoji.name == "yup").toString();
        var log = msg.guild.channels.cache.get(bot.config.logChannel);
        const target = msg.mentions.members.first();
        
        //party member id: 783419251259736101

        if (target != null) {
            var logEmbed = new Discord.MessageEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL())
                .addField('Party member approved:', yup + ` **${registree.username}#${registree.discriminator} (${registree.id}) has been registered!**`)
                .addField('Roblox Username:', registreeUsername)
                .addField('Affiliated with another party?', partyCheck)
                .setFooter('The Democratic National Committee', bot.user.avatarURL())
                .setTimestamp()
                .setColor(3447003);

            await target.roles.add('783419251259736101');
            await msg.channel.send({
                embed: logEmbed
            })
            await log.send({
                embed: logEmbed
            })
        } else {
            msg.reply("mention the target! Usage: `d!approve [@user]`");
        }

        msg.delete();
    }
}