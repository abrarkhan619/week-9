const express = require('express'); // npm i express - this allows me to use express server in my project
const request = require('request'); // this will be replaced with fetch later on.
const path = require('path'); // npm i path
const hbs = require('express-handlebars'); // npm i express-handlebars

// function inits
const app = express(); //initialised express to use its features

// path is about to be set // linking directory to public folder
app.use(express.static(path.join(__dirname, 'public')))
const getWeather = require('./lib/getWeather')



app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


// getWeather()

// four http methods: GET, POST, PUT & DELETE - you may see CRUD for other stacks which stands for CREADE, READ, UPDATE, DELETE

// get is a function inside of express - for more info, look at express mpdule on NPMJS
app.get('/', async (req, res) => { // each GET method should have a req and res. req = request, res = response, - standard naming convention
    let data = await getWeather.getWeather();
    console.log(data);
    res.render('index');
    // res.sendFile(__dirname + '/index.html') // sendFile is for express only, no templating engine used.
    // For each file you want to load, you need a GET.
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(3000, () => { // creates a connection on a specified port - localhost: 3000 - response I should get whn I run is 'cannot GET/
    console.log('Listening on port 3000');
})
