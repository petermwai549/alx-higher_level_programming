#!/usr/bin/node
// A script that reads and prints the content of a file

let file = process.argv[2];
let fs = require('fs');

fs.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
