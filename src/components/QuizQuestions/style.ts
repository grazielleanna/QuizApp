import styled from "styled-components";

export const QuizContent = styled.div`
  background: var(--white);
  border-radius: 24px;
  height: 100%;
  padding: 4rem 1.5rem 1rem 1.5rem;

  position: relative;

  > img {
    position: absolute;
    right: 0;
    top: -4.8rem;

    @media (max-width: 767px){
      width: 42%;
      top: -3.5rem;
    }
  }
`;

export const Question = styled.div`
  height: 100%;
  > p{
    text-align: right;
    color: var(--text-body);
    margin-bottom: .7rem;
  }

  > h3 {
    font-size: 1.3rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Answer = styled.button`
  background-color: transparent;
  padding: 0.4rem 1rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--text-body);

  border: solid 2px var(--text-body);
  border-radius: 12px;
  text-align: left;

  transition: all .3s;

  > div{
    width: 100%;
    max-width: 100%;
    word-break: break-word;
    display: flex;
    align-items: center;

    span{
      margin-right: 2rem;
    }
  }

  & + button{
    margin-top: 1rem;
  }

  &:hover{
    background: var(--yellow);
    border-color: var(--yellow);
    color: var(--white);
  }

  &.correct{
    background: var(--green);
    color: var(--white);
    border-color: var(--white);
  }

  &.incorrect{
    background: var(--red);
    color: var(--white);
    border-color: var(--white);
  }
`;

export const Button = styled.button`
  background: var(--yellow);
  color: var(--white);

  height: 46px;
  border-radius: 12px;
  border: none;
  
  min-width: 116px;

  font-size: 1.1rem;
  font-weight: 700;

  margin-top: 2rem !important;
  margin-left: auto;
`;