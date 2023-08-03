import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrendsWeek, fetchMoviesQuery } from 'api/requests';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

import { Container } from 'components/Container/Container.styled';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search') ?? '';

  const responseWeeklyTrends = useCallback(async () => {
    setLoading(true);
    try {
      const { results } = await fetchTrendsWeek();
      setMovies(results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [setMovies]);

  const responseMoviesQuery = useCallback(
    async query => {
      setLoading(true);
      try {
        const { results } = await fetchMoviesQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }, [setMovies]);

  // очищення рядку запиту
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  //працюватиме на onChange
  useEffect(() => {
    searchValue && responseMoviesQuery(searchValue);
  }, [searchValue, responseMoviesQuery]);

  useEffect(() => {
    if (searchValue || searchValue !== '') return;
    responseWeeklyTrends();
  }, [searchValue, responseWeeklyTrends]);

  return (
    <Container>
      <SearchMovieForm
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        responseMoviesQuery={responseMoviesQuery}
      />
      {!loading && !searchValue && (
        <MoviesList movies={movies} title="Weekly trends" />
      )}
      {searchValue && (
        <MoviesList
          movies={movies}
          title={`Movies by your search "${searchValue}"`}
        />
      )}
      {!loading && searchValue && movies?.length === 0 && (
        <h3 style={{ color: 'red', marginTop: '28px', }} >
          {' '}
          {`Sorry... There are no movies by your search "${searchValue}"`}{' '}
        </h3>
      )}
      {loading && <Loader />}
    </Container>
  );
};

export default Movies;