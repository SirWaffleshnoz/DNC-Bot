var Discord = require('discord.js');

module.exports = {
    name: "commit",
    permission: 1,
    main: async function(bot, msg) {
        const dnc = bot.emojis.cache.find(emoji => emoji.name == "dnc").toString();
        var log = msg.guild.channels.cache.get(bot.config.logChannel);
        const registree = msg.author;
        var registreeUsername = msg.content.split(' ').splice(0)[0];
        var partyCheck = msg.content.split(' ').splice(0)[1];

        if (registreeUsername == null || partyCheck == null) {
            msg.reply('uh oh, something went wrong! Remember that the proper usage is `d!commit [your Roblox username] [Y/N]`!')
        } else {
            var registration = new Discord.MessageEmbed()
                .setAuthor(registree.username, registree.avatarURL())
                .addField('Form submitted:', dnc + ` **${registree} (${registree.id}) submitted their registration application!**`)
                .addField('Roblox Username:', registreeUsername)
                .addField('Affiliated with another party?', partyCheck)
                .setFooter('The Democratic National Committee', bot.user.avatarURL())
                .setTimestamp()
                .setColor(3447003);

            await msg.channel.send({
                embed: registration
            })
            await log.send({
                embed: registration
            })
        }
    }
}