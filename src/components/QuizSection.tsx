import React, { useState } from 'react';
import { useUserStore } from '../store/userStore';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which continent has the most countries?",
    options: ["Asia", "Europe", "Africa", "North America"],
    correctAnswer: "Africa",
    points: 10
  },
  {
    id: 2,
    question: "What is the largest country by land area?",
    options: ["China", "USA", "Canada", "Russia"],
    correctAnswer: "Russia",
    points: 10
  },
  {
    id: 3,
    question: "Which country has the most time zones?",
    options: ["Russia", "USA", "France", "China"],
    correctAnswer: "France",
    points: 15
  }
];

const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const addPoints = useUserStore((state) => state.addPoints);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      addPoints(questions[currentQuestion].points);
    }

    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 2000);
  };

  const question = questions[currentQuestion];

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Geography Quiz</h2>
      
      <div className="mb-6">
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{question.question}</p>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              className={`w-full p-3 text-left rounded-lg transition-colors duration-200 ${
                showResult
                  ? option === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : option === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {showResult && (
        <div className={`text-center p-3 rounded-lg ${
          selectedAnswer === question.correctAnswer
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {selectedAnswer === question.correctAnswer
            ? `Correct! You earned ${question.points} points!`
            : `Incorrect. The correct answer is ${question.correctAnswer}`}
        </div>
      )}
    </div>
  );
};

export default QuizSection;