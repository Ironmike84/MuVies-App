import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inception', Description: 'One of the Best Movies of the Decade!!', Genre: 'Drama', Rating: 'PG-13', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg'},
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'A Really Sad Story But A Good Movie.', Genre: 'Drama', Rating: 'R', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'},
                { _id: 3, Title: 'Gladiator', Description: 'Yet another Sad story But a really Good Movie!!!', Genre: 'Drama', Rating: 'R', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'}],
            selectedMovie: null
        };

}
setSelectedMovie(newSelectedMovie) {
    this.setState({
        selectedMovie: newSelectedMovie
    });
}
render() {
    const { movies, selectedMovie } = this.state;


    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }

}

export default MainView;