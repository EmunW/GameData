const steamKey = process.env.STEAM_KEY;
const axios = require('axios');

module.exports.getImages = async(req, res) => {
    const ret = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamKey}&steamids=76561198229001836`);
    const player = ret.data.response.players[0];
    console.log(player.avatar)
    res.render('steamGames/collection', {player})
}