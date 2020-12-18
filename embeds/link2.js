var Discord = require('discord.js')

module.exports = {
    name: 'link2',
    permission: 3,
    main: function (bot, msg) {
        msg.channel.send("https://discord.gg/Sua6HuVKpV")
    }
};