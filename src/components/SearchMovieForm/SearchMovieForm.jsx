import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchFormInput } from './SearchMovieForm.styled';

const SearchMovieForm = ({
  setSearchParams,
  searchValue,
  responseMoviesQuery,
  // firstRender,
}) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value.trim().toLowerCase() });
    // firstRender.current = false;
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   responseMoviesQuery(searchValue);
  // };

  return (
    // <SearchForm role="search" onSubmit={handleSubmit}>
    <SearchForm role="search">
      <SearchFormInput
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      {/* <SearchFormButton type="submit">
        <SearchIcon />
      </SearchFormButton> */}
    </SearchForm>
  );
};

SearchMovieForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  responseMoviesQuery: PropTypes.func.isRequired,
};

export default SearchMovieForm;
