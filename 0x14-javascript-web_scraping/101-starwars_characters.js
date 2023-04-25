#!/usr/bin/node
let request = require('request');
let process_2 = process.argv[2];
let url = 'https://swapi-api.hbtn.io/api/films/' + process_2;
request(url, function (error, response, body) {
  if (!error) {
    let characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  }
});

function printCharacters (characters, index) {
  request(characters[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}
