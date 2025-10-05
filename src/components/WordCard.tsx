import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface WordCardProps {
  english: string;
  hebrew: string;
  forceFlipped?: boolean;
}

const Card = styled.button<{ isFlipped: boolean }>`
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  perspective: 1000px;
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
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 120px;
    margin: 0;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 1.2rem;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:hover {
    transform: ${props => props.isFlipped ? 'rotateY(180deg) scale(1.02)' : 'scale(1.02)'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
    
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  }
`;

const CardContent = styled.div<{ isFlipped: boolean }>`
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div<{ isHebrew?: boolean }>`
  font-size: ${props => props.isHebrew ? '1.8rem' : '1.6rem'};
  color: #2c3e50;
  font-weight: 500;
  direction: ${props => props.isHebrew ? 'rtl' : 'ltr'};
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: ${props => props.isHebrew ? '1.6rem' : '1.4rem'};
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.isHebrew ? '1.4rem' : '1.2rem'};
    margin-bottom: 0.8rem;
    font-weight: 600;
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
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background-color: rgba(44, 62, 80, 0.1);
  }

  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px;
    min-width: 48px;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px;
    min-width: 52px;
    min-height: 52px;
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  const handleSpeakerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      speak(e as any);
    }
  };

  return (
    <Card 
      isFlipped={isFlipped}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyDown}
      aria-label={`${english} - Click to flip and see Hebrew translation`}
      role="button"
      tabIndex={0}
    >
      <CardContent isFlipped={isFlipped}>
        <Text isHebrew={isFlipped}>
          {isFlipped ? hebrew : english}
        </Text>
        <SpeakerButton 
          onClick={speak} 
          onKeyDown={handleSpeakerKeyDown}
          hidden={isFlipped}
          aria-label={`Pronounce ${english}`}
          title="Click to hear pronunciation"
          tabIndex={isFlipped ? -1 : 0}
        >
          🔊
        </SpeakerButton>
      </CardContent>
    </Card>
  );
};

export default WordCard; 