import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 16px;

  padding-bottom: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  width: 80vw;

  a {
    font-weight: bold;

    @media screen and (min-width: 780px) {
      color: black;
    }
  }
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.2);
  font-size: 64px;
  font-family: alfarn, sans-serif;
  position: absolute;
  top: 1%;

  z-index: -20;
`;

export const Image = styled.img`
  width: 27vw;
  max-width: 200px;
  height: 15vh;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 10%;

  @media screen and (min-width: 780px) {
    height: 200px;
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 80%;

  a {
    font-size: 16px;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
`;

export const LinkTree = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  overflow-x: hidden;
`;
