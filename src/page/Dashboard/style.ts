import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  background-image: url("${backgroundImg}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    background-position: 62% 50%;
  }
`;

export const QuizContainer = styled.main`
  max-width: 29rem;
  width: 100%;
  max-height: 100%;

  h1 {
    text-transform: uppercase;
    color: var(--white);
    line-height: 54px;
    font-size: 2rem;
    margin-bottom: 0.4rem;

    @media (max-width: 767px) {
      margin-bottom: 2.2rem;
    }
  }

  @media (max-width: 1024px) {
    max-width: 38rem;
  }

  @media (max-width: 767px) {
    max-width: 24rem;
  }

  @media (max-width: 320px) {
    max-width: 21rem;
  }
`;
