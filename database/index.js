const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  html_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var repo = 0; repo < repos.length; repo ++) {
    var obj = {
      id: repos[repo].id,
      username: repos[repo].owner.login,
      html_url: repos[repo].html_url,
      forks_count: repos[repo].forks_count
    };
    Repo.create(obj, function(err) {
      if (err) {
        console.log('COULD NOT SAVE DATA!!', err);
        return;
      }
    });
  }

}

module.exports = save;