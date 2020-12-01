module.exports = {
    name: "register",
    permission: 1,
    main: function(bot, msg) {
        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                name: "Welcome aboard!",
                //description: "Just follow these simple steps",
                icon_url: msg.guild.iconURL(),
                footer: "The Democratice National Committee"
                },
                fields: [
                    {
                        name: "We just need a few things from you:",
                        value: "In order to become a registered Democrat, we're going to have you fill out a quick and easy form right here and right now; all you need to do is tell us your Roblox username and indicate that you're not registered with another party."
                    },
                    {
                        name: "How to fill out our registration form:",
                        value: "To confirm your registration, type in the command `d!commit [username] [Y/N]`. The first field should be **your Roblox username**, and the second field should indicate **if you are registered with another party**. Type `Y` to indicate that you are, or type `N` to indicate that you are not."
                    },
                    {
                        name: "One last thing:",
                        value: "Being registered with another party doesn't mean you'll be rejected from joining our ranks, nor do you need citizenship to join us! Happy registration!"
                    }
                ]
            }
        });
    }
}