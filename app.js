const weather = require('./functions/weather.js');
const geocode = require('./functions/location.js');

const country = process.argv[2];

geocode(country, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    weather(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)                                   
    }) 
})