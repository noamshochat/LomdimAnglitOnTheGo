import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes } from 'canvas-confetti';
import hasHaveExercisesData from '../data/hasHaveExercises.json';

const Container = styled.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`;

const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const Instructions = styled.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const ConjugationTable = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const TableTitle = styled.h3`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ecf0f1;
  
  &:last-child {
    border-bottom: none;
  }
`;

const EnglishText = styled.span`
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HebrewText = styled.span`
  color: #7f8c8d;
  font-size: 0.9rem;
  text-align: right;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ExerciseContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const ExerciseTitle = styled.h3`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SentenceContainer = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3498db;
`;

const SentenceText = styled.div`
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OptionButton = styled.button<{ isSelected: boolean; isCorrect: boolean; showAnswer: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => {
    if (props.showAnswer) {
      if (props.isCorrect) return '#27ae60';
      if (props.isSelected && !props.isCorrect) return '#e74c3c';
      return '#bdc3c7';
    }
    return props.isSelected ? '#3498db' : '#bdc3c7';
  }};
  border-radius: 8px;
  background: ${props => {
    if (props.showAnswer) {
      if (props.isCorrect) return '#d5f4e6';
      if (props.isSelected && !props.isCorrect) return '#fadbd8';
      return '#f8f9fa';
    }
    return props.isSelected ? '#e3f2fd' : 'white';
  }};
  color: ${props => {
    if (props.showAnswer) {
      if (props.isCorrect) return '#27ae60';
      if (props.isSelected && !props.isCorrect) return '#e74c3c';
      return '#7f8c8d';
    }
    return props.isSelected ? '#3498db' : '#2c3e50';
  }};
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.showAnswer ? 'default' : 'pointer'};
  transition: all 0.3s ease;
  min-width: 80px;
  
  &:hover {
    transform: ${props => props.showAnswer ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.showAnswer ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const Feedback = styled.div<{ isCorrect: boolean }>`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.isCorrect ? '#27ae60' : '#e74c3c'};
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem auto 0;
  display: block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CompleteContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
`;

const ScoreText = styled.div`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const RestartButton = styled.button`
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.4);
  }
`;

const ProgressContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProgressText = styled.div`
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 500;
`;

const HasHaveTab: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef<CreateTypes>();

  const onInit = ({ confetti }: { confetti: CreateTypes }) => {
    confettiRef.current = confetti;
  };

  const currentQuestion = hasHaveExercisesData[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (!showAnswer) {
      setSelectedAnswer(answer);
      setShowAnswer(true);
      if (answer === currentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 1);
        // Auto-advance after 1 second for correct answers
        setTimeout(() => {
          handleNextQuestion();
        }, 1000);
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    if (currentQuestionIndex === hasHaveExercisesData.length - 1) {
      setIsQuizComplete(true);
      // Trigger confetti when quiz is complete
      setShowConfetti(true);
      if (confettiRef.current) {
        confettiRef.current({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setIsQuizComplete(false);
    setShowConfetti(false);
  };

  // Conjugation table data
  const conjugationData = [
    { english: "I have", hebrew: "יש לי" },
    { english: "you have", hebrew: "יש לך, יש לכם, יש לכן" },
    { english: "we have", hebrew: "יש לנו" },
    { english: "they have", hebrew: "יש להם, יש להן" },
    { english: "he has", hebrew: "יש לו" },
    { english: "she has", hebrew: "יש לה" },
    { english: "it has", hebrew: "יש לחפץ או לבעל חיים" }
  ];

  if (isQuizComplete) {
    return (
      <Container>
        {showConfetti && (
          <ReactCanvasConfetti onInit={onInit} />
        )}
        <Title>🎉 Have/Has Challenge Complete!</Title>
        <CompleteContainer>
          <ScoreText>
            You got {score} out of {hasHaveExercisesData.length} correct!
          </ScoreText>
          <RestartButton onClick={handleRestartQuiz}>
            🔄 Take Challenge Again
          </RestartButton>
        </CompleteContainer>
      </Container>
    );
  }

  return (
    <Container>
      {showConfetti && (
        <ReactCanvasConfetti onInit={onInit} />
      )}
      <Title>🔤 Have/Has Challenge</Title>
      <Instructions>
        Complete the following sentences with "have" or "has".<br />
        Remember: "has" is used with he, she, it (singular). "have" is used with I, you, we, they (plural).
      </Instructions>

      <ConjugationTable>
        <TableTitle>שייכות - Have/Has (Possession)</TableTitle>
        <TableGrid>
          {conjugationData.map((item, index) => (
            <TableRow key={index}>
              <EnglishText>{item.english}</EnglishText>
              <HebrewText>{item.hebrew}</HebrewText>
            </TableRow>
          ))}
        </TableGrid>
      </ConjugationTable>

      <ProgressContainer>
        <ProgressText>
          Question {currentQuestionIndex + 1} of {hasHaveExercisesData.length}
        </ProgressText>
      </ProgressContainer>

      <ExerciseContainer>
        <ExerciseTitle>השלימו את המשפטים הבאים עם has have</ExerciseTitle>
        <SentenceContainer>
          <SentenceText>
            {currentQuestion.sentence}
          </SentenceText>
          <OptionsContainer>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              return (
                <OptionButton
                  key={index}
                  isSelected={isSelected}
                  isCorrect={isCorrect}
                  showAnswer={showAnswer}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </OptionButton>
              );
            })}
          </OptionsContainer>
          {showAnswer && (
            <Feedback isCorrect={selectedAnswer === currentQuestion.correctAnswer}>
              {selectedAnswer === currentQuestion.correctAnswer 
                ? '✅ Correct! Well done!' 
                : `❌ Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`
              }
            </Feedback>
          )}
          {showAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
            <NextButton onClick={handleNextQuestion}>
              {currentQuestionIndex === hasHaveExercisesData.length - 1 ? 'Finish Challenge' : 'Next Question'}
            </NextButton>
          )}
        </SentenceContainer>
      </ExerciseContainer>
    </Container>
  );
};

export default HasHaveTab;
