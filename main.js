const config = require("./config.json");

//                                                   AUTOROLE
client.on("guildMemberAdd", member => {
    client.channels.cache.get(`${config.join_discord_message}`).send(member.displayName + " join Discord ! 🥰 ");
    member.roles.add(`${config.autorole_roleID}`)
});
client.on("guildMemberRemove", member => {
    client.channels.cache.get(`${config.join_discord_message}`).send(member.displayName + " leave Discord ! 😭 ");
});
//AUTOROLE END
