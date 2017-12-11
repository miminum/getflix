import React, { Component } from 'react';
import './App.css';
import searchContent from './api/query'
import Banner from './components/Banner'


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
        <Banner 
          logo="https://s-media-cache-ak0.pinimg.com/originals/bf/98/83/bf988370410032591e440600e9dfbe70.jpg"
          description="Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
        />
      </div>
    );
  }
}

export default App;
