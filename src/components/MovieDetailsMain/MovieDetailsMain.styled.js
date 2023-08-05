import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 16px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 16px;
  }
  
`;
export const MovieDetailsInfo = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 35%;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: calc(100% - 35% - 16px);
    max-width: 850px;
  }
`;

export const MovieDetailsInfoUl = styled.ul`
font-size: 16px;
margin-top: 16px;
`;

export const MovieDetailsInfoLi = styled.li`
  align-items: baseline;
  gap: 40px;
  margin-bottom: 12px;
  display: flex;
  
`;

export const MovieDetailsAbout = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const MoreInfoBtn = styled.button`
  position: relative;
  display: inline-block;
  margin: 16px 8px 16px 0;
  padding: 12px 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #05060b;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #05060b;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 #05060b;

  a.active &,
  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #05060b;
  }
  &:active {
    transform: scale(0.9);
  }
  @media screen and (min-width: 768px) {
    margin: 16px 16px 16px 0;
  }
`;