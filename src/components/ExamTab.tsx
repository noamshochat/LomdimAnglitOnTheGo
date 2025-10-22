import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes } from 'canvas-confetti';
import html2canvas from 'html2canvas';
import words from '../data/words.json';

const ExamContainer = styled.div`
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

const ExamTitle = styled.h2`
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
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
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
    font-size: 1rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
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
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: ${props => !props.$showAnswer ? '#f5f5f5' : 'inherit'};
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
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
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    margin-top: 0.4rem;
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
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ScoreTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }
`;

const ScorePercentage = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
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
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
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
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    margin-left: 0.3rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
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

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
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

const ExamTab: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isSharing, setIsSharing] = useState(false);
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

  // Create questions from all words (excluding sentences)
  const allQuestions = React.useMemo(() => {
    // First, create all questions with their correct answers (excluding sentences)
    const questions = words.categories
      .filter(category => category.name !== "Sentences")
      .flatMap(category => 
        category.wordPairs.map(pair => ({
          question: isReverseMode ? pair.hebrew : pair.english,
          correctAnswer: isReverseMode ? pair.english : pair.hebrew,
          englishWord: pair.english,
          hebrewWord: pair.hebrew
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
        ...(isReverseMode ? 
          getRandomEnglishWords(words.categories, q.correctAnswer, 3) :
          getRandomHebrewWords(words.categories, q.correctAnswer, 3)
        )
      ].sort(() => Math.random() - 0.5);

      return {
        ...q,
        options
      };
    });
  }, [isReverseMode]);

  const currentQuestion = allQuestions[currentQuestionIndex];

  // Helper function to get random Hebrew words excluding the correct answer
  function getRandomHebrewWords(categories: any[], excludeWord: string, count: number): string[] {
    // Get all Hebrew words from all categories except Sentences
    const allHebrewWords = categories
      .filter(category => category.name !== "Sentences")
      .flatMap(category => 
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

  // Helper function to get random English words excluding the correct answer
  function getRandomEnglishWords(categories: any[], excludeWord: string, count: number): string[] {
    // Get all English words from all categories except Sentences
    const allEnglishWords = categories
      .filter(category => category.name !== "Sentences")
      .flatMap(category => 
        category.wordPairs.map((pair: any) => pair.english)
      );
    
    // Remove the correct answer and get unique words
    const uniqueWords = allEnglishWords.filter((word, index, self) => 
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
      const shareText = `I just completed the English-Hebrew vocabulary exam with a score of ${percentage}%! 🎓📚`;
      
      // Try Web Share API first
      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'exam-result.png', { type: 'image/png' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My Exam Results',
            text: shareText,
            files: [file]
          });
        } else {
          // Fallback: share text only
          await navigator.share({
            title: 'My Exam Results',
            text: shareText
          });
        }
      } else {
        // Fallback: copy to clipboard
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'exam-result.png';
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
    const isHighScore = percentage >= 90;
    const isPerfectScore = percentage === 100;

    return (
      <ExamContainer>
        <ReactCanvasConfetti onInit={onInit} />
        <ScoreContainer ref={scoreContainerRef}>
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
          <ButtonContainer>
            <RestartButton onClick={handleRestartQuiz}>
              Take Exam Again
            </RestartButton>
            <ShareButton onClick={handleShareScore} disabled={isSharing}>
              {isSharing ? 'Sharing...' : '📤 Share Score'}
            </ShareButton>
          </ButtonContainer>
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
    <ExamContainer role="main" aria-labelledby="exam-title">
      <Title id="exam-title">Words Practice</Title>
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
      <ProgressContainer role="progressbar" aria-valuenow={currentQuestionIndex} aria-valuemax={allQuestions.length} aria-label="Quiz progress">
        <ProgressBar $progress={progress}>
          <ProgressFill $progress={progress} />
        </ProgressBar>
        <ProgressText aria-live="polite">
          Question {currentQuestionIndex} of {allQuestions.length}
        </ProgressText>
      </ProgressContainer>
      <QuestionContainer role="group" aria-labelledby="current-question">
        <QuestionText id="current-question">
          {currentQuestion.question}
          <VoiceButton 
            onClick={() => speakWord(isReverseMode ? currentQuestion.hebrewWord : currentQuestion.englishWord)}
            aria-label={`Pronounce ${isReverseMode ? currentQuestion.hebrewWord : currentQuestion.englishWord}`}
            title="Click to hear pronunciation"
          >
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
              aria-label={`Option ${index + 1}: ${option}`}
              aria-pressed={isSelected}
              role="button"
            >
              {option}
            </OptionButton>
          );
        })}
        {showAnswer && (
          <Feedback 
            $isCorrect={selectedAnswer === currentQuestion.correctAnswer}
            role="alert"
            aria-live="assertive"
          >
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