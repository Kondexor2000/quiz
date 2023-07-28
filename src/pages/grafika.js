import React, {useState} from 'react';

export default function Grafika()
{
    const questions = [
        {
            questionText: 'Jak się nazywa format pliku obejmującego rysunek bez tła?',
            answerOptions: [
                { answerText: 'MP4', isCorrect: false },
                { answerText: 'GIF', isCorrect: false },
                { answerText: 'PNG', isCorrect: true },
                { answerText: 'JPG', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa format pliku obejmującego rysunek i tło?',
            answerOptions: [
                { answerText: 'SVG', isCorrect: false },
                { answerText: 'JPG', isCorrect: true },
                { answerText: 'GIF', isCorrect: false },
                { answerText: 'PNG', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa język hipertekstowy dla stron internetowych?',
            answerOptions: [
                { answerText: 'HTML', isCorrect: true },
                { answerText: 'CSS', isCorrect: false },
                { answerText: 'JavaScript', isCorrect: false },
                { answerText: 'SVG', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa język arkuszy stylów dla stron internetowych?',
            answerOptions: [
                { answerText: 'JavaScript', isCorrect: false },
                { answerText: 'SVG', isCorrect: false },
                { answerText: 'HTML', isCorrect: false },
                { answerText: 'CSS', isCorrect: true },
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