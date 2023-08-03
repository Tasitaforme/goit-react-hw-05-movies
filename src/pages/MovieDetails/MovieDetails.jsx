import React from 'react';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'api/requests';
import { Container } from 'components/Container/Container.styled';
import MovieDetailsMain from 'components/MovieDetailsMain/MovieDetailsMain';
import { BackBtn } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const responseMovieDetails = async () => {
      setLoading(true);
      try {
          const data = await fetchMovieDetails(movieId);
          console.log(data);
          setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    responseMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <Link to={location.state?.from ?? '/'}>
        <BackBtn type="button">Go back</BackBtn>
      </Link>
      {loading && <Loader />}
      {movie && !loading && <MovieDetailsMain movie={movie} />}

      
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
