#!/usr/bin/node
// A script that writes a string to a file

let fs = require('fs');
let file = process.argv[2];
let write_ = process.argv[3];

fs.writeFile(file, write_, 'utf8', function (error) {
  if (error) {
    console.log(error);
  }
});
