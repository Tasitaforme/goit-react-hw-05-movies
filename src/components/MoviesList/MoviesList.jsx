import React from 'react';

import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { MoviesListLi, MoviesListTitle, MoviesListUl } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies, title}) => {
  const location = useLocation();

  return (
    <>
      {title && <MoviesListTitle>{title}</MoviesListTitle>}

      <MoviesListUl>
        {movies?.map(movie => (
          <MoviesListLi key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviesItem movie={movie} />{' '}
            </Link>
          </MoviesListLi>
        ))}
      </MoviesListUl>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
  title: PropTypes.string.isRequired,
};

export default MoviesList;
