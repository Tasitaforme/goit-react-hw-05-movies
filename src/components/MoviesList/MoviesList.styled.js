import styled from 'styled-components';

export const MoviesListTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 28px;
`;

export const MoviesListUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
  align-content: center;
  margin-top: 28px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    row-gap: 28px;
    column-gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    row-gap: 32px;
    column-gap: 16px;
  }
`;

export const MoviesListLi = styled.li`
  width: 280px;
  height: 406px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 224px;
    height: 325px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 574px;
  }
`;
