module.exports = {
    name: 'party-info',
    permission: 2,
    main: function (bot, msg) {
        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: "The Democratic Party",
                },
                description: "The Democratic Party is one of the two major contemporary political parties in the United States. Our policies aim to further civil liberty and social equality while supporting a mixed economy. We value diversity and inclusivity; more importantly, we believe that together we truly are stronger.",
                thumbnail: {
                    url: 'https://i.imgur.com/iOEJqBL.png'
                }
            }
        });

        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: "Our Values",
                },
                fields: [
                    {
                        name: "Building a Stronger, Fairer Economy",
                        value: "America bills itself as the land of opportunity, but intergenerational mobility has plummeted in recent generations. We seek to restore the mobility that the social ladder once had in our great nation by raising wages and promoting workers' rights."
                    },
                    {
                        name: "Strengthening our Democracy",
                        value: "Democrats are committed to the sacred principle of “one person, one vote”—and we will fight to achieve that principle for every citizen, regardless of race, income, disability status, geography, or English language proficiency. We stand for the proposition that all Americans are entitled to the inalienable right to vote."
                    },
                    {
                        name: "Criminal Justice",
                        value: "Democrats believe that our criminal justice system needs to be completely overhauled from top to bottom, which is why we will fight to repeal federal mandatory minimums, incentivize states to do the same, and make all sentencing reductions retroactive so judges can reconsider past cases where their hands were tied."
                    },
                    {
                        name: "Creating a Better Immigration System",
                        value: "The bedrock of America's soul is rooted in diversity, and we strongly believe that immigrants are an indispensable part in ensuring America's continued prospering. We will work tirelessly to ensure immigrants are granted access to a fair, efficient, and stress-free immigration process, regardless of where they came from."
                    },
                    {
                        name: "Renewing American Leadership",
                        value: "Democrats believe that we can only be strong in the world when we are strong and united at home. We believe that a healthy democracy, just society, and inclusive economy are essential prerequisites for effective American leadership abroad. And we believe that the ultimate measure —and purpose—of our foreign policy is whether it protects and advances America’s security, prosperity and values—and delivers results for all Americans."
                    }
                ],
                image: {
                    url: 'https://i.imgur.com/iluT8eC.png',
                }
            }
        });
    }
}