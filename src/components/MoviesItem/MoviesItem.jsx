import React from 'react';
import PropTypes from 'prop-types';
import posterPlaceholder from '../../images/poster-not-available.jpg';
import {
  MovieCardBackdrop,
  MovieCardInfo,
  MovieCardSubInfo,
  MovieCardTitle,
} from './MoviesItem.styled';

const MoviesItem = ({
  movie: { title, name, poster_path, release_date, first_air_date },
}) => {
  const formatDate = date => {
    try {
      return date.slice(0, 4);
    } catch (error) {
      return 'No release date yet';
    }
  };
  //     const checkPoster = (poster) => {
  //       if (poster == null) {
  //           return `src={posterPlaceholder}`;
  //       } else {
  //       return  `srcSet="https://image.tmdb.org/t/p/w500/${poster_path}" 500w,
  //                    "https://image.tmdb.org/t/p/w300/${poster_path}" 342w,
  //                    "https://image.tmdb.org/t/p/w185/${poster_path}" 185w
  //          src="https://image.tmdb.org/t/p/w500/${poster_path}"
  //          sizes="(min-width: 768px) 500px, (min-width: 480px) 342px, (min-width: 320px) 185px, 100vw"`;
  //       }
  //   }

  return (
    <>
      <img
        loading="lazy"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : posterPlaceholder
        }
        //{(checkPoster(poster_path))}
        // src={posterPlaceholder}
        // src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="395"
        height="574"
      />

      <MovieCardBackdrop>
        <MovieCardInfo>
          <MovieCardTitle>{title || name}</MovieCardTitle>
          <MovieCardSubInfo>
            <p>{formatDate(release_date || first_air_date)}</p>
          </MovieCardSubInfo>
        </MovieCardInfo>
      </MovieCardBackdrop>
    </>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    first_air_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesItem;
