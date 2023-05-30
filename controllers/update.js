const steamKey = process.env.STEAM_KEY;
const axios = require('axios');

module.exports.loadPage = async(req, res) => {
    const tf2Data = await axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=1`);
    const tf2 = tf2Data.data.appnews;
    const tf2Summary = tf2.newsitems[0];
    const tf2SplitContent = tf2Summary.contents.split("\n");
    let tf2Info = "";
    let tf2Image = "";

    for(let i=0; i<tf2SplitContent.length; i++){
        tf2SplitContent[i] = tf2SplitContent[i].replaceAll(/\[.+?]/g, "");
        if(tf2SplitContent[i].includes('{STEAM_CLAN_IMAGE}')){
            tf2Image = tf2SplitContent[i].replace('{STEAM_CLAN_IMAGE}', 'https://clan.cloudflare.steamstatic.com/images/');
            continue;
        }
        tf2Info = tf2Info + tf2SplitContent[i];
        if(tf2SplitContent[i] === ""){
            tf2Info = tf2Info + '\n';
        }
    }


    const mhrData = await axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1446780&count=1`);
    const mhr = mhrData.data.appnews;
    const mhrSummary = mhr.newsitems[0];
    const mhrSplitContent = mhrSummary.contents.split("\n");
    let mhrInfo = "";
    let mhrImage = "";

    for(let i=0; i<mhrSplitContent.length; i++){
        mhrSplitContent[i] = mhrSplitContent[i].replaceAll(/\[.+?]/g, "");
        if(mhrSplitContent[i].includes('{STEAM_CLAN_IMAGE}')){
            mhrImage = mhrSplitContent[i].replace('{STEAM_CLAN_IMAGE}', 'https://clan.cloudflare.steamstatic.com/images/');
            continue;
        }
        mhrInfo = mhrInfo + mhrSplitContent[i];
        if(mhrSplitContent[i] === ""){
            mhrInfo = mhrInfo + '\n';
        }
    }

    console.log(tf2SplitContent);
    console.log(tf2Info);
    res.render('updates/index', {tf2Summary, tf2Image, tf2Info, mhrSummary, mhrImage, mhrInfo})

    /*const tf2Data = await axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=1`);
    const tf2 = tf2Data.data.appnews;
    const tf2Summary = tf2.newsitems[0];
    let tf2Contents = tf2Summary.contents;
    tf2Contents = tf2Contents.replaceAll("{STEAM_CLAN_IMAGE}", "https://clan.cloudflare.steamstatic.com/images/");
    tf2Contents = tf2Contents.replaceAll("[", "<");
    tf2Contents = tf2Contents.replaceAll("]", ">");
    tf2Contents = tf2Contents.replaceAll("<img>", "<img src='");    
    tf2Contents = tf2Contents.replaceAll("</img>", "'>");
    console.log(tf2Contents);*/
}