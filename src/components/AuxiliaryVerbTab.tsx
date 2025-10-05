import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import auxiliaryVerbs from '../data/auxiliaryVerbs.json';

const Container = styled.div`
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
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div<{ isFlipped: boolean }>`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  perspective: 1000px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:hover {
    transform: ${props => props.isFlipped ? 'rotateY(180deg) scale(1.02)' : 'scale(1.02)'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100px;
  }
`;

const CardContent = styled.div<{ isFlipped: boolean }>`
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.3s ease;
  width: 100%;
`;

const Sentence = styled.div`
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AuxiliaryVerb = styled.div`
  font-size: 2rem;
  color: #27ae60;
  font-weight: bold;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Hint = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;
  font-style: italic;
  margin-top: 0.5rem;
`;

const ProgressContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProgressText = styled.div`
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 500;
`;

const FlipAllButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;
  display: block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const AuxiliaryVerbTab: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [allCardsFlipped, setAllCardsFlipped] = useState(false);

  const flipCard = (index: number) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(index)) {
        newFlipped.delete(index);
      } else {
        newFlipped.add(index);
      }
      return newFlipped;
    });
  };

  const flipAllCards = () => {
    if (allCardsFlipped) {
      setFlippedCards(new Set());
      setAllCardsFlipped(false);
    } else {
      const allIndices = new Set(auxiliaryVerbs.map((_, index) => index));
      setFlippedCards(allIndices);
      setAllCardsFlipped(true);
    }
  };

  useEffect(() => {
    if (flippedCards.size === auxiliaryVerbs.length) {
      setAllCardsFlipped(true);
    } else {
      setAllCardsFlipped(false);
    }
  }, [flippedCards]);

  return (
    <Container>
      <Title>🔤 Auxiliary Verb Challenge</Title>
      <Instructions>
        Click on each card to reveal the correct auxiliary verb (is, am, are).<br />
        Practice using the right verb in each sentence!
      </Instructions>
      
      <ProgressContainer>
        <ProgressText>
          {flippedCards.size} / {auxiliaryVerbs.length} cards revealed
        </ProgressText>
      </ProgressContainer>

      <CardsGrid>
        {auxiliaryVerbs.map((item, index) => (
          <Card
            key={item.id}
            isFlipped={flippedCards.has(index)}
            onClick={() => flipCard(index)}
          >
            <CardContent isFlipped={flippedCards.has(index)}>
              {!flippedCards.has(index) ? (
                <>
                  <Sentence>{item.sentence}</Sentence>
                  <Hint>Click to reveal the answer</Hint>
                </>
              ) : (
                <>
                  <Sentence>{item.sentence.replace('___', item.correctAnswer)}</Sentence>
                  <AuxiliaryVerb>{item.correctAnswer}</AuxiliaryVerb>
                  <Hint>Click to hide</Hint>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </CardsGrid>

      <FlipAllButton onClick={flipAllCards}>
        {allCardsFlipped ? '🔄 Hide All Answers' : '👁️ Show All Answers'}
      </FlipAllButton>
    </Container>
  );
};

export default AuxiliaryVerbTab;
