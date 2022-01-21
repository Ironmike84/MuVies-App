import React from 'react';

export class MovieView extends React.Component {

render() {
    const { movie, onBackClick } = this.props;

    return (
        <div>
        <div class="movieTitle"><h3>{movie.Title}</h3></div>
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
        </div>
        <div className="movie-actors">
            <div className="ActorsTitle">Actors: </div><br></br>
            <span className="label">Star Actor: </span>
            <span className="value">{movie.StarActor}</span><br></br>
            <span className="label">Supporting Actor: </span>
            <span className="value">{movie.SupportingActor}</span><br></br>
            <span className="label">Cast: </span>
            <span className="value">{movie.Cast}</span><br></br>
        </div>
        <div className="movie-director">
            <span className="label">Director: </span>
            <span className="value">{movie.Director}</span><br></br>
        </div>
        <div className="movie-release">
            <span className="label">Release: </span>
            <span className="value">{movie.Release}</span><br></br>
        </div>
        <div className="movie-rating">
            <span className="label">Rating: </span>
            <span className="value">{movie.Rating}</span><br></br>
        </div>
        <div className="movie-genre">
            <span className="label">Genre: </span>
            <span className="value">{movie.Genre}</span><br></br>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>

        </div>
        </div>
    );
    }
}