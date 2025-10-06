import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import words from '../data/words.json';

const Container = styled.div`
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  
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
    font-size: 1.4rem;
    margin-bottom: 1rem;
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
`;

const ExerciseContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const ExerciseTitle = styled.h3`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const WordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const WordItem = styled.div<{ isDragging?: boolean; isCorrect?: boolean; isIncorrect?: boolean }>`
  background: ${props => {
    if (props.isCorrect) return '#d4edda';
    if (props.isIncorrect) return '#f8d7da';
    return '#f8f9fa';
  }};
  border: 2px solid ${props => {
    if (props.isCorrect) return '#28a745';
    if (props.isIncorrect) return '#dc3545';
    return props.isDragging ? '#007bff' : '#dee2e6';
  }};
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: grab;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  transition: all 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    cursor: grabbing;
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DropZone = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
`;

const DropSlot = styled.div<{ isOver?: boolean; hasWord?: boolean }>`
  background: ${props => props.isOver ? '#e3f2fd' : props.hasWord ? '#f8f9fa' : '#ffffff'};
  border: 2px dashed ${props => props.isOver ? '#2196f3' : props.hasWord ? '#28a745' : '#dee2e6'};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    min-height: 44px;
  }
`;

const SlotNumber = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.variant === 'primary' ? '#0056b3' : '#545b62'};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResultMessage = styled.div<{ isCorrect: boolean }>`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  background: ${props => props.isCorrect ? '#d4edda' : '#f8d7da'};
  color: ${props => props.isCorrect ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.isCorrect ? '#c3e6cb' : '#f5c6cb'};
  font-weight: 500;
