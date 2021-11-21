import { createContext, ReactNode, useContext, useState } from "react";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface QuizContextData {
    score: number;
    endQuiz: Boolean;
    updateScore: (reset: boolean) => void;
    updateEndQuiz: (value: boolean) => void;
}

const QuizContext = createContext({} as QuizContextData);

export function QuizContextProvider({ children }: TransactionsProviderProps){
    const [score, setScore] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);

    const updateScore = (reset: boolean) => {
        if(reset){
            setScore(0);
        }else{
            setScore(score + 1);
        }
    }

    const updateEndQuiz = (value: boolean) => {
        setEndQuiz(value);
    }

    return(
        <QuizContext.Provider value={{ score, endQuiz, updateEndQuiz, updateScore }}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz(){
    const context = useContext(QuizContext);

    return context;
}