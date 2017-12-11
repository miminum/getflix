import React, { Component } from 'react';
import './App.css';
import searchContent from './api/query'


class App extends Component {

  state = {
    decodedToken: null, // Restore the previous signed in data
    accountProfiles: [],
    banner: null,
    search: null,
    recentlyWatched: [],
    hoveredContent: null,
    genres: [],
  }


  render() {
    searchContent('Red+Dead')
      .then((res)=> {
        console.log(res)
      })
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
