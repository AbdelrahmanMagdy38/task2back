const request = require('request');

const weather = (latitude, longitude, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=c02a328322fc40738e6170031252402&q=" + latitude + "," + longitude 
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined,response.body.location.name + ". It is currently " +  response.body.current.temp_c + " degrees out. It feels like " + response.body.current.condition.text + ".");
        }
    })
}

module.exports = weather
        

// "http://api.weatherapi.com/v1/current.json?key=c02a328322fc40738e6170031252402&q=London&aqi=no"