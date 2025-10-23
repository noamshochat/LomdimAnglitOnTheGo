import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes } from 'canvas-confetti';
import html2canvas from 'html2canvas';
import words from '../data/words.json';
import auxiliaryVerbs from '../data/auxiliaryVerbs.json';
import hasHaveExercisesData from '../data/hasHaveExercises.json';
import { trackExamCompletion } from '../utils/analytics';

const ChallengeContainer = styled.div`
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

const QuestionContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 10px;
  }
`;

const QuestionText = styled.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    gap: 0.3rem;
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
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 48px;
    min-height: 48px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: rgba(44, 62, 80, 0.1);
  }
`;

const OptionButton = styled.button<{ $isSelected: boolean; $isCorrect: boolean; $showAnswer: boolean }>`
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
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    min-height: 42px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    min-height: 40px;
  }

  &:hover {
    background-color: ${props => !props.$showAnswer ? '#f5f5f5' : 'inherit'};
  }
  
  &:active {
    transform: scale(0.98);
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
    margin-top: 0.5rem;
    padding: 0.6rem;
    font-size: 0.75rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.4rem;
    padding: 0.5rem;
    font-size: 0.7rem;
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
  min-height: 44px;
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    min-height: 42px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    margin-top: 0.4rem;
    min-height: 40px;
  }
`;

const ProgressContainer = styled.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.6rem 0 0.8rem;
  }
  
  @media (max-width: 480px) {
    margin: 0.4rem 0 0.6rem;
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
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    min-height: 48px;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`;

const ShareButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 0.5rem;
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    min-height: 48px;
    margin-left: 0.3rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    min-height: 42px;
    margin-left: 0.2rem;
  }

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

const ChallengeSetupContainer = styled.div`
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
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ChallengeSetupTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const ChallengeSetupDescription = styled.p`
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
  }
`;

const ChallengeLengthOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }
`;

const ChallengeLengthOption = styled.button<{ isSelected: boolean }>`
  padding: 0.8rem 1.2rem;
  border: 2px solid ${props => props.isSelected ? '#2c3e50' : '#e0e0e0'};
  border-radius: 12px;
  background-color: ${props => props.isSelected ? '#2c3e50' : 'white'};
  color: ${props => props.isSelected ? 'white' : '#2c3e50'};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: #2c3e50;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    min-height: 40px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    min-height: 35px;
    font-size: 0.75rem;
  }
`;

const ChallengeLengthTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
  }
`;

const ChallengeLengthDescription = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StartChallengeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 45px;
  width: 100%;
  
  &:hover {
    background-color: #229954;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    min-height: 45px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    min-height: 42px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ToggleButton = styled.button<{ $isActive: boolean }>`
  padding: 0.6rem 1.2rem;
  border: 2px solid ${props => props.$isActive ? '#2c3e50' : '#bdc3c7'};
  border-radius: 8px;
  background-color: ${props => props.$isActive ? '#2c3e50' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#2c3e50'};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #2c3e50;
    background-color: ${props => props.$isActive ? '#1a252f' : '#f8f9fa'};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

interface FinalChallengeTabProps {
  initialChallengeType?: 'auxiliaryVerbs' | 'default';
}

const FinalChallengeTab: React.FC<FinalChallengeTabProps> = ({ initialChallengeType = 'default' }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showChallengeSetup, setShowChallengeSetup] = useState(true);
  const [challengeLength, setChallengeLength] = useState<25 | 50 | 365 | 'thirdGrade' | 'fifthGrade' | 'byCategory' | 'auxiliaryVerbs' | 'hasHave'>(25);
  const [isSharing, setIsSharing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [isReverseMode, setIsReverseMode] = useState(false);
  const confettiRef = useRef<CreateTypes>();
  const scoreContainerRef = useRef<HTMLDivElement>(null);

  // Reset quiz when mode changes
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setIsQuizComplete(false);
  }, [isReverseMode]);

  // Create comprehensive questions from ALL words (excluding sentences)
  const allQuestions = React.useMemo(() => {
    let sourceWords;
    
    if (challengeLength === 'auxiliaryVerbs') {
      // Get auxiliary verb questions
      sourceWords = auxiliaryVerbs.map(item => ({
        question: `Complete the sentence: "${item.sentence}"`,
        correctAnswer: item.correctAnswer,
        options: item.options,
        category: "Auxiliary Verbs",
        isAuxiliaryVerb: true
      }));
    } else if (challengeLength === 'hasHave') {
      // Get has/have exercise questions
      sourceWords = hasHaveExercisesData.map(item => ({
        question: `Complete the sentence: "${item.sentence}"`,
        correctAnswer: item.correctAnswer,
        options: item.options,
        category: "Has/Have Exercises",
        isHasHave: true
      }));
    } else if (challengeLength === 'thirdGrade') {
      // Get only Third grade words
      const thirdGradeCategory = words.categories.find(category => category.name === "Third grade");
      sourceWords = thirdGradeCategory?.wordPairs.map(pair => ({
        question: isReverseMode ? pair.hebrew : pair.english,
        correctAnswer: isReverseMode ? pair.english : pair.hebrew,
        englishWord: pair.english,
        hebrewWord: pair.hebrew,
        category: "Third grade"
      })) || [];
    } else if (challengeLength === 'fifthGrade') {
      // Get only Fifth grade words
      const fifthGradeCategory = words.categories.find(category => category.name === "Fifth grade");
      sourceWords = fifthGradeCategory?.wordPairs.map(pair => ({
        question: isReverseMode ? pair.hebrew : pair.english,
        correctAnswer: isReverseMode ? pair.english : pair.hebrew,
        englishWord: pair.english,
        hebrewWord: pair.hebrew,
        category: "Fifth grade"
      })) || [];
    } else if (challengeLength === 'byCategory' && selectedCategory) {
      // Get words from selected category only
      const category = words.categories.find(cat => cat.name === selectedCategory);
      sourceWords = category?.wordPairs.map(pair => ({
        question: isReverseMode ? pair.hebrew : pair.english,
        correctAnswer: isReverseMode ? pair.english : pair.hebrew,
        englishWord: pair.english,
        hebrewWord: pair.hebrew,
        category: selectedCategory
      })) || [];
    } else {
      // Get all words from all categories except Sentences
      sourceWords = words.categories
        .filter(category => category.name !== "Sentences")
        .flatMap(category => 
          category.wordPairs.map(pair => ({
            question: isReverseMode ? pair.hebrew : pair.english,
            correctAnswer: isReverseMode ? pair.english : pair.hebrew,
            englishWord: pair.english,
            hebrewWord: pair.hebrew,
            category: category.name
          }))
        );
    }

    // Shuffle and take questions based on selected exam length
    const questionCount = challengeLength === 'thirdGrade' ? sourceWords.length : 
                         challengeLength === 'fifthGrade' ? sourceWords.length : 
                         challengeLength === 'byCategory' ? sourceWords.length : 
                         challengeLength === 'auxiliaryVerbs' ? sourceWords.length :
                         challengeLength === 'hasHave' ? sourceWords.length :
                         challengeLength;
    const shuffledQuestions = [...sourceWords]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);

    // Add options to each question
    return shuffledQuestions.map(q => {
      if ('isAuxiliaryVerb' in q && q.isAuxiliaryVerb) {
        // For auxiliary verbs, use the predefined options
        return {
          ...q,
          options: q.options
        };
      } else if ('isHasHave' in q && q.isHasHave) {
        // For has/have exercises, use the predefined options
        return {
          ...q,
          options: q.options
        };
      } else {
        // For regular vocabulary questions, generate options based on mode
        const sourceCategory = challengeLength === 'thirdGrade' ? 'Third grade' : 
                              challengeLength === 'fifthGrade' ? 'Fifth grade' : 
                              challengeLength === 'byCategory' ? (selectedCategory || undefined) : 
                              undefined;
        const options = [
          q.correctAnswer,
          ...(isReverseMode ? 
            getRandomEnglishWords(words.categories, q.correctAnswer, 3, sourceCategory) :
            getRandomHebrewWords(words.categories, q.correctAnswer, 3, sourceCategory)
          )
        ].sort(() => Math.random() - 0.5);

        return {
          ...q,
          options
        };
      }
    });
  }, [challengeLength, selectedCategory, isReverseMode]);

  const currentQuestion = allQuestions[currentQuestionIndex];

  // Helper function to get random Hebrew words excluding the correct answer
  function getRandomHebrewWords(categories: any[], excludeWord: string, count: number, sourceCategory?: string): string[] {
    let allHebrewWords;
    
    if (sourceCategory) {
      // If we have a specific source category (like Third Grade or Fifth Grade), only use words from that category
      const category = categories.find(cat => cat.name === sourceCategory);
      allHebrewWords = category?.wordPairs.map((pair: any) => pair.hebrew) || [];
    } else {
      // Otherwise, use all words from all categories
      allHebrewWords = categories.flatMap(category => 
        category.wordPairs.map((pair: any) => pair.hebrew)
      );
    }
    
    const uniqueWords = allHebrewWords.filter((word: string, index: number, self: string[]) => 
      word !== excludeWord && self.indexOf(word) === index
    );
    
    const shuffled = [...uniqueWords].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, uniqueWords.length));
  }

  // Helper function to get random English words excluding the correct answer
  function getRandomEnglishWords(categories: any[], excludeWord: string, count: number, sourceCategory?: string): string[] {
    let allEnglishWords;
    
    if (sourceCategory) {
      // If we have a specific source category (like Third Grade or Fifth Grade), only use words from that category
      const category = categories.find(cat => cat.name === sourceCategory);
      allEnglishWords = category?.wordPairs.map((pair: any) => pair.english) || [];
    } else {
      // Otherwise, use all words from all categories
      allEnglishWords = categories.flatMap(category => 
        category.wordPairs.map((pair: any) => pair.english)
      );
    }
    
    const uniqueWords = allEnglishWords.filter((word: string, index: number, self: string[]) => 
      word !== excludeWord && self.indexOf(word) === index
    );
    
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
    console.log('Confetti initialized!');
    confettiRef.current = confetti;
  };

  const triggerConfetti = () => {
    if (confettiRef.current) {
      const percentage = Math.round((score / allQuestions.length) * 100);
      console.log('Confetti triggered! Score:', score, 'Total:', allQuestions.length, 'Percentage:', percentage);
      
      if (percentage === 100) {
        // Special celebration for perfect score
        const perfectScorePatterns = [
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

        perfectScorePatterns.forEach((pattern, index) => {
          setTimeout(() => {
            confettiRef.current?.(pattern);
          }, index * 500);
        });
      } else if (percentage >= 90) {
        // Enhanced celebration for excellent scores (90%+)
        console.log('90%+ celebration triggered!');
        const celebrationPatterns = [
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

        // Fire multiple patterns with staggered timing for spectacular effect
        celebrationPatterns.forEach((pattern, index) => {
          setTimeout(() => {
            confettiRef.current?.(pattern);
          }, index * 300);
        });
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

  // Auto-advance to score screen when last question is answered correctly
  React.useEffect(() => {
    if (showAnswer && selectedAnswer === currentQuestion.correctAnswer && currentQuestionIndex === allQuestions.length - 1) {
      const timer = setTimeout(() => {
        setIsQuizComplete(true);
        triggerConfetti();
      }, 2000); // 2 second delay to show the correct answer
      return () => clearTimeout(timer);
    }
  }, [showAnswer, selectedAnswer, currentQuestion.correctAnswer, currentQuestionIndex, allQuestions.length, triggerConfetti]);

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setIsQuizComplete(false);
    setShowChallengeSetup(true);
  };

  const handleStartChallenge = () => {
    if (challengeLength === 'byCategory') {
      setShowCategorySelection(true);
      setShowChallengeSetup(false);
    } else {
      setShowChallengeSetup(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setScore(0);
      setIsQuizComplete(false);
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowCategorySelection(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  const progress = ((currentQuestionIndex) / allQuestions.length) * 100;

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    
    // Try to find a female child-friendly voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.toLowerCase().includes('female') || 
       voice.name.toLowerCase().includes('woman') ||
       voice.name.toLowerCase().includes('zira') ||
       voice.name.toLowerCase().includes('hazel'))
    );
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    // Set child-friendly speech rate (slightly slower)
    utterance.rate = 0.8;
    utterance.pitch = 1.1; // Slightly higher pitch for child-friendly sound
    
    window.speechSynthesis.speak(utterance);
  };

  const handleShareScore = async () => {
    if (!scoreContainerRef.current) return;
    
    setIsSharing(true);
    
    try {
      // Capture screenshot of the score container
      const canvas = await html2canvas(scoreContainerRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      // Convert canvas to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/png');
      });
      
      const percentage = Math.round((score / allQuestions.length) * 100);
      const examType = challengeLength === 25 ? 'Mini' : challengeLength === 50 ? 'Quick' : challengeLength === 365 ? 'Complete' : challengeLength === 'thirdGrade' ? 'Third Grade' : challengeLength === 'fifthGrade' ? 'Fifth Grade' : challengeLength === 'auxiliaryVerbs' ? 'Auxiliary Verb' : challengeLength === 'hasHave' ? 'Has/Have' : challengeLength === 'byCategory' ? selectedCategory : 'Final';
      const shareText = `I just completed the ${examType} Final Challenge with a score of ${percentage}%! 🎓📚`;
      
      // Try Web Share API first
      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'final-exam-result.png', { type: 'image/png' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My Final Challenge Results',
            text: shareText,
            files: [file]
          });
        } else {
          // Fallback: share text only
          await navigator.share({
            title: 'My Final Challenge Results',
            text: shareText
          });
        }
      } else {
        // Fallback: copy to clipboard
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'final-exam-result.png';
        link.href = dataUrl;
        link.click();
        
        // Also copy text to clipboard
        await navigator.clipboard.writeText(shareText);
        alert('Screenshot saved and text copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      alert('Unable to share. Please try again.');
    } finally {
      setIsSharing(false);
    }
  };

  if (isQuizComplete) {
    const percentage = Math.round((score / allQuestions.length) * 100);
    const isHighScore = percentage >= 80;
    const isPerfectScore = percentage === 100;
    
    // Track exam completion in Google Analytics
    const examType = challengeLength === 25 ? 'Mini Final Challenge' : challengeLength === 50 ? 'Quick Final Challenge' : challengeLength === 365 ? 'Complete Final Challenge' : challengeLength === 'thirdGrade' ? 'Third Grade Final Challenge' : challengeLength === 'fifthGrade' ? 'Fifth Grade Final Challenge' : challengeLength === 'auxiliaryVerbs' ? 'Auxiliary Verb Challenge' : challengeLength === 'hasHave' ? 'Has/Have Challenge' : challengeLength === 'byCategory' ? `${selectedCategory} Category Challenge` : 'Final Challenge';
    trackExamCompletion(examType, score, allQuestions.length, percentage);

    return (
      <ChallengeContainer>
        <ReactCanvasConfetti onInit={onInit} />
        <ScoreContainer ref={scoreContainerRef}>
          <ScoreTitle>{challengeLength === 25 ? 'Mini Final Challenge Complete!' : challengeLength === 50 ? 'Quick Final Challenge Complete!' : challengeLength === 365 ? 'Complete Final Challenge Complete!' : challengeLength === 'thirdGrade' ? 'Third Grade Final Challenge Complete!' : challengeLength === 'fifthGrade' ? 'Fifth Grade Final Challenge Complete!' : challengeLength === 'auxiliaryVerbs' ? 'Auxiliary Verb Challenge Complete!' : challengeLength === 'hasHave' ? 'Has/Have Challenge Complete!' : challengeLength === 'byCategory' ? `${selectedCategory} Category Challenge Complete!` : 'Final Challenge Complete!'} 🎓</ScoreTitle>
          <ScoreText>
            You got {score} out of {allQuestions.length} questions correct
          </ScoreText>
          {(challengeLength !== 'auxiliaryVerbs' && challengeLength !== 'hasHave') && (
            <ScoreText style={{ fontSize: '1rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>
              Challenge Mode: {isReverseMode ? 'Hebrew → English' : 'English → Hebrew'}
            </ScoreText>
          )}
          <ScorePercentage>
            {percentage}%
          </ScorePercentage>
          {isPerfectScore && (
            <ScoreText style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.4rem' }}>
              Perfect Score! 🌟 Outstanding!
            </ScoreText>
          )}
          {isHighScore && !isPerfectScore && (
            <ScoreText style={{ color: '#27ae60', fontWeight: 'bold' }}>
              Excellent Work! 🎉
            </ScoreText>
          )}
          {!isHighScore && (
            <ScoreText style={{ color: '#e67e22', fontWeight: 'bold' }}>
              Good effort! Keep practicing! 📚
            </ScoreText>
          )}
          <ButtonContainer>
            <RestartButton onClick={handleRestartQuiz}>
              Take Final Challenge Again
            </RestartButton>
            <ShareButton onClick={handleShareScore} disabled={isSharing}>
              {isSharing ? 'Sharing...' : '📤 Share Score'}
            </ShareButton>
          </ButtonContainer>
        </ScoreContainer>
      </ChallengeContainer>
    );
  }

  if (showCategorySelection) {
    return (
      <ChallengeContainer>
        <Title>Choose Category for Challenge</Title>
        <ChallengeSetupContainer>
          <ChallengeSetupTitle>Select a Category</ChallengeSetupTitle>
          <ChallengeSetupDescription>
            Choose a vocabulary category to take a challenge on. 
            The challenge will include all words from that category.
          </ChallengeSetupDescription>
          <ChallengeLengthOptions>
            {words.categories
              .filter(category => category.name !== "Sentences")
              .map((category) => (
                <ChallengeLengthOption
                  key={category.name}
                  isSelected={selectedCategory === category.name}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  <ChallengeLengthTitle>📚 {category.name}</ChallengeLengthTitle>
                  <ChallengeLengthDescription>
                    {category.wordPairs.length} words • {category.wordPairs.length} questions
                  </ChallengeLengthDescription>
                </ChallengeLengthOption>
              ))}
          </ChallengeLengthOptions>
        </ChallengeSetupContainer>
      </ChallengeContainer>
    );
  }

  if (showChallengeSetup) {
    return (
      <ChallengeContainer>
        <Title>Final Challenge Setup</Title>
        <ChallengeSetupContainer>
          <ChallengeSetupTitle>Choose Challenge Length</ChallengeSetupTitle>
          <ChallengeSetupDescription>
            Select how many questions you want in your final challenge. 
            You can always retake the challenge with a different length.
          </ChallengeSetupDescription>
          <ChallengeLengthOptions>
            <ChallengeLengthOption
              isSelected={challengeLength === 25}
              onClick={() => setChallengeLength(25)}
            >
              <ChallengeLengthTitle>⚡ Mini Challenge (25 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~8-12 minutes • Perfect for quick review
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 50}
              onClick={() => setChallengeLength(50)}
            >
              <ChallengeLengthTitle>📝 Quick Challenge (50 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~15-20 minutes • Good for practice and review
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 365}
              onClick={() => setChallengeLength(365)}
            >
              <ChallengeLengthTitle>🎓 Complete Challenge (365 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~90-110 minutes • Tests all unique vocabulary words
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 'thirdGrade'}
              onClick={() => setChallengeLength('thirdGrade')}
            >
              <ChallengeLengthTitle>📖 Third Grade Challenge (30 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~10-15 minutes • Age-appropriate vocabulary for third grade
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 'fifthGrade'}
              onClick={() => setChallengeLength('fifthGrade')}
            >
              <ChallengeLengthTitle>🎓 Fifth Grade Challenge (32 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~10-15 minutes • Advanced vocabulary for fifth grade
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 'byCategory'}
              onClick={() => setChallengeLength('byCategory')}
            >
              <ChallengeLengthTitle>📚 Challenge by Category</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                Choose a specific category to test • Custom length
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 'auxiliaryVerbs'}
              onClick={() => setChallengeLength('auxiliaryVerbs')}
            >
              <ChallengeLengthTitle>🔤 Auxiliary Verb Challenge (15 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~5-8 minutes • Practice is, am, are in sentences
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
            <ChallengeLengthOption
              isSelected={challengeLength === 'hasHave'}
              onClick={() => setChallengeLength('hasHave')}
            >
              <ChallengeLengthTitle>🔤 Has/Have Challenge (15 Questions)</ChallengeLengthTitle>
              <ChallengeLengthDescription>
                ~5-8 minutes • Practice has and have in sentences
              </ChallengeLengthDescription>
            </ChallengeLengthOption>
          </ChallengeLengthOptions>
          <StartChallengeButton onClick={handleStartChallenge}>
            Start {challengeLength === 25 ? 'Mini' : challengeLength === 50 ? 'Quick' : challengeLength === 365 ? 'Complete' : challengeLength === 'thirdGrade' ? 'Third Grade' : challengeLength === 'fifthGrade' ? 'Fifth Grade' : challengeLength === 'auxiliaryVerbs' ? 'Auxiliary Verb' : challengeLength === 'hasHave' ? 'Has/Have' : 'Category'} Final Challenge
          </StartChallengeButton>
        </ChallengeSetupContainer>
      </ChallengeContainer>
    );
  }

  return (
    <ChallengeContainer>
      <ReactCanvasConfetti onInit={onInit} />
      <Title>Final Challenge - {challengeLength === 25 ? 'Mini' : challengeLength === 50 ? 'Quick' : challengeLength === 365 ? 'Complete' : challengeLength === 'thirdGrade' ? 'Third Grade' : challengeLength === 'fifthGrade' ? 'Fifth Grade' : challengeLength === 'auxiliaryVerbs' ? 'Auxiliary Verb' : challengeLength === 'hasHave' ? 'Has/Have' : challengeLength === 'byCategory' ? selectedCategory : 'Unknown'} ({challengeLength === 'thirdGrade' ? 30 : challengeLength === 'fifthGrade' ? 32 : challengeLength === 'auxiliaryVerbs' ? 15 : challengeLength === 'hasHave' ? 15 : challengeLength === 'byCategory' ? allQuestions.length : challengeLength} Questions)</Title>
      {(challengeLength !== 'auxiliaryVerbs' && challengeLength !== 'hasHave') && (
        <ToggleContainer>
          <ToggleButton 
            onClick={() => setIsReverseMode(!isReverseMode)}
            $isActive={!isReverseMode}
          >
            English → Hebrew
          </ToggleButton>
          <ToggleButton 
            onClick={() => setIsReverseMode(!isReverseMode)}
            $isActive={isReverseMode}
          >
            Hebrew → English
          </ToggleButton>
        </ToggleContainer>
      )}
      <ProgressContainer>
        <ProgressBar $progress={progress}>
          <ProgressFill $progress={progress} />
        </ProgressBar>
        <ProgressText>
          {currentQuestionIndex + 1} / {allQuestions.length}
        </ProgressText>
      </ProgressContainer>
      <QuestionContainer>
        <QuestionText>
          {currentQuestion.question}
          {'englishWord' in currentQuestion && !isReverseMode && (
            <VoiceButton onClick={() => speakWord(currentQuestion.englishWord)}>
              🔊
            </VoiceButton>
          )}
        </QuestionText>
        {currentQuestion.options.map((option: string, index: number) => {
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
        selectedAnswer !== currentQuestion.correctAnswer && (
          <NextButton onClick={handleNextQuestion}>
            Next Question
          </NextButton>
        )
      )}
    </ChallengeContainer>
  );
};

export default FinalChallengeTab;
