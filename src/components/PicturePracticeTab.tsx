import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ReactCanvasConfetti from 'react-canvas-confetti';
import confetti from 'canvas-confetti';
import words from '../data/words.json';

const ExamContainer = styled.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 0 auto 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const OptionsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
`;

interface OptionButtonProps {
  $isSelected: boolean;
  $isCorrect: boolean;
  $showAnswer: boolean;
}

interface ProgressBarProps {
  $progress: number;
}

interface ProgressFillProps {
  $progress: number;
}

interface FeedbackProps {
  $isCorrect: boolean;
}

const OptionButton = styled.button<OptionButtonProps>`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 2px solid ${(props: OptionButtonProps) => {
    if (!props.$showAnswer) return '#e0e0e0';
    if (props.$isCorrect) return '#27ae60';
    if (props.$isSelected && !props.$isCorrect) return '#e74c3c';
    return '#e0e0e0';
  }};
  border-radius: 8px;
  background-color: ${(props: OptionButtonProps) => {
    if (!props.$showAnswer) return 'white';
    if (props.$isCorrect) return '#e8f5e9';
    if (props.$isSelected && !props.$isCorrect) return '#ffebee';
    return 'white';
  }};
  color: #2c3e50;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`;

const Feedback = styled.div<FeedbackProps>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props: FeedbackProps) => props.$isCorrect ? '#e8f5e9' : '#ffebee'};
  color: ${(props: FeedbackProps) => props.$isCorrect ? '#27ae60' : '#e74c3c'};
  text-align: center;
  font-weight: 500;
`;

const NextButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #34495e;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ProgressFill = styled.div<ProgressFillProps>`
  width: ${(props: ProgressFillProps) => props.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: center;
  color: #2c3e50;
  font-size: 0.9rem;
`;

const ScoreContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ScoreTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const ScoreText = styled.p`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const ScorePercentage = styled.div`
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
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
  margin-top: 1rem;
  
  &:hover {
    background-color: #34495e;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

interface WordPair {
  english: string;
  hebrew: string;
}

interface Category {
  name: string;
  wordPairs: WordPair[];
}

interface Question {
  imageUrl: string;
  correctAnswer: string;
  englishWord: string;
  options: string[];
}

const PicturePracticeTab: React.FC = () => {
  return (
    <ExamContainer style={{ cursor: 'default' }}>
      <Title>Word Practice in Pictures</Title>
      <QuestionContainer>
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem',
          color: '#666',
          fontSize: '1.2rem',
          cursor: 'default'
        }}>
          This feature is temporarily unavailable. Please check back later.
        </div>
      </QuestionContainer>
    </ExamContainer>
  );
};

export default PicturePracticeTab;