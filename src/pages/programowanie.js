import React, {useState} from 'react';

export default function Programowanie()
{
    const questions = [
        {
            questionText: 'Jak się nazywa pierwszy język programowania?',
            answerOptions: [
                { answerText: 'C++', isCorrect: false },
                { answerText: 'C', isCorrect: true },
                { answerText: 'Java', isCorrect: false },
                { answerText: 'Python', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa język programowania, na którym programuje się aplikacje na Androida?',
            answerOptions: [
                { answerText: 'C++', isCorrect: false },
                { answerText: 'C', isCorrect: false },
                { answerText: 'Java', isCorrect: true },
                { answerText: 'Python', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa język programowania do grafiki komputerowej?',
            answerOptions: [
                { answerText: 'C++', isCorrect: true },
                { answerText: 'C', isCorrect: false },
                { answerText: 'Java', isCorrect: false },
                { answerText: 'Python', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa naukowy język programowania?',
            answerOptions: [
                { answerText: 'C++', isCorrect: false },
                { answerText: 'C', isCorrect: false },
                { answerText: 'Java', isCorrect: false },
                { answerText: 'Python', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(true);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(false);
        }
    }

    

    return (
        <div className="App">
            {showScore ? (

<>
<div className="question-section">
    <div className="question-count">
        <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
    </div>
    <div className="question-text">{questions[currentQuestion].questionText}</div>
</div>
<div className="answer-section">
    {
        questions[currentQuestion].answerOptions.map((answerOptions) => (
            <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
        ))
    }
</div>
</>
            ) : (

                <>
                <div className="score-section">You scored {score} out of {questions.length}</div>
                </>
            )}
        </div>
    )
}