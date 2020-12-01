module.exports = {
    name: 'rules',
    permission: 1,
    main: function (bot, msg) {
      msg.channel.send({
        embed:
        {
          color: 3447003,
          author: {
            name: "Server Rules",
            icon_url: msg.guild.iconURL(),
            footer: "The Democratice National Committee"
          },
          fields: [
            {
              name: "1. Be respectful.",
              value: "Maintain a positive attitude, respect boundaries, and don't be excessively abrasive. In that same regard, speech considered hateful or otherwise unhealthy for the server's atmosphere is heavily subjective; consequently, speech that you find appropriate may not always be appreciated by your peers. With this in mind, please be conscious of how your words might affect those around you."
            },
            {
              name: "2. Use the appropriate text channels.",
              value: "Do not post anything nsfw, stick the appropriate content in their respective channels, confine bot usage to #bot-console, and use the designated text channels when participating in voice calls."
            },
            {
              name: "3. Do not spread disinformation.",
              value: "The deliberate dissemination of disinformation can result in immediate removal from the server. Under this rule, dissemination of disinformation includes, but is not limited to, any conduct with intent to convey false or misleading information as fact under circumstances where such information may reasonably be believed."
            }
          ]
        }
      });
    }
  }