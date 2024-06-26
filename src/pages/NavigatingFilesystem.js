import React, { useState } from 'react';

const questions = [
  {
    questionText: 'Which command lists the contents of a directory in Linux?',
    answerOptions: [
      { answerText: 'ls', isCorrect: true },
      { answerText: 'dir', isCorrect: false },
      { answerText: 'list', isCorrect: false },
      { answerText: 'show', isCorrect: false },
    ],
  },
  {
    questionText: 'How do you change directories in the command line?',
    answerOptions: [
      { answerText: 'cd', isCorrect: true },
      { answerText: 'change', isCorrect: false },
      { answerText: 'dir', isCorrect: false },
      { answerText: 'switch', isCorrect: false },
    ],
  },
  // Add more questions as needed
];

const NavigatingFilesystem = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavigatingFilesystem;
