const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const axios = require('axios');
require('dotenv').config() // Require the dotenv package (Takes the variables defined in the .env file and adds them to process.env)
const steamKey = process.env.STEAM_KEY;

const dbUrl = 'mongodb://localhost:27017/game-data' // Development database

/*mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
})
.catch(err => {
    console.log("error")
    console.log(err)
})*/

const ejsMate = require('ejs-mate'); // Needed for boilerplate to work
app.engine('ejs', ejsMate);

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const steamGamesRoutes = require('./routes/featured');
app.use('/featured', steamGamesRoutes);
const playersRoutes = require('./routes/updates');
app.use('/updates', playersRoutes);

app.get('/', async (req, res) => {
    /*
    const ret = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamKey}&steamids=76561198229001836`);
    const player = ret.data.response.players[0];
    console.log(player.timecreated)
    res.render('home', {player});
    */
    res.render('home');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
