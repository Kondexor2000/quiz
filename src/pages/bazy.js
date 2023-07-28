import React, {useState} from 'react';

export default function Bazy()
{
    const questions = [
        {
            questionText: 'Jak się nazywa język zapytań',
            answerOptions: [
                { answerText: 'C++', isCorrect: false },
                { answerText: 'C', isCorrect: false },
                { answerText: 'SQL', isCorrect: true },
                { answerText: 'Python', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak się nazywa język programowania, na którym programuje się skrypty do bazy danych?',
            answerOptions: [
                { answerText: 'C++', isCorrect: false },
                { answerText: 'C', isCorrect: false },
                { answerText: 'Java', isCorrect: false },
                { answerText: 'Python', isCorrect: true },
            ],
        },
        {
            questionText: 'Jak się nazywa serwer bazy danych dla PHP?',
            answerOptions: [
                { answerText: 'MySql', isCorrect: true },
                { answerText: 'MS-SQL', isCorrect: false },
                { answerText: 'MongoDB', isCorrect: false },
                { answerText: 'Nic z powyższych', isCorrect: false },
            ],
        },
        {
            questionText: 'Jak wyświetlać tablicę blog?',
            answerOptions: [
                { answerText: 'INSERT INTO blog VALUES', isCorrect: false },
                { answerText: 'SELECT blog FROM', isCorrect: false },
                { answerText: 'INSERT INTO * VALUES blog', isCorrect: false },
                { answerText: 'SELECT * FROM blog', isCorrect: true },
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