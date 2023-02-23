import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  max-width: 500px;
  height: 7vh;

  text-align: center;
  font-weight: bolder;
  text-decoration: none;
  flex-shrink: 0;

  border-radius: 4px;

  background: rgba( 0, 0, 0, 0.5 );
  backdrop-filter: blur( 11.5px );
  -webkit-backdrop-filter: blur( 11.5px );

  color: white;

  position: relative;

  img {
    position: absolute;
    left: 4px;
    height: 90%;
    width: 14%;
    aspect-ratio: 1/1;
    border-radius: 2px;
  }
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
  }
`;