`;

const DragIndicator = styled.div<{ x: number; y: number }>`
  position: fixed;
  left: ${props => props.x - 50}px;
  top: ${props => props.y - 25}px;
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1000;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  transform: scale(1.1);
  transition: none;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const DraggingWord = styled.div<{ x: number; y: number }>`
  position: fixed;
  left: ${props => props.x - 50}px;
  top: ${props => props.y - 25}px;
  background: #f8f9fa;
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  z-index: 1001;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  transform: scale(1.05);
  transition: none;
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const AlphabeticalOrderingTab: React.FC = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [dropSlots, setDropSlots] = useState<(string | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [checked, setChecked] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);

  // Generate random words from the entire words.json database
  const generateRandomWords = () => {
    const allWords = words.categories.flatMap(category => 
      category.wordPairs.map(pair => pair.english)
    );
    
    // Filter out phrases/sentences (words with spaces) and remove duplicates
    const singleWords = Array.from(new Set(allWords.filter(word => !word.includes(' '))));
    const shuffled = singleWords.sort(() => Math.random() - 0.5);
    
    // Select 10 random words
    return shuffled.slice(0, 10);
  };

  const correctOrder = [...selectedWords].sort();

  // Initialize with random words on component mount
  useEffect(() => {
    const randomWords = generateRandomWords();
    setSelectedWords(randomWords);
    setDropSlots(new Array(randomWords.length).fill(null));
    setShowResult(false);
    setChecked(false);
  }, []);

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent, word: string) => {
    e.preventDefault();
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setDragPosition({ x: touch.clientX, y: touch.clientY });
    setDraggedWord(word);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !touchStartPos) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPos.x);
    const deltaY = Math.abs(touch.clientY - touchStartPos.y);
    
    // If moved more than 10px, consider it a drag
    if (deltaX > 10 || deltaY > 10) {
      e.preventDefault();
      // Update drag position for visual feedback
      setDragPosition({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element) {
      const dropSlot = element.closest('[data-slot-index]');
      if (dropSlot) {
        const slotIndex = parseInt(dropSlot.getAttribute('data-slot-index') || '0');
        handleWordDrop(draggedWord, slotIndex);
      }
    }
    
    setIsDragging(false);
    setDraggedWord(null);
    setTouchStartPos(null);
    setDragPosition(null);
  };

  // Desktop drag handlers
  const handleDragStart = (e: React.DragEvent, word: string) => {
    setDraggedWord(word);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault();
    handleWordDrop(draggedWord, slotIndex);
  };

  // Common drop handler for both touch and drag
  const handleWordDrop = (word: string | null, slotIndex: number) => {
    if (word) {
      const newSlots = [...dropSlots];
      
      // Remove word from its current position if it exists
      const currentIndex = newSlots.indexOf(word);
      if (currentIndex !== -1) {
        newSlots[currentIndex] = null;
      }
      
      // Add word to new position
      newSlots[slotIndex] = word;
      setDropSlots(newSlots);
    }
    
    setDraggedWord(null);
  };

  const handleCheck = () => {
    setChecked(true);
    const isOrderCorrect = dropSlots.every((word, index) => word === correctOrder[index]);
    setIsCorrect(isOrderCorrect);
    setShowResult(true);
  };

  const handleReset = () => {
    const randomWords = generateRandomWords();
    setSelectedWords(randomWords);
    setDropSlots(new Array(randomWords.length).fill(null));
    setShowResult(false);
    setChecked(false);
  };


  const getWordStatus = (word: string, index: number) => {
    if (!checked) return {};
    
    const isCorrectPosition = word === correctOrder[index];
    return {
      isCorrect: isCorrectPosition,
      isIncorrect: !isCorrectPosition
    };
  };

  const availableWords = selectedWords.filter(word => !dropSlots.includes(word));

  return (
    <Container>
      <Title>🔤 Alphabetical Ordering Challenge</Title>
      <Instructions>
        Drag the words from the list below into the numbered slots in alphabetical order.<br />
        When you're done, click "Check Answer" to see how you did!
      </Instructions>

      {/* Dragging word for mobile */}
      {isDragging && draggedWord && dragPosition && (
        <DraggingWord x={dragPosition.x} y={dragPosition.y}>
          {draggedWord}
        </DraggingWord>
      )}

      <ExerciseContainer>
        <ExerciseTitle>Order the following words according to ABC order</ExerciseTitle>
        
        <WordList>
          {availableWords.map((word, index) => (
            <WordItem
              key={`${word}-${index}`}
              draggable
              onDragStart={(e) => handleDragStart(e, word)}
              onTouchStart={(e) => handleTouchStart(e, word)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                opacity: isDragging && draggedWord === word ? 0 : 1,
                transform: isDragging && draggedWord === word ? 'scale(0.95)' : 'scale(1)'
              }}
              {...getWordStatus(word, -1)}
            >
              {word}
            </WordItem>
          ))}
        </WordList>

        <DropZone>
          {dropSlots.map((word, index) => (
            <DropSlot
              key={index}
              data-slot-index={index}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onTouchStart={(e) => handleTouchStart(e, word || '')}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              hasWord={!!word}
            >
              <SlotNumber>{index + 1}</SlotNumber>
              {word && (
                <WordItem
                  draggable
                  onDragStart={(e) => handleDragStart(e, word)}
                  onTouchStart={(e) => handleTouchStart(e, word)}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    opacity: isDragging && draggedWord === word ? 0 : 1,
                    transform: isDragging && draggedWord === word ? 'scale(0.95)' : 'scale(1)'
                  }}
                  {...getWordStatus(word, index)}
                >
                  {word}
                </WordItem>
              )}
            </DropSlot>
          ))}
        </DropZone>

        {showResult && (
          <ResultMessage isCorrect={isCorrect}>
            {isCorrect 
              ? `🎉 Excellent! All words are in the correct alphabetical order!`
              : `❌ Some words are not in the correct order. Try again!`
            }
          </ResultMessage>
        )}

        <ButtonContainer>
          <Button onClick={handleReset}>New Words</Button>
          <Button 
            onClick={handleCheck}
            disabled={dropSlots.some(slot => slot === null)}
            variant="primary"
          >
            Check Answer
          </Button>
        </ButtonContainer>
      </ExerciseContainer>
    </Container>
  );
};

export default AlphabeticalOrderingTab;
