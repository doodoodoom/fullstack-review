import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO: perform POST request
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      data: {username: term},
      contentType: 'application/json',
      success: function() {
        console.log('WE DID IT!');
      },
      error: function() {
        console.log('WE ARE FUBBERNUCKED!');
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));