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

const ExamSetupContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ExamSetupTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const ExamSetupDescription = styled.p`
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    font-size: 0.85rem;
  }
`;

const ExamLengthOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.2rem;
  }
`;

const ExamLengthOption = styled.button<{ isSelected: boolean }>`
  padding: 1rem 1.5rem;
  border: 2px solid ${props => props.isSelected ? '#2c3e50' : '#e0e0e0'};
  border-radius: 12px;
  background-color: ${props => props.isSelected ? '#2c3e50' : 'white'};
  color: ${props => props.isSelected ? 'white' : '#2c3e50'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 60px;
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
    padding: 0.7rem 1rem;
    min-height: 50px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    min-height: 45px;
    font-size: 0.8rem;
  }
`;

const ExamLengthTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExamLengthDescription = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StartExamButton = styled.button`
  padding: 1rem 2rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
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

const FinalExamTab: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showExamSetup, setShowExamSetup] = useState(true);
  const [examLength, setExamLength] = useState<25 | 50 | 221 | 'thirdGrade'>(25);
  const [isSharing, setIsSharing] = useState(false);
  const confettiRef = useRef<CreateTypes>();
  const scoreContainerRef = useRef<HTMLDivElement>(null);

  // Create comprehensive questions from ALL words (excluding sentences)
  const allQuestions = React.useMemo(() => {
    let sourceWords;
    
    if (examLength === 'thirdGrade') {
      // Get only Third grade words
      const thirdGradeCategory = words.categories.find(category => category.name === "Third grade");
      sourceWords = thirdGradeCategory?.wordPairs.map(pair => ({
        question: `What is the Hebrew translation for "${pair.english}"?`,
        correctAnswer: pair.hebrew,
        englishWord: pair.english,
        category: "Third grade"
      })) || [];
    } else {
      // Get all words from all categories except Sentences
      sourceWords = words.categories
        .filter(category => category.name !== "Sentences")
        .flatMap(category => 
          category.wordPairs.map(pair => ({
            question: `What is the Hebrew translation for "${pair.english}"?`,
            correctAnswer: pair.hebrew,
            englishWord: pair.english,
            category: category.name
          }))
        );
    }

    // Shuffle and take questions based on selected exam length
    const questionCount = examLength === 'thirdGrade' ? sourceWords.length : examLength;
    const shuffledQuestions = [...sourceWords]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);

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
    const allHebrewWords = categories.flatMap(category => 
      category.wordPairs.map((pair: any) => pair.hebrew)
    );
    
    const uniqueWords = allHebrewWords.filter((word, index, self) => 
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

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setIsQuizComplete(false);
    setShowExamSetup(true);
  };

  const handleStartExam = () => {
    setShowExamSetup(false);
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
      const examType = examLength === 25 ? 'Mini' : examLength === 50 ? 'Quick' : examLength === 221 ? 'Complete' : 'Third Grade';
      const shareText = `I just completed the ${examType} Final Exam with a score of ${percentage}%! 🎓📚`;
      
      // Try Web Share API first
      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'final-exam-result.png', { type: 'image/png' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My Final Exam Results',
            text: shareText,
            files: [file]
          });
        } else {
          // Fallback: share text only
          await navigator.share({
            title: 'My Final Exam Results',
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

    return (
      <ExamContainer>
        <ReactCanvasConfetti onInit={onInit} />
        <ScoreContainer ref={scoreContainerRef}>
          <ScoreTitle>Final Exam Complete! 🎓</ScoreTitle>
          <ScoreText>
            You got {score} out of {allQuestions.length} questions correct
          </ScoreText>
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
              Take Final Exam Again
            </RestartButton>
            <ShareButton onClick={handleShareScore} disabled={isSharing}>
              {isSharing ? 'Sharing...' : '📤 Share Score'}
            </ShareButton>
          </ButtonContainer>
        </ScoreContainer>
      </ExamContainer>
    );
  }

  if (showExamSetup) {
    return (
      <ExamContainer>
        <Title>Final Exam Setup</Title>
        <ExamSetupContainer>
          <ExamSetupTitle>Choose Exam Length</ExamSetupTitle>
          <ExamSetupDescription>
            Select how many questions you want in your final exam. 
            You can always retake the exam with a different length.
          </ExamSetupDescription>
          <ExamLengthOptions>
            <ExamLengthOption
              isSelected={examLength === 25}
              onClick={() => setExamLength(25)}
            >
              <ExamLengthTitle>⚡ Mini Exam (25 Questions)</ExamLengthTitle>
              <ExamLengthDescription>
                ~8-12 minutes • Perfect for quick review
              </ExamLengthDescription>
            </ExamLengthOption>
            <ExamLengthOption
              isSelected={examLength === 50}
              onClick={() => setExamLength(50)}
            >
              <ExamLengthTitle>📝 Quick Exam (50 Questions)</ExamLengthTitle>
              <ExamLengthDescription>
                ~15-20 minutes • Good for practice and review
              </ExamLengthDescription>
            </ExamLengthOption>
            <ExamLengthOption
              isSelected={examLength === 221}
              onClick={() => setExamLength(221)}
            >
              <ExamLengthTitle>🎓 Complete Exam (221 Questions)</ExamLengthTitle>
              <ExamLengthDescription>
                ~65-80 minutes • Tests all vocabulary words
              </ExamLengthDescription>
            </ExamLengthOption>
            <ExamLengthOption
              isSelected={examLength === 'thirdGrade'}
              onClick={() => setExamLength('thirdGrade')}
            >
              <ExamLengthTitle>📖 Third Grade Exam (24 Questions)</ExamLengthTitle>
              <ExamLengthDescription>
                ~8-12 minutes • Age-appropriate vocabulary for third grade
              </ExamLengthDescription>
            </ExamLengthOption>
          </ExamLengthOptions>
          <StartExamButton onClick={handleStartExam}>
            Start {examLength === 25 ? 'Mini' : examLength === 50 ? 'Quick' : examLength === 221 ? 'Complete' : 'Third Grade'} Final Exam
          </StartExamButton>
        </ExamSetupContainer>
      </ExamContainer>
    );
  }

  return (
    <ExamContainer>
      <ReactCanvasConfetti onInit={onInit} />
      <Title>Final Exam - {examLength === 25 ? 'Mini' : examLength === 50 ? 'Quick' : examLength === 221 ? 'Complete' : 'Third Grade'} ({examLength === 'thirdGrade' ? 24 : examLength} Questions)</Title>
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
            {currentQuestionIndex === allQuestions.length - 1 ? "Finish Final Exam" : "Next Question"}
          </NextButton>
        )
      )}
    </ExamContainer>
  );
};

export default FinalExamTab;
