import React from 'react'
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import SharedLayout from 'components/SharedLayout/SharedLayout'

// import Home from 'pages/Home/Home'
// import Movies from 'pages/Movies/Movies'
// import Error from 'pages/Error/Error'
// import MovieDetails from 'pages/MovieDetails/MovieDetails'
// import Cast from 'components/Cast/Cast'
// import Reviews from 'components/Reviews/Reviews'

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Error = lazy(() => import('pages/Error/Error'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App