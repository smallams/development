const express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send({
    message: "Hello github.com"
  });
})

app.get('/about', (request, response) => {
  response.send("About Page");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
  console.log(`Listening to port ${PORT}`);
});
