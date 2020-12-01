module.exports = {
    name: 'registration-info',
    permission: 2,
    main: function (bot, msg) {
      msg.channel.send({
        embed:
        {
          color: 3447003,
          author: {
            name: "Registration Information",
            description: "Registering with the Democratic Party offers unique benefits such as access to party-specific announcements and information. It also allows you to connect with other Democrats, vote in our primaries, and even run for office on the Democratic platform! But most importantly, **anyone can join!**",
            icon_url: msg.guild.iconURL(),
            footer: "The Democratice National Committee"
          },
          fields: [
            {
              name: "How to Register:",
              value: "Head on over to #registration and type in the command `d!register` and follow the directions given; yes, it's that easy to become a registered Democrat!"
            }
          ]
        }
      });
    }
  }