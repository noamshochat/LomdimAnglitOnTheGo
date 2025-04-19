import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import storiesData from '../data/stories.json';

const StoryContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const StoryTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

const StoryText = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #2c3e50;
  white-space: pre-line;
`;

const QuestionContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const QuestionText = styled.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const OptionButton = styled.button<{ isSelected: boolean; isCorrect?: boolean; showAnswer: boolean }>`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
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
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background-color: ${props => !props.showAnswer ? '#f5f5f5' : 'inherit'};
  }
`;

const Feedback = styled.div<{ isCorrect: boolean }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${props => props.isCorrect ? '#E8F5E9' : '#FFEBEE'};
  color: ${props => props.isCorrect ? '#2E7D32' : '#C62828'};
  font-weight: 500;
`;

const NextButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`;

const ScoreContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const ScoreTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ScoreText = styled.p`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ScorePercentage = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const RestartButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

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