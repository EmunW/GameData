const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


const dbUrl = 'mongodb://localhost:27017/game-data' // Development database

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
})
.catch(err => {
    console.log("error")
    console.log(err)
})


app.get('/', (req, res) => {
    res.send("TESTING TESTING 1 2 3 HELLO")
})

app.all('*', (req, res, next) => { // Runs only if nothing above this request ran
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Something went wrong!';
    res.status(statusCode).render('error', {err});
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})