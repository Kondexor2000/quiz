import React, {useState} from 'react';

export default function Sieci()
{
    const questions = [
        {
            questionText: 'Którą komendą sprawdzamy, czy działa połączenie?',
            answerOptions: [
                { answerText: 'ifconfig', isCorrect: false },
                { answerText: 'ipconfig', isCorrect: false },
                { answerText: 'netstat', isCorrect: false },
                { answerText: 'ping', isCorrect: true },
            ],
        },
        {
            questionText: 'Którą komendą sprawdzamy konfigurację sieciową systemu Windows',
            answerOptions: [
                { answerText: 'ping', isCorrect: false },
                { answerText: 'netstat', isCorrect: false },
                { answerText: 'ipconfig', isCorrect: true },
                { answerText: 'ifconfig', isCorrect: false },
            ],
        },
        {
            questionText: 'Którą komendą sprawdzamy konfigurację sieciową systemu Linux?',
            answerOptions: [
                { answerText: 'ifconfig', isCorrect: true },
                { answerText: 'ping', isCorrect: false },
                { answerText: 'netstat', isCorrect: false },
                { answerText: 'routing', isCorrect: false },
            ],
        },
        {
            questionText: 'Która struktura sieciowa obejmuje cały świat?',
            answerOptions: [
                { answerText: 'Ethernet', isCorrect: false },
                { answerText: 'MAN', isCorrect: false },
                { answerText: 'LAN', isCorrect: false },
                { answerText: 'WAN', isCorrect: true },
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