const express = require('express'); // npm i express - this allows me to use express server in my project
const request = require('request'); // this will be replaced with fetch later on.

// function inits
const app = express(); //initialised express to use its features

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&APPID=${process.env.APPID}`,
        json: true
    }, (err, res) => {
        if (err) throw (err);
        console.log(res.body);
    })
}

getWeather()

// four http methods: GET, POST, PUT & DELETE - you may see CRUD for other stacks which stands for CREADE, READ, UPDATE, DELETE

// get is a function inside of express - for more info, look at express mpdule on NPMJS
app.get('/', (req, res) => { // each GET method should have a req and res. req = request, res = response, - standard naming convention
    res.sendFile(__dirname + '/index.html') // sendFile is for express only, no templating engine used.
    // For each file you want to load, you need a GET.
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

app.listen(3000, () => { // creates a connection on a specified port - localhost: 3000 - response I should get whn I run is 'cannot GET/
    console.log('Listening on port 3000');
})
