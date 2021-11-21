import { QuizContextProvider } from "./hooks/useQuiz";
import { Dashboard } from "./page/Dashboard";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <QuizContextProvider>
      <Dashboard />
      <GlobalStyle />
    </QuizContextProvider>
  );
}

export default App;
