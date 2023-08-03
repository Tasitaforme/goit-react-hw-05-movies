import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoreInfoBtn } from 'components/MovieDetailsMain/MovieDetailsMain.styled';
import { Container } from 'components/Container/Container.styled';

const Header = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">
          <MoreInfoBtn>Home</MoreInfoBtn>
        </NavLink>
        <NavLink to="/movies">
          <MoreInfoBtn>Movies</MoreInfoBtn>
        </NavLink>
      </nav>
    </Container>
  );
}

export default Header