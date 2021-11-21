import winnersImg from '../../assets/winners.svg';
import { useQuiz } from '../../hooks/useQuiz';
import { Container, Header, Main, Footer, Button } from './style';

export const QuizResult = () => {
    const { score, updateEndQuiz, updateScore } = useQuiz();

    const handleTryAgain = () => {
        updateEndQuiz(false);
        updateScore(true)
    }

    return(
        <Container>
            <Header>
                <img src={winnersImg} alt="Image Winner" />
            </Header>
            <Main>
                <h2>Results</h2>
                <p>You got <span>{score}</span> correct answers</p>
            </Main>
            <Footer>
                <Button onClick={handleTryAgain}>
                    Try again
                </Button>
            </Footer>
        </Container>
    )
}