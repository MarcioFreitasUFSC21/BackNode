'use strict'

const http = require('http');
const debug = require('debug')('baknode:server');
const express = require('express');


const app = express();
const port = 3000;
app.set('port', port);

console.log ("testing...");