import React, { Component } from 'react';
import './App.css';
import MoviesForm from './moviesForm';

class App extends Component {

  //state básico
  state = {
    movies: [
      {
        name: "batman",
        year: 1995,
        director: "batman director"
      },
      {
        name: "el nombre de la rosa",
        year: 1986,
        director: "jean jacques annaud"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <MoviesForm name={this.state.movies[0].name} year={this.state.movies[0].year} director={this.state.movies[0].director}></MoviesForm>
        <MoviesForm name={this.state.movies[1].name} year={this.state.movies[1].year} director={this.state.movies[1].director}></MoviesForm>
      </div>
    );
  }
}

export default App;
