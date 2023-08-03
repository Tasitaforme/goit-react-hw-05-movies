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
  console.log(searchValue);

  const responseWeeklyTrends = useCallback(async () => {
    setLoading(true);
    try {
      const { results } = await fetchTrendsWeek();
      setMovies(results);
      console.log(results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [setMovies]);

  const responseMoviesQuery = async query => {
      setLoading(true);
      try {
        const { results } = await fetchMoviesQuery(query);
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(searchValue);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

  // очищення рядку запиту
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  //працюватиме на onChange
  useEffect(() => {
    searchValue && responseMoviesQuery(searchValue);
  }, [searchValue]);

  useEffect(() => {
    // if (searchValue || searchValue !== '') return;
    !movies && !searchValue && responseWeeklyTrends();
  }, [searchValue]);

  return (
    <Container>
      <SearchMovieForm
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        getSearchMovies={responseMoviesQuery}
      />
      {!loading && <MoviesList movies={movies} title="Weekly trends" />}
      {loading && <Loader />}
    </Container>
  );
};

Movies.propTypes = {};




// const responseWeeklyTrends = useCallback(async () => {
//   setLoading(true);
//   try {
//     const { results } = await fetchTrendsWeek();
//     setMovies(results);
//     console.log(results);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     setLoading(false);
//   }
// }, [setMovies]);

// const responseMoviesQuery = async query => {
//   setLoading(true);
//   try {
//     const { results } = await fetchMoviesQuery(query);
//     setMovies(results);
//     console.log(results);
//   } catch (error) {
//     console.log(searchValue);
//     console.log(error.message);
//   } finally {
//     setLoading(false);
//   }
// };

// // очищення рядку запиту
// useEffect(() => {
//   !searchValue && setSearchParams({});
// }, [searchValue, setSearchParams]);

// //працюватиме на onChange
// useEffect(() => {
//   searchValue && responseMoviesQuery(searchValue);
// }, [searchValue]);

// useEffect(() => {
//   // if (searchValue || searchValue !== '') return;
//   !movies && !searchValue && responseWeeklyTrends();
// }, [searchValue]);
