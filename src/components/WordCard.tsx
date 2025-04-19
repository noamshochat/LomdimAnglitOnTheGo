import React, { useState } from 'react';
import styled from 'styled-components';

interface WordCardProps {
  english: string;
  hebrew: string;
}

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Text = styled.div<{ isHebrew?: boolean }>`
  font-size: ${props => props.isHebrew ? '2rem' : '1.8rem'};
  color: #2c3e50;
  font-weight: 500;
  direction: ${props => props.isHebrew ? 'rtl' : 'ltr'};
  margin-bottom: 1rem;
`;

const SpeakerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #2c3e50;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-size: 1.5rem;
  display: ${props => props.hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const WordCard: React.FC<WordCardProps> = ({ english, hebrew }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking the speaker
    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card onClick={() => setIsFlipped(!isFlipped)}>
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