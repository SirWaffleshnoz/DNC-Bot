module.exports = {
    name: "commit",
    permission: 1,
    main: function(bot, msg) {
        const dnc = bot.emojis.cache.find(emoji => emoji.name == "dnc").toString();
        var log = msg.guild.channels.cache.get(bot.config.logChannel);
        const registree = msg.author;
        var registreeUsername = msg.content.split(' ').splice(0)[0];
        var partyCheck = msg.content.split(' ').splice(0)[1];

        var registration = new Discord.MessageEmbed()
            .setAuthor(registree.username, registree.avatarURL())
            .addField('Form submitted:', dnc + ` **${registree.username}#${registree.discriminator} (${registree.id}) submitted their registration application!**`)
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