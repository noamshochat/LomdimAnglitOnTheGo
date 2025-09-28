import React, { useState } from 'react';
import styled from 'styled-components';
import WordCard from './WordCard';
import words from '../data/words.json';

const ThirdGradeContainer = styled.div`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
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
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
`;

const Instructions = styled.p`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
    padding: 0 0.8rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const FlipAllButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #2c3e50;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const ThirdGradeTab: React.FC = () => {
  const [allCardsFlipped, setAllCardsFlipped] = useState(false);

  // Get Third grade words
  const thirdGradeCategory = words.categories.find(category => category.name === "Third grade");
  const thirdGradeWords = thirdGradeCategory?.wordPairs || [];

  return (
    <ThirdGradeContainer>
      <Title>Third Grade Words 📚</Title>
      <Instructions>
        Click on a card to reveal its Hebrew translation.<br />
        Click the speaker icon 🔊 to hear the English pronunciation.
      </Instructions>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <FlipAllButton onClick={() => setAllCardsFlipped(!allCardsFlipped)}>
          {allCardsFlipped ? 'Show English' : 'Show Hebrew'}
        </FlipAllButton>
      </div>
      <CardGrid>
        {thirdGradeWords.map((pair, index) => (
          <WordCard
            key={index}
            english={pair.english}
            hebrew={pair.hebrew}
            forceFlipped={allCardsFlipped}
          />
        ))}
      </CardGrid>
    </ThirdGradeContainer>
  );
};

export default ThirdGradeTab;
