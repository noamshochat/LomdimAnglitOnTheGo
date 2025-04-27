import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes } from 'canvas-confetti';
import words from '../data/words.json';

const ExamContainer = styled.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ExamTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const QuestionContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const QuestionText = styled.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const VoiceButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const OptionButton = styled.button<{ $isSelected: boolean; $isCorrect?: boolean; $showAnswer: boolean }>`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border: 2px solid ${props => {
    if (!props.$showAnswer) return '#e0e0e0';
    if (props.$isCorrect) return '#4CAF50';
    if (props.$isSelected && !props.$isCorrect) return '#f44336';
    return '#e0e0e0';
  }};
  border-radius: 8px;
  background-color: ${props => {
    if (!props.$showAnswer) return 'white';
    if (props.$isCorrect) return '#E8F5E9';
    if (props.$isSelected && !props.$isCorrect) return '#FFEBEE';
    return 'white';
  }};
  color: #2c3e50;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${props => !props.$showAnswer ? '#f5f5f5' : 'inherit'};
  }
`;

const Feedback = styled.div<{ $isCorrect: boolean }>`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${props => props.$isCorrect ? '#E8F5E9' : '#FFEBEE'};
  color: ${props => props.$isCorrect ? '#2E7D32' : '#C62828'};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 0.7rem;
    padding: 0.7rem;
    font-size: 0.8rem;
  }
`;

const NextButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
`;

const ScoreContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ScoreTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ScorePercentage = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const RestartButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const ProgressContainer = styled.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.8rem 0 1.2rem;
  }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    height: 6px;
  }
`;

const ProgressFill = styled.div<{ $progress: number }>`
  width: ${props => props.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CelebrationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  margin-top: 2rem;
`;

const ModalTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ModalText = styled.p`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ModalButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`;

const ExamTab: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const confettiRef = useRef<CreateTypes>();

  const celebrationPatterns = [
    // Firework 1 - Classic Red and Gold
    {
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
      startVelocity: 55,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      colors: ['#ff0000', '#ffd700', '#ff4500']
    },
    // Firework 2 - Blue and Silver
    {
      particleCount: 250,
      spread: 60,
      origin: { y: 0.6 },
      startVelocity: 60,
      decay: 0.92,
      gravity: 1.1,
      drift: 0.1,
      ticks: 200,
      colors: ['#0000ff', '#87ceeb', '#ffffff']
    },
    // Firework 3 - Rainbow Burst
    {
      particleCount: 300,
      spread: 90,
      origin: { y: 0.6 },
      startVelocity: 65,
      decay: 0.91,
      gravity: 1.2,
      drift: 0.2,
      ticks: 200,
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
    },
    // Firework 4 - Purple and Pink
    {
      particleCount: 180,
      spread: 80,
      origin: { y: 0.6 },
      startVelocity: 50,
      decay: 0.93,
      gravity: 0.9,
      drift: 0.15,
      ticks: 200,
      colors: ['#800080', '#ff69b4', '#ff1493']
    },
    // Firework 5 - Green and Gold
    {
      particleCount: 220,
      spread: 75,
      origin: { y: 0.6 },
      startVelocity: 58,
      decay: 0.89,
      gravity: 1.05,
      drift: 0.1,
      ticks: 200,
      colors: ['#008000', '#ffd700', '#90ee90']
    }
  ];

  const perfectScorePatterns = [
    // Golden Fireworks
    {
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 },
      startVelocity: 65,
      decay: 0.92,
      gravity: 1.1,
      drift: 0.1,
      ticks: 200,
      colors: ['#FFD700', '#FFA500', '#FFE5B4']
    },
    // Rainbow Burst
    {
      particleCount: 400,
      spread: 90,
      origin: { y: 0.6 },
      startVelocity: 70,
      decay: 0.91,
      gravity: 1.2,
      drift: 0.2,
      ticks: 200,
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
    },
    // Star Burst
    {
      particleCount: 350,
      spread: 80,
      origin: { y: 0.6 },
      startVelocity: 60,
      decay: 0.93,
      gravity: 1.05,
      drift: 0.15,
      ticks: 200,
      colors: ['#FFFFFF', '#FFD700', '#FFA500']
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create questions from all words
  const allQuestions = React.useMemo(() => {
    // First, create all questions with their correct answers
    const questions = words.categories.flatMap(category => 
      category.wordPairs.map(pair => ({
        question: `What is the Hebrew translation for "${pair.english}"?`,
        correctAnswer: pair.hebrew,
        englishWord: pair.english
      }))
    );

    // Shuffle the questions and take only 30
    const shuffledQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 30);

    // Add options to each question
    return shuffledQuestions.map(q => {
      const options = [
        q.correctAnswer,
        ...getRandomHebrewWords(words.categories, q.correctAnswer, 3)
      ].sort(() => Math.random() - 0.5);

      return {
        ...q,
        options
      };
    });
  }, []);

  const currentQuestion = allQuestions[currentQuestionIndex];

  // Helper function to get random Hebrew words excluding the correct answer
  function getRandomHebrewWords(categories: any[], excludeWord: string, count: number): string[] {
    // Get all Hebrew words from all categories
    const allHebrewWords = categories.flatMap(category => 
      category.wordPairs.map((pair: any) => pair.hebrew)
    );
    
    // Remove the correct answer and get unique words
    const uniqueWords = allHebrewWords.filter((word, index, self) => 
      word !== excludeWord && self.indexOf(word) === index
    );
    
    // Shuffle and take the requested number of words
    const shuffled = [...uniqueWords].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, uniqueWords.length));
  }

  const handleAnswerSelect = (answer: string) => {
    if (!showAnswer) {
      setSelectedAnswer(answer);
      setShowAnswer(true);
      if (answer === currentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 1);
        // Auto-advance after 2 seconds if not last question
        if (currentQuestionIndex < allQuestions.length - 1) {
          setTimeout(() => {
            setSelectedAnswer(null);
            setShowAnswer(false);
            setCurrentQuestionIndex(prev => prev + 1);
          }, 2000);
        }
      }
    }
  };

  const onInit = ({ confetti }: { confetti: CreateTypes }) => {
    confettiRef.current = confetti;
  };

  const triggerConfetti = () => {
    if (confettiRef.current) {
      const percentage = Math.round((score / allQuestions.length) * 100);
      
      if (percentage === 100) {
        // Special celebration for perfect score
        perfectScorePatterns.forEach((pattern, index) => {
          setTimeout(() => {
            confettiRef.current?.(pattern);
          }, index * 500); // Fire each pattern with a 500ms delay
        });
      } else if (percentage >= 90) {
        // Regular celebration for scores >= 90%
        const randomPatterns = [
          celebrationPatterns[Math.floor(Math.random() * celebrationPatterns.length)],
          celebrationPatterns[Math.floor(Math.random() * celebrationPatterns.length)],
          celebrationPatterns[Math.floor(Math.random() * celebrationPatterns.length)]
        ];

        confettiRef.current(randomPatterns[0]);
        setTimeout(() => {
          confettiRef.current?.(randomPatterns[1]);
        }, 300);
        setTimeout(() => {
          confettiRef.current?.(randomPatterns[2]);
        }, 600);
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    if (currentQuestionIndex === allQuestions.length - 1) {
      setIsQuizComplete(true);
      triggerConfetti();
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
    setShowSuggestion(false);
  };

  const handleCloseSuggestion = () => {
    setShowSuggestion(false);
  };

  const progress = ((currentQuestionIndex) / allQuestions.length) * 100;

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (isQuizComplete) {
    const percentage = Math.round((score / allQuestions.length) * 100);
    const isHighScore = percentage >= 90;
    const isPerfectScore = percentage === 100;

    return (
      <ExamContainer>
        <ReactCanvasConfetti onInit={onInit} />
        <ScoreContainer>
          <ScoreTitle>Exam Complete!</ScoreTitle>
          <ScoreText>
            You got {score} out of {allQuestions.length} questions correct
          </ScoreText>
          <ScorePercentage>
            {percentage}%
          </ScorePercentage>
          {isPerfectScore && (
            <ScoreText style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.4rem' }}>
              Perfect Score! 🌟
            </ScoreText>
          )}
          {isHighScore && !isPerfectScore && (
            <ScoreText style={{ color: '#27ae60', fontWeight: 'bold' }}>
              Excellent! 🎉
            </ScoreText>
          )}
          <RestartButton onClick={handleRestartQuiz}>
            Take Exam Again
          </RestartButton>
        </ScoreContainer>

        {showSuggestion && (
          <ModalOverlay>
            <ModalContent>
              <ModalTitle>Keep Practicing!</ModalTitle>
              <ModalText>
                Your score is below 90%. Consider reviewing the words in the Words tab before trying the exam again.
              </ModalText>
              <ModalButton onClick={handleCloseSuggestion}>
                Close
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </ExamContainer>
    );
  }

  return (
    <ExamContainer>
      <Title>Words Exam</Title>
      <ProgressContainer>
        <ProgressBar $progress={progress}>
          <ProgressFill $progress={progress} />
        </ProgressBar>
        <ProgressText>
          {currentQuestionIndex} / {allQuestions.length}
        </ProgressText>
      </ProgressContainer>
      <QuestionContainer>
        <QuestionText>
          {currentQuestion.question}
          <VoiceButton onClick={() => speakWord(currentQuestion.englishWord)}>
            🔊
          </VoiceButton>
        </QuestionText>
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.correctAnswer;
          
          return (
            <OptionButton
              key={index}
              $isSelected={isSelected}
              $isCorrect={isCorrect}
              $showAnswer={showAnswer}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </OptionButton>
          );
        })}
        {showAnswer && (
          <Feedback $isCorrect={selectedAnswer === currentQuestion.correctAnswer}>
            {selectedAnswer === currentQuestion.correctAnswer
              ? "Correct! Well done!"
              : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
          </Feedback>
        )}
      </QuestionContainer>
      {showAnswer && (
        (selectedAnswer !== currentQuestion.correctAnswer || currentQuestionIndex === allQuestions.length - 1) && (
          <NextButton onClick={handleNextQuestion}>
            {currentQuestionIndex === allQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </NextButton>
        )
      )}
    </ExamContainer>
  );
};

export default ExamTab; 