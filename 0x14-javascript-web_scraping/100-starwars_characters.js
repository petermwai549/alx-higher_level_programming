#!/usr/bin/node

let request = require('request');
let id = process.argv[2];
let url = 'https://swapi-api.hbtn.io/api/films/';
request.get(url + id, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  let data_body = JSON.parse(body);
  const data_body_character = data_body.characters;
  for (const i of data_body_character) {
    request.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const data_body_2 = JSON.parse(body1);
      console.log(data_body_2.name);
    });
  }
});
