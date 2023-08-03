import styled from 'styled-components';

export const BackBtn = styled.button`
  --color: #05060b;
  font-family: inherit;
  display: inline-block;
  padding: 4px 40px;
  margin: 16px 16px 16px 0;
  
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 4px;
  font-weight: 500;
  color: var(--color);

&:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

&:hover {
 color: #fff;
}

&:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

&:hover:before {
 top: -30px;
 left: -30px;
}

&:active:before {
 background: #05060b;
 transition: b
}
`;

