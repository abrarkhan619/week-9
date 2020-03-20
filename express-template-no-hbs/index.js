const express = require('express'); // npm i express - this allows me to use express server in my project
const app = express(); //initialised express to use its features

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
