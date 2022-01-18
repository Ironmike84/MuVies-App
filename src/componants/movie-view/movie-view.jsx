import React from 'react';

export class MovieView extends React.Component {

render() {
    const { movie, onBackClick } = this.props;

    return (
        <div>
        <div class="movieTitle"><h3>{movie.Title}</h3></div>
        <hr></hr>
        <div className="movie-view">
        <div className="movie-poster">
            <img class="poster" src={movie.ImagePath} />
        </div>
        <div className="movie-title">
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          
        </div>
        <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span><br></br>
            <span className="genre">Genre: {movie.Genre}</span><br></br>
            <span className="rating">Rating: {movie.Rating}</span><br></br>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>

        </div>
        </div>
    );
    }
}