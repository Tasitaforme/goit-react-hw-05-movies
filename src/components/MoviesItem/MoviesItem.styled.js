import styled from 'styled-components';

export const MovieCardBackdrop = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
`;

export const MovieCardInfo = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  padding: 0 12px 12px 12px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    padding: 0 20px 20px 20px;
  }
`;

export const MovieCardTitle = styled.h3`
  text-transform: uppercase;
  color: white;
`;
export const MovieCardSubInfo = styled.div`
  color: #b7b7b7;
`;