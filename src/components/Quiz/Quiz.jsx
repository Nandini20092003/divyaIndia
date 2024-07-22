import React, { useState, useEffect, useCallback } from "react";
import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "Which monument is located in Agra, India?",
      answers: ["Qutub Minar", "Red Fort", "Taj Mahal", "Lotus Temple"],
      correct: "Taj Mahal",
    },
    {
      question: "Which monument was built by Emperor Akbar?",
      answers: [
        "Fatehpur Sikri",
        "Hawa Mahal",
        "Gateway of India",
        "Amer Fort",
      ],
      correct: "Fatehpur Sikri",
    },
    {
      question:
        "Which monument is known for its intricate carvings and erotic sculptures?",
      answers: [
        "Khajuraho Temples",
        "Charminar",
        "Meenakshi Temple",
        "Temple Konark",
      ],
      correct: "Khajuraho Temples",
    },
    {
      question: "Which monument is the largest fort in India?",
      answers: ["Gwalior Fort", "Jaipur Fort", "Agra Fort", "Golconda Fort"],
      correct: "Agra Fort",
    },
    {
      question:
        "Which monument is known for its massive rock-cut architecture?",
      answers: [
        "Elephanta Caves",
        "Ellora Caves",
        "Ajanta Caves",
        "Kanheri Caves",
      ],
      correct: "Ellora Caves",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const step = useCallback(() => {
    setCurrentQuestion((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      } else {
        setIsQuizFinished(true);
        return prev;
      }
    });
  }, [questions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          step();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [step]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore((prev) => prev + 20);
    } else {
      setScore((prev) => prev - 20);
    }
    setCountdown(10);
    step();
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCountdown(10);
    setIsQuizFinished(false);
  };

  return (
    <div className="qa_box">
      <div className="qa_header">
        <span>
          Score: <span id="score">{score}</span>
        </span>
        <div className="timer_restart">
          {isQuizFinished ? (
            <button className="btn2 restart_btn" onClick={handleRestart}>
              Restart
            </button>
          ) : (
            <>
              <span id="countdown">{countdown}</span>
              <button className="btn2 restart_btn" onClick={handleRestart}>
                Restart
              </button>
            </>
          )}
        </div>
      </div>
      <div className="qa_body">
        {isQuizFinished ? (
          <div className="qa_set">
            <h4>
              Your Total Score: <span id="totalScore">{score}</span> out of 100
            </h4>
            <div className="qa_footer">
              <button className="btn2" onClick={handleRestart}>
                Restart Quiz
              </button>
              <button
                className="btn1"
                onClick={() => (window.location.href = "/home")}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="qa_set active">
            <h4>{questions[currentQuestion].question}</h4>
            {questions[currentQuestion].answers.map((answer, index) => (
              <div key={index} className="qa_ans_row">
                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  onClick={() => handleAnswer(answer)}
                />
                <span>{answer}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {!isQuizFinished && (
        <div className="qa_footer">
          <span className="btn1" onClick={step}>
            Skip
          </span>
          <button
            className="btn2"
            onClick={() => (window.location.href = "/home")}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
