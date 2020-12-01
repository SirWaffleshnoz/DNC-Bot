var Discord = require('discord.js');

exports.run = async (bot, member) => {
    var channel = member.guild.channels.cache.get(bot.config.logChannel);
    var join = new Discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .setFooter(member.guild.name)
        .setTimestamp()
        .setTitle('Member joined!')
        .setColor(3447003);

    //adds american citizen rank
    const target = member.id
    await target.roles.add('783419251259736100');

    channel.send({
        embed: join
    })
}