import axios from 'axios';

//1-й варіант
// const URL = 'https://api.themoviedb.org/3/';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBlNWVlMzg4NjBjODM2MGM5NzllMjcwMzBlOTEwNiIsInN1YiI6IjY0YzMwZmM2YWY2ZTk0MDBjNjg0ZDJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4aZ4QrtisU-50J178r_289eyGBWk4KxXLPlYlrsrLgI',
//   },
// };

// export const getTrends = async (dayOrWeek = 'day', currentPage = 1) => {
//   const urlTrends = `${URL}trending/all/${dayOrWeek}`;
//   const paramsTrends = {
//     ...options,
//     params: { include_adult: 'false', language: 'uk-UA', page: currentPage },
//   };
//   const { data } = await axios(urlTrends, paramsTrends);
//   return data;
// };

//2-й варіант
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = `b3307679881e8848f82a601d10e94220`;

export const fetchTrendsDay = async () => {
  const { data } = await axios(`trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const fetchTrendsWeek = async () => {
  const { data } = await axios(`trending/all/week?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesQuery = async query => {
  const { data } = await axios(
    `search/movie?api_key=${API_KEY}&include_adult=false&query=${query}`
  );
  return data;
};

// export const fetchMoviesQuery = async (query, page = 1) => {
//   const url = `https://api.themoviedb.org/3/search/movie/`;
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBlNWVlMzg4NjBjODM2MGM5NzllMjcwMzBlOTEwNiIsInN1YiI6IjY0YzMwZmM2YWY2ZTk0MDBjNjg0ZDJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4aZ4QrtisU-50J178r_289eyGBWk4KxXLPlYlrsrLgI',
//     },
//     params: { include_adult: 'false', query: query, page: page },
    
//   };
//   const { data } = await axios(url, options);
//   return data;
// };


// export const fetchMoviesQuery = async (query, page=1) => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBlNWVlMzg4NjBjODM2MGM5NzllMjcwMzBlOTEwNiIsInN1YiI6IjY0YzMwZmM2YWY2ZTk0MDBjNjg0ZDJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4aZ4QrtisU-50J178r_289eyGBWk4KxXLPlYlrsrLgI',
//     },
//   };
//   const { data } = await axios(`search/movie/?query=${query}&include_adult=false&page=${page}`, options);
//   return data;
// };

// export const fetchMoviesQuery = async query => {
//   const response = await axios.get(
//     `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
//   );
//   return response.data.results;
// };

//* /trending/get-trending
//* список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
//  https://developer.themoviedb.org/reference/trending-all

// url = 'https://api.themoviedb.org/3/trending/all/day';
// day
// week

//* /search/search-movies
//* пошук фільму за ключовим словом на сторінці фільмів.
// https://developer.themoviedb.org/reference/search-movie

//* /movies/get-movie-details
//* запит повної інформації про фільм для сторінки кінофільму.
// https://developer.themoviedb.org/reference/movie-details

//* /movies/get-movie-credits
//* запит інформації про акторський склад для сторінки кінофільму.
// https://developer.themoviedb.org/reference/movie-credits

//* /movies/get-movie-reviews
//* запит оглядів для сторінки кінофільму.
// https://developer.themoviedb.org/reference/movie-reviews
