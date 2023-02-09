const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/build'));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(4000, () => {
  console.log('React app listening on port 4000!');
});
