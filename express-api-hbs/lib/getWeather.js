const request = require('request');
const {promisify} = require('util'); // required part of the util module - the full thing is quite big, and we don't want all of it.

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&APPID=${process.env.APPID}`,
        json: true
    })

    return data.body
}

const thisWillSayHi = () => {
    console.log("hi");
}

module.exports = {getWeather, thisWillSayHi};

// APPID="c8c3ba96b9701732d4139697f681d8e7" nodemon