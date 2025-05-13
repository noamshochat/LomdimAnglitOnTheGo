import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface WordCardProps {
  english: string;
  hebrew: string;
  forceFlipped?: boolean;
}

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0.5rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100px;
    margin: 0.3rem;
  }
  
  @media (max-width: 480px) {
    min-height: 90px;
    padding: 0.8rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const Text = styled.div<{ isHebrew?: boolean }>`
  font-size: ${props => props.isHebrew ? '1.8rem' : '1.6rem'};
  color: #2c3e50;
  font-weight: 500;
  direction: ${props => props.isHebrew ? 'rtl' : 'ltr'};
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (max-width: 768px) {
    font-size: ${props => props.isHebrew ? '1.5rem' : '1.3rem'};
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.isHebrew ? '1.3rem' : '1.1rem'};
    margin-bottom: 0.8rem;
  }
`;

const SpeakerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #2c3e50;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-size: 1.2rem;
  display: ${props => props.hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 4px;
  }
`;

const WordCard: React.FC<WordCardProps> = ({ english, hebrew, forceFlipped }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (forceFlipped !== undefined) {
      setIsFlipped(forceFlipped);
    }
  }, [forceFlipped]);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking the speaker
    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card onClick={() => forceFlipped === undefined && setIsFlipped(!isFlipped)}>
      <Text isHebrew={isFlipped}>
        {isFlipped ? hebrew : english}
      </Text>
      <SpeakerButton 
        onClick={speak} 
        hidden={isFlipped}
        title="Click to hear pronunciation"
      >
        🔊
      </SpeakerButton>
    </Card>
  );
};

export default WordCard; 