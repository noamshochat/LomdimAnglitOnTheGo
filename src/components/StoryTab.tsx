import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import storiesData from '../data/stories.json';

const StoryContainer = styled.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StoryTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StoryText = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #2c3e50;
  white-space: pre-line;
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
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
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const OptionButton = styled.button<{ isSelected: boolean; isCorrect?: boolean; showAnswer: boolean }>`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border: 2px solid ${props => {
    if (!props.showAnswer) return '#e0e0e0';
    if (props.isCorrect) return '#4CAF50';
    if (props.isSelected && !props.isCorrect) return '#f44336';
    return '#e0e0e0';
  }};
  border-radius: 8px;
  background-color: ${props => {
    if (!props.showAnswer) return 'white';
    if (props.isCorrect) return '#E8F5E9';
    if (props.isSelected && !props.isCorrect) return '#FFEBEE';
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
    background-color: ${props => !props.showAnswer ? '#f5f5f5' : 'inherit'};
  }
`;

const Feedback = styled.div<{ isCorrect: boolean }>`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${props => props.isCorrect ? '#E8F5E9' : '#FFEBEE'};
  color: ${props => props.isCorrect ? '#2E7D32' : '#C62828'};
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
  margin: 1.5rem auto;
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
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

interface Story {
  title: string;
  textFile: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const StoryTab: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [storyText, setStoryText] = useState<string>('');

  const currentStory = storiesData.stories[currentStoryIndex];
  const currentQuestion = currentStory.questions[currentQuestionIndex];

  useEffect(() => {
    const loadStoryText = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/data/story.txt');
        const text = await response.text();
        setStoryText(text);
      } catch (error) {
        console.error('Error loading story text:', error);
      }
    };

    loadStoryText();
  }, [currentStoryIndex]);

  const handleAnswerSelect = (answer: string) => {
    if (!showAnswer) {
      setSelectedAnswer(answer);
      setShowAnswer(true);
      if (answer === currentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    if (currentQuestionIndex === currentStory.questions.length - 1) {
      setIsQuizComplete(true);
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
  };

  if (isQuizComplete) {
    const percentage = Math.round((score / currentStory.questions.length) * 100);
    return (
      <StoryContainer>
        <ScoreContainer>
          <ScoreTitle>Quiz Complete!</ScoreTitle>
          <ScoreText>
            You got {score} out of {currentStory.questions.length} questions correct
          </ScoreText>
          <ScorePercentage>
            {percentage}%
          </ScorePercentage>
          <RestartButton onClick={handleRestartQuiz}>
            Take Quiz Again
          </RestartButton>
        </ScoreContainer>
      </StoryContainer>
    );
  }

  return (
    <StoryContainer>
      <StoryTitle>{currentStory.title}</StoryTitle>
      <StoryText>{storyText}</StoryText>
      <QuestionContainer>
        <QuestionText>{currentQuestion.question}</QuestionText>
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            isSelected={selectedAnswer === option}
            isCorrect={option === currentQuestion.correctAnswer}
            showAnswer={showAnswer}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </OptionButton>
        ))}
        {showAnswer && (
          <Feedback isCorrect={selectedAnswer === currentQuestion.correctAnswer}>
            {selectedAnswer === currentQuestion.correctAnswer
              ? "Correct! Well done!"
              : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
          </Feedback>
        )}
      </QuestionContainer>
      {showAnswer && (
        <NextButton onClick={handleNextQuestion}>
          {currentQuestionIndex === currentStory.questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </NextButton>
      )}
    </StoryContainer>
  );
};

export default StoryTab; 