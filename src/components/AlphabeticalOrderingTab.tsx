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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
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
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    min-height: 50px;
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

const AlphabeticalOrderingTab: React.FC = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [dropSlots, setDropSlots] = useState<(string | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [checked, setChecked] = useState(false);

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
    
    if (draggedWord) {
      const newSlots = [...dropSlots];
      
      // Remove word from its current position if it exists
      const currentIndex = newSlots.indexOf(draggedWord);
      if (currentIndex !== -1) {
        newSlots[currentIndex] = null;
      }
      
      // Add word to new position
      newSlots[slotIndex] = draggedWord;
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

      <ExerciseContainer>
        <ExerciseTitle>Order the following words according to ABC order</ExerciseTitle>
        
        <WordList>
          {availableWords.map((word, index) => (
            <WordItem
              key={`${word}-${index}`}
              draggable
              onDragStart={(e) => handleDragStart(e, word)}
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
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              hasWord={!!word}
            >
              <SlotNumber>{index + 1}</SlotNumber>
              {word && (
                <WordItem
                  draggable
                  onDragStart={(e) => handleDragStart(e, word)}
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
