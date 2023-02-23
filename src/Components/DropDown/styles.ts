import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 500px;
  height: fit-content;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  text-align: center;
  font-weight: bolder;
  text-decoration: none;

  padding: 16px 8px;
  border-radius: 4px;

  background: rgb( 0, 0, 0 );

  color: white;

  position: relative;

  transition: all .3s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    border-bottom: 1px solid #fff;
  }

  p {
    font-size: 12px;
  }

  img {
    position: absolute;
    left: 4px;
    height: 90%;
    width: 14%;
    aspect-ratio: 1/1;
    border-radius: 2px;
  }

  iframe {
    width: 100%;
    max-width: 100%;
    height: 200px;
  }

  button {
    border-radius: 8px;
    border: 0;
    background-color: #1F2D3D;
    color: #fff;
    font-weight: bolder;
    padding: 8px 8px;
    width: 100%;
  }
`;
