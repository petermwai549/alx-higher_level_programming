#!/usr/bin/node
// A script that prints the title of a Star Wars movie where the episode num matches a given int

let request = require('request');
let argc = process.argv;
let url = 'https://swapi-api.hbtn.io/api/films/' + argc[2];
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
