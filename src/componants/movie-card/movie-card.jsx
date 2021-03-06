import React from 'react';
import './.movie-card.scss';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    StarActor: PropTypes.string.isRequired,
    SupportingActor: PropTypes.string.isRequired,
    Cast: PropTypes.string.isRequired,
    Release: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,

  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};