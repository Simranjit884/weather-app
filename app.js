const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=cc2439c7641b8e63086d36854c9f767e&query=37.8267,-122.4233';

request({url: url, json: true}, (error, response) => {
// const data = JSON.parse(response.body);
// console.log(response.body.current);
console.log(`it is currently ${response.body.current.temperature} but it feels like ${response.body.current.feelslike}`)
});