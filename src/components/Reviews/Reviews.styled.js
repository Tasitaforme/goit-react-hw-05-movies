import styled from 'styled-components';

export const ReviewUl = styled.ul`
  padding-bottom: 40px;
`;

export const ReviewItem = styled.li`
  
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid #05060b;

  &:nth-child(odd) {
    /* background-color: #05060b; 
    color: white;*/
    background-color: #05060b0d;
  }
  &:nth-child(even) {
    margin: 8px 0;
  }

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ReviewUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ReviewUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  word-break: break-word;
`;
