#!/usr/bin/node
// A script that computes the number of tasks completed by user id.

let args = process.argv;
let req-URL = args[2];
let request = require('request');
request(req-URL, function (error, response, body) {
  if (error) {
    console.log('error:', error);
  } else {
    let todos = JSON.parse(body);
    let dash = {};
    for (let i = 0; i < todos.length; i++) {
      let status = (todos[i]['completed']);
      let key = todos[i]['userId'].toString();
      if (status) {
        if (dash[key]) {
          dash[key]++;
        } else {
          dash[key] = 1;
        }
      }
    }
    console.log(dash);
  }
});
