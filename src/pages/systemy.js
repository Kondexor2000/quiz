import React, {useState} from 'react';

export default function Systemy()
{
    const questions = [
        {
            questionText: 'Jak się nazywa system operacyjny dla informatyków?',
            answerOptions: [
                { answerText: 'Windows', isCorrect: false },
                { answerText: 'Linux', isCorrect: true },
                { answerText: 'Android', isCorrect: false },
                { answerText: 'iOS', isCorrect: false },
            ],
        },
        {
            questionText: 'Którą komendą wyświetlamy listę plików w katalogu na linuxie?',
            answerOptions: [
                { answerText: 'ls', isCorrect: true },
                { answerText: 'dir', isCorrect: false },
                { answerText: 'mkdir', isCorrect: false },
                { answerText: 'rmdir', isCorrect: false },
            ],
        },
        {
            questionText: 'Którą komendą wyświetlamy listę plików w katalogu na Windowsie?',
            answerOptions: [
                { answerText: 'rmdir', isCorrect: false },
                { answerText: 'mkdir', isCorrect: false },
                { answerText: 'dir', isCorrect: true },
                { answerText: 'cd', isCorrect: false },
            ],
        },
        {
            questionText: 'Którą komendą wchodzimy do podkatalogu w terminalu?',
            answerOptions: [
                { answerText: 'ping', isCorrect: false },
                { answerText: 'ls', isCorrect: false },
                { answerText: 'dir', isCorrect: false },
                { answerText: 'cd', isCorrect: true },
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
    };

    

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