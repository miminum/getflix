import React, { Component, Fragment } from 'react';
import './App.css';
import Slider from './components/Slider'
import { searchContent } from './api/query'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {

  state = {
    decodedToken: null, // Restore the previous signed in data
    accountProfiles: [],
    banner: null,
    search: null,
    recentlyWatched: [
      { 
        Title: 'Inception',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        link: 'http://inceptionmovie.warnerbros.com/'
      },
      { 
        Title: 'Grand Budapest Hotel',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg',
        link: 'http://www.grandbudapesthotel.com/'
      },
      { 
        Title: 'Moonrise Kingdom',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwMTc3NDkzOTJeQTJeQWpwZ15BbWU3MDI4NTAwNzc@._V1_SX300.jpg',
        link: 'http://www.moonrisekingdom.com/'
      },
      { 
        Title: 'The Lego Movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg',
        link: 'http://thelegomovie.warnerbros.com/'
      },


    ],
    hoveredContent: null,
    genres: [],
  }


  load () {
    const { genres } = this.state
    const movies = ['Red Dead Redemption', 'The Sound of Music', 'Freddy got fingered', 'ShawShank Redemption', 'Juno' ]
    
    const promises = movies.map((movie) => {
      return searchContent(movie)
        .then((movies) => {
          return movies
        })
    })

    Promise.all(promises)
      .then((results) => {
        this.setState({ genres: results })
        console.log(this.state.genres)
    })

  }

  componentDidMount() {
    this.load();
  }

  render() {
    const { recentlyWatched, genres } = this.state

    return (
      <Router>
        <div className="App">
          <h1>Netflix</h1>
          <Route
            path="/all"
            exact
            render={() => (
              <Fragment>
              <Slider 
                content ={ recentlyWatched }
                genre={ "Recently watched" }
              />

              <Slider 
                content ={ genres }
                genre={ "Comedy" }
              />
              </Fragment>
            )}
          />
          
        </div>
      </Router>
    );
  }
}

export default App;
