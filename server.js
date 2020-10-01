const express = require('express');

const server = express();
const environment = process.env.NODE_ENV;

server.get('/', (req, res) => {
  res.status(200).json({
     message: "Heroku app deployed ...",
    environment: environment
});
});

//custom middleware



module.exports = server;
