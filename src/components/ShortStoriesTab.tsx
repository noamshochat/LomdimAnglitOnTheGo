import React, { useState } from 'react';
import styled from 'styled-components';
import shortStories from '../data/shortStories.json';

const StoriesContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StoryCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StoryTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StoryText = styled.div`
  color: #2c3e50;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  white-space: pre-line;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;


const DifficultyBadge = styled.span`
  display: inline-block;
  background: linear-gradient(45deg, #4CAF50, #45a049);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  width: 100%;
`;

const Instructions = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const InstructionsTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const InstructionsText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;

const ShortStoriesTab: React.FC = () => {

  const renderStoryText = (text: string, highlightedWords: string[]) => {
    let processedText = text;
    
    highlightedWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      processedText = processedText.replace(regex, `<span style="background-color: #ffeb3b; padding: 0.2rem 0.4rem; border-radius: 4px; font-weight: bold; color: #2c3e50;">${word}</span>`);
    });
    
    return processedText;
  };

  return (
    <StoriesContainer>
      <Title>📖 Short Stories</Title>
      
      <Description>
        Read these simple stories to practice English vocabulary. 
        Key words are highlighted in yellow to help you learn!
      </Description>

      <Instructions>
        <InstructionsTitle>How to Use These Stories</InstructionsTitle>
        <InstructionsText>
          Read each story carefully. The highlighted words are important vocabulary words. 
          Try to understand the meaning of each sentence. These stories use simple words 
          that are perfect for English learners!
        </InstructionsText>
      </Instructions>

      <StoriesGrid>
        {shortStories.stories.map((story) => (
          <StoryCard key={story.id}>
            <StoryTitle>{story.title}</StoryTitle>
            <StoryText 
              dangerouslySetInnerHTML={{ 
                __html: renderStoryText(story.text, story.highlightedWords) 
              }}
            />
            <DifficultyBadge>
              📚 {story.difficulty.charAt(0).toUpperCase() + story.difficulty.slice(1)} Level
            </DifficultyBadge>
          </StoryCard>
        ))}
      </StoriesGrid>
    </StoriesContainer>
  );
};

export default ShortStoriesTab;
