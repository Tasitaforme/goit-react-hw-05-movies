import styled from 'styled-components';

export const CastUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
  font-size: 14px;
  padding-bottom: 40px;
`;

export const CastLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  max-width: 150px;
  text-align: center;
`;