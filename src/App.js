import React, { Component } from 'react';
import './App.css';


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
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
