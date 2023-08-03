import styled from 'styled-components';

export const ReviewUl = styled.ul`
  padding-bottom: 40px;
`;

export const ReviewItem = styled.li`
  display: flex;
  gap: 16px;
  padding:16px;
  border-radius: 4px;
  
  &:nth-child(even) {
    background-color: aliceblue;
  }
`;

export const ReviewUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReviewUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;