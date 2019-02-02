const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const save = require('../database/index.js')

// console.log(getReposByUsername);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username;
  getReposByUsername(username, function (err, response, body) {
    if (err) {
      console.log('OUR REPO GETTER FUNCTION BLEW UP!', err);
      return;
    };
    console.log('STATUS CODE', response && response.statusCode);
    console.log('RESULTS FROM getRepos-', JSON.parse(body));
    save(JSON.parse(body));
  })
  res.status(201).send(username);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('SUP');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

