import QuestionTimer from "./QuestionTimer.jsx"
import Answers from './Answers.jsx';

export default function Question(QuestionText, answers, onSelectAnswer){
    return(
        <div id="question">
            <QuestionTimer 
            key={activeQuestionIndex}
            timeout={10000} 
            onTimeout={handleSkipAnswer}
            />

            <h2>{QuestionText} </h2>
            
            <Answers 
            key={activeQuestionIndex}
            answers={answers}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            answerState={answerState}
            onSelect = {handleSelectAnswer}
            />
        </div>
    )
}