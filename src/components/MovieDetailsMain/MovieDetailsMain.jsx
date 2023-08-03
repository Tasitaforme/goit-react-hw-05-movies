import React from 'react';
import PropTypes from 'prop-types';
import posterPlaceholder from '../../images/poster-not-available-horizontal.jpg';
import { MoreInfoBtn, MovieDetailsAbout, MovieDetailsInfo, MovieDetailsInfoLi, MovieDetailsInfoUl, MovieDetailsWrapper, MovieImg } from './MovieDetailsMain.styled';
import { Link} from 'react-router-dom';

const MovieDetailsMain = ({
  movie: {
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  },
}) => {
    const allGenres = genres.map(({ name }) => name).join(', ');
    const style = { minWidth: '37%', fontWeight: 'bold'  };
  return (
    <>
      <MovieDetailsWrapper>
        <MovieImg
          loading="lazy"
          width="850"
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : posterPlaceholder
          }
          alt={original_title}
        />
        <MovieDetailsInfo>
          <h1>
            {original_title}({release_date.slice(0, 4)})
          </h1>
          <MovieDetailsInfoUl>
            <MovieDetailsInfoLi>
              <p style={style}>Release date</p>
              <p>{release_date}</p>
            </MovieDetailsInfoLi>
            <MovieDetailsInfoLi>
              <p style={style}>Vote / Votes</p>
              <p>
                {vote_average.toFixed(1)}/{vote_count}
              </p>
            </MovieDetailsInfoLi>
            <MovieDetailsInfoLi>
              <p style={style}>Popularity</p>
              <p>{popularity}</p>
            </MovieDetailsInfoLi>
            <MovieDetailsInfoLi>
              <p style={style}>Genres</p>
              <p>{allGenres}</p>
            </MovieDetailsInfoLi>
          </MovieDetailsInfoUl>
        </MovieDetailsInfo>
      </MovieDetailsWrapper>
      <MovieDetailsAbout>About</MovieDetailsAbout>
      <p>{overview}</p>
      <Link to="cast">
        <MoreInfoBtn type="button">Cast</MoreInfoBtn>
      </Link>
      <Link to="reviews">
        <MoreInfoBtn type="reviews">Reviews</MoreInfoBtn>
      </Link>
    </>
  );
};

MovieDetailsMain.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetailsMain;
