const express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send({
    message: "Hello github.com"
  });
})
app.listen(4000);
