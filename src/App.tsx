import React, { useState } from 'react';
import styled from 'styled-components';
import WordCard from './components/WordCard';
import ExamTab from './components/ExamTab';
import StoryTab from './components/StoryTab';
import StoryTab2 from './components/StoryTab2';
import words from './data/words.json';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Instructions = styled.p`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.isActive ? '#2c3e50' : 'white'};
  color: ${props => props.isActive ? 'white' : '#2c3e50'};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #2c3e50;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'words' | 'exam' | 'story1' | 'story2'>('words');

  return (
    <AppContainer>
      <Header>
        <Title>English</Title>
        <TabContainer>
          <TabButton 
            isActive={activeTab === 'words'} 
            onClick={() => setActiveTab('words')}
          >
            Words
          </TabButton>
          <TabButton 
            isActive={activeTab === 'exam'} 
            onClick={() => setActiveTab('exam')}
          >
            Words Exam
          </TabButton>
          <TabButton 
            isActive={activeTab === 'story1'} 
            onClick={() => setActiveTab('story1')}
          >
            Story-1
          </TabButton>
          <TabButton 
            isActive={activeTab === 'story2'} 
            onClick={() => setActiveTab('story2')}
          >
            Story-2
          </TabButton>
        </TabContainer>
      </Header>
      <Content>
        {activeTab === 'words' && (
          <>
            <Instructions>
              Click on a card to reveal its Hebrew translation.
              <br />
              Click the speaker icon 🔊 to hear the English pronunciation.
            </Instructions>
            {words.categories.map((category, categoryIndex) => (
              <CategoryContainer key={categoryIndex}>
                <CategoryTitle>{category.name}</CategoryTitle>
                <CardGrid>
                  {category.wordPairs.map((pair, index) => (
                    <WordCard
                      key={index}
                      english={pair.english}
                      hebrew={pair.hebrew}
                    />
                  ))}
                </CardGrid>
              </CategoryContainer>
            ))}
          </>
        )}
        {activeTab === 'exam' && <ExamTab />}
        {activeTab === 'story1' && <StoryTab />}
        {activeTab === 'story2' && <StoryTab2 />}
      </Content>
    </AppContainer>
  );
};

export default App; 