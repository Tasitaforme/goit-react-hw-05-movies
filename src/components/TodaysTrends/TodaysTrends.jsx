import React from 'react';

import { fetchTrendsDay } from 'api/requests';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container.styled';

const TodaysTrends = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const responseDailyTrends = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendsDay();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    responseDailyTrends();
  }, []);

  return (
    <Container>
      {!loading && <MoviesList movies={movies} title="Today's trends" />}
      {loading && <Loader />}
    </Container>
  );
};


export default TodaysTrends;
