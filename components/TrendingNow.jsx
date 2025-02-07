import { Component } from "react";

class TrendingNow extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    console.log("FETCH");
    fetch("http://www.omdbapi.com/?apikey=65f4a0b3&s=avengers")
      .then((response) => {
        console.log("Response", response);
        return response.json();
      })
      .then((data) => {
        console.log("Dati JSON ok", data);
        this.setState({ movies: data.Search });
        console.log("Films", this.state.movies);
      })
      .catch((error) => {
        console.log("Errore durante il fetch dei dati", error);
      });
  }

  render() {
    console.log("Elenco film", this.state.movies);
    return (
      <div className="bg-dark">
        <h4 className="ms-4 text-light">Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies
            .filter((_, index) => index < 6)
            .map((movie) => (
              <div key={movie.imdbID} className="col mb-2 text-center px-1">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default TrendingNow;
