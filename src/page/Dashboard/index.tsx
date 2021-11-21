import { QuizQuestions } from "../../components/QuizQuestions";
import { QuizResult } from "../../components/QuizResult";
import { useQuiz } from "../../hooks/useQuiz";
import { Container, QuizContainer } from "./style";

export const Dashboard = () => {
  const { endQuiz } = useQuiz();

  return (
    <Container>
      <QuizContainer>
        <h1>Technology quiz</h1>
        {!endQuiz ? <QuizQuestions /> : <QuizResult />}
      </QuizContainer>
    </Container>
  );
};
