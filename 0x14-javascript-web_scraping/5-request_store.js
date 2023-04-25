#!/usr/bin/node
// A script that gets the contents of a webpage and stores it in a file

const fs_js = require('fs');
const request_js = require('request');
request_js(process.argv[2]).pipe(fs_js.createWriteStream(process.argv[3]));
