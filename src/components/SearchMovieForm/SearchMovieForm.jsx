import React from 'react';
import PropTypes from 'prop-types';

const SearchMovieForm = ({ setSearchParams, searchValue, getSearchMovies }) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovies(searchValue);
  };
  
  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchMovieForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  getSearchMovies: PropTypes.string.isRequired,
};

export default SearchMovieForm;
