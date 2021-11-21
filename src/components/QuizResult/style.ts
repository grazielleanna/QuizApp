import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 24px;

  height: 100%;
  padding: 4rem 1.5rem 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
    text-align: center;
`;

export const Main = styled.main`
  margin-top: 2rem;

  > h2{
    color: var(--text-title);
    font-size: 2.7rem;
    text-align: center;
  }

  > p{
    font-size: 1.1rem;
    color: var(--text-title);
    margin-top: .8rem;

    > span{
      color: var(--green);
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 209px;
  height: 62px;
  border-radius: 12px;
  border: solid 2px var(--text-title);
  background: transparent;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-title);
  transition: all .2s;

  &:hover{
    border-color: ${darken(0.1, '#1D355D')};
    color: ${darken(0.1, '#1D355D')};;
  }
`;
