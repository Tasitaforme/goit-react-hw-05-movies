import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchFormButton, SearchFormInput, SearchIcon } from './SearchMovieForm.styled';

const SearchMovieForm = ({
  setSearchParams,
  searchValue,
  responseMoviesQuery,
}) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value.trim().toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    responseMoviesQuery(searchValue);
  };

  return (
    <SearchForm role="search" onSubmit={handleSubmit}>
      <SearchFormInput
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <SearchFormButton type="submit">
        <SearchIcon />
      </SearchFormButton>
    </SearchForm>
  );
};

SearchMovieForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  responseMoviesQuery: PropTypes.func.isRequired,
};

export default SearchMovieForm;
