import styled from 'styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  color: #05060b;
  margin: 16px 16px 16px 0;
  padding: 12px 12px;
  height: 48px;
  background: transparent;

  transition: all ease-out 0.5s;
  border: 2px solid #05060b;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 #05060b;

  outline: none;
  padding-left: 8px;
  padding-right: 4px;
  line-height: 1.5;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #05060b;
  }
  &:active {
    transform: scale(0.9);
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &::-webkit-search-cancel-button {
    /* https://stackoverflow.com/questions/20804016/editing-input-type-search-pseudo-element-button-x */
    margin-right: 16px;
    -webkit-appearance: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        #fff 45%,
        #fff 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0%,
        transparent 43%,
        #fff 45%,
        #fff 55%,
        transparent 57%,
        transparent 100%
      );
  }
`;

export const SearchFormButton = styled.button`
  position: relative;
  display: inline-block;
  height: 48px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #05060b;
  background: transparent;
  cursor: pointer;
  transition: all ease-out 0.5s;
  border: 2px solid #05060b;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 #05060b;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #05060b;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const SearchIcon = styled(BsSearchHeart)`
  width: 60px;
  height: 28px;
  color: inherit;
  background-color: inherit;
  margin: 0;
  padding: 0;
`;