import React, { useState } from 'react';
import styled from 'styled-components';
import WordCard from './components/WordCard';
import ThirdGradeTab from './components/ThirdGradeTab';
import FifthGradeTab from './components/FifthGradeTab';
import StoryTab from './components/StoryTab';
import StoryTab2 from './components/StoryTab2';
import PicturePracticeTab from './components/PicturePracticeTab';
import FinalChallengeTab from './components/FinalExamTab';
import AuxiliaryVerbTab from './components/AuxiliaryVerbTab';
import AccessibilityStatement from './components/AccessibilityStatement';
import ShortSentencesTab from './components/ShortStoriesTab';
import words from './data/words.json';
import { trackPageView, trackEvent } from './utils/analytics';

const AppContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
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

const Instructions = styled.p`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    line-height: 1.7;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    padding: 0 0.8rem;
    line-height: 1.8;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    flex-direction: column;
    align-items: center;
  }
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
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    min-height: 52px;
    white-space: normal;
    text-align: center;
  }
`;

const DisabledTabButton = styled(TabButton)`
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
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
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
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

const SideMenu = styled.div`
  width: 220px;
  background: #f7f9fa;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem 0.5rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
  
  @media (max-width: 900px) {
    width: 100px;
    margin-right: 1rem;
    padding: 0.5rem 0.2rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.4rem;
    border-radius: 10px;
  }
`;

const MenuButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? '#2c3e50' : 'white'};
  color: ${props => props.isActive ? 'white' : '#2c3e50'};
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 0.3rem;
  text-align: left;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  min-height: 44px;
  
  &:hover {
    background: #e0e0e0;
    color: #2c3e50;
  }
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    text-align: center;
    flex: 1;
    min-width: 100px;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
    min-width: 90px;
    min-height: 52px;
  }
`;

const WordsLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
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

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const BackButton = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #95a5a6;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 44px;
  
  &:hover {
    background-color: #7f8c8d;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    min-height: 52px;
  }
`;

const HomeButton = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 44px;
  
  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    min-height: 52px;
  }
`;

const MainMenuGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MenuCard = styled.button`
  background: white;
  border: none;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 100px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    min-height: 90px;
    border-radius: 10px;
  }
`;

const MenuCardTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const MenuCardDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const DisabledMenuCard = styled(MenuCard)`
  opacity: 0.5;
  cursor: not-allowed;
  
  &:hover {
    transform: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: none;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

const CategoryCard = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? '#2c3e50' : 'white'};
  color: ${props => props.isActive ? 'white' : '#2c3e50'};
  border: none;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 70px;
    font-size: 0.85rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    min-height: 60px;
    font-size: 0.8rem;
    border-radius: 8px;
  }
`;

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'words' | 'thirdGrade' | 'fifthGrade' | 'leArIrEr' | 'leArIrErExam' | 'finalExam' | 'auxiliaryVerbs' | 'accessibility' | 'shortSentences'>('main');
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [allCardsFlipped, setAllCardsFlipped] = useState(false);

  // Track page views for Google Analytics
  React.useEffect(() => {
    const pageNames = {
      'main': 'Main Menu',
      'words': 'Words Practice',
      'thirdGrade': 'Third Grade Words',
      'fifthGrade': 'Fifth Grade Words',
      'leArIrEr': 'le, ar, ir, er Words',
      'leArIrErExam': 'le, ar, ir, er Exam',
      'finalExam': 'Final Challenge',
      'auxiliaryVerbs': 'Auxiliary Verb Challenge',
      'accessibility': 'Accessibility Statement',
      'shortSentences': 'Short Sentences'
    };
    
    trackPageView(currentView, pageNames[currentView]);
  }, [currentView]);

  // Sort categories alphabetically by name
  const sortedCategories = [...words.categories].sort((a, b) => a.name.localeCompare(b.name));

  // For le, ar, ir, er Words tab (excluding sentences)
  const leArIrErWords = words.categories
    .filter(category => category.name !== "Sentences")
    .flatMap(category =>
      category.wordPairs.filter(pair =>
        /(?:le|ar|ir|er)$/i.test(pair.english)
      ).map(pair => ({ ...pair, category: category.name }))
    );

  // For le, ar, ir, er Words Exam tab
  const leArIrErEndings = ['le', 'ar', 'ir', 'er'];
  const leArIrErExamQuestions = React.useMemo(() => {
    const all = leArIrErWords.map(pair => {
      const ending = leArIrErEndings.find(e => pair.english.toLowerCase().endsWith(e));
      const base = ending ? pair.english.slice(0, -ending.length) : pair.english;
      return {
        base,
        correctEnding: ending,
        fullWord: pair.english,
        hebrew: pair.hebrew
      };
    });
    return all.sort(() => Math.random() - 0.5).slice(0, 20);
  }, [leArIrErWords.length]);

  // Quiz state for le, ar, ir, er Words Exam
  const [leExamIdx, setLeExamIdx] = React.useState(0);
  const [leExamSelected, setLeExamSelected] = React.useState<string | null>(null);
  const [leExamShowAnswer, setLeExamShowAnswer] = React.useState(false);
  const [leExamScore, setLeExamScore] = React.useState(0);
  const [leExamComplete, setLeExamComplete] = React.useState(false);

  const handleLeExamSelect = (ending: string) => {
    if (!leExamShowAnswer) {
      setLeExamSelected(ending);
      setLeExamShowAnswer(true);
      if (ending === leArIrErExamQuestions[leExamIdx].correctEnding) {
        setLeExamScore(s => s + 1);
      }
    }
  };

  const handleLeExamNext = () => {
    setLeExamSelected(null);
    setLeExamShowAnswer(false);
    if (leExamIdx === leArIrErExamQuestions.length - 1) {
      setLeExamComplete(true);
    } else {
      setLeExamIdx(i => i + 1);
    }
  };

  const handleLeExamRestart = () => {
    setLeExamIdx(0);
    setLeExamSelected(null);
    setLeExamShowAnswer(false);
    setLeExamScore(0);
    setLeExamComplete(false);
  };

  // For menu: -1 means 'All Words', 0+ means specific category
  const isAllWords = selectedCategoryIdx === -1;
  const selectedCategory = sortedCategories[selectedCategoryIdx];

  const [showCategorySelection, setShowCategorySelection] = useState(true);

  const handleBack = () => {
    if (currentView === 'words') {
      if (showCategorySelection) {
        setCurrentView('main');
      } else {
        setShowCategorySelection(true);
      }
    } else if (currentView === 'thirdGrade' || currentView === 'fifthGrade' || currentView === 'shortSentences' || currentView === 'auxiliaryVerbs') {
      setCurrentView('main');
    } else {
      setCurrentView('words');
    }
  };

  const handleHome = () => {
    setCurrentView('main');
  };

  return (
    <AppContainer>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header>
        <Title>English-Hebrew cards for kids</Title>
        {currentView !== 'main' && (
          <NavigationContainer>
            <BackButton onClick={handleBack}>
              ← Back
            </BackButton>
            <HomeButton onClick={handleHome}>
              🏠 Home
            </HomeButton>
          </NavigationContainer>
        )}
      </Header>
      <Content id="main-content">
        {currentView === 'main' && (
          <MainMenuGrid role="navigation" aria-label="Main navigation menu">
            <MenuCard 
              onClick={() => setCurrentView('words')}
              aria-label="Study vocabulary words by category"
            >
              <MenuCardTitle>📚 Words</MenuCardTitle>
              <MenuCardDescription>Study vocabulary by category</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('thirdGrade')}
              aria-label="Study Third grade vocabulary words"
            >
              <MenuCardTitle>📖 Third Grade</MenuCardTitle>
              <MenuCardDescription>Age-appropriate vocabulary for third grade</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('fifthGrade')}
              aria-label="Study Fifth grade vocabulary words"
            >
              <MenuCardTitle>🎓 Fifth Grade</MenuCardTitle>
              <MenuCardDescription>Age-appropriate vocabulary for fifth grade</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('leArIrEr')}
              aria-label="Study words with le, ar, ir, er endings"
            >
              <MenuCardTitle>🔤 le, ar, ir, er Words</MenuCardTitle>
              <MenuCardDescription>Special focus on word endings</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('leArIrErExam')}
              aria-label="Test your knowledge of le, ar, ir, er word endings"
            >
              <MenuCardTitle>📝 le, ar, ir, er Exam</MenuCardTitle>
              <MenuCardDescription>Test your knowledge of word endings</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('auxiliaryVerbs')}
              aria-label="Practice auxiliary verbs is, am, are in sentences"
            >
              <MenuCardTitle>🔤 Auxiliary Verb Challenge</MenuCardTitle>
              <MenuCardDescription>Practice is, am, are in sentences</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('shortSentences')}
              aria-label="Read short Sentences to practice English"
            >
              <MenuCardTitle>📖 Short Sentences</MenuCardTitle>
              <MenuCardDescription>Simple Sentences with highlighted vocabulary</MenuCardDescription>
            </MenuCard>
            <MenuCard 
              onClick={() => setCurrentView('finalExam')}
              aria-label="Take comprehensive final challenge with all vocabulary"
            >
              <MenuCardTitle>🎓 Final Challenge</MenuCardTitle>
              <MenuCardDescription>Comprehensive test of all vocabulary</MenuCardDescription>
            </MenuCard>
            <DisabledMenuCard aria-disabled="true">
              <MenuCardTitle>🖼️ Word Practice in Pictures</MenuCardTitle>
              <MenuCardDescription>Coming soon...</MenuCardDescription>
            </DisabledMenuCard>
            <DisabledMenuCard aria-disabled="true">
              <MenuCardTitle>📖 Story-1</MenuCardTitle>
              <MenuCardDescription>Coming soon...</MenuCardDescription>
            </DisabledMenuCard>
            <DisabledMenuCard aria-disabled="true">
              <MenuCardTitle>📖 Story-2</MenuCardTitle>
              <MenuCardDescription>Coming soon...</MenuCardDescription>
            </DisabledMenuCard>
            <MenuCard 
              onClick={() => setCurrentView('accessibility')}
              aria-label="View accessibility statement and features"
            >
              <MenuCardTitle>♿ Accessibility</MenuCardTitle>
              <MenuCardDescription>Learn about our accessibility features</MenuCardDescription>
            </MenuCard>
          </MainMenuGrid>
        )}
        {currentView === 'words' && (
          <>
            {showCategorySelection ? (
              <div style={{ width: '100%' }}>
                <Instructions>
                  Choose a category to study vocabulary words
                </Instructions>
                <CategoryGrid>
                  <CategoryCard
                    isActive={isAllWords}
                    onClick={() => {
                      setSelectedCategoryIdx(-1);
                      setShowCategorySelection(false);
                    }}
                  >
                    📚 All Words
                  </CategoryCard>
                  {sortedCategories.map((cat, idx) => (
                    <CategoryCard
                      key={cat.name}
                      isActive={selectedCategoryIdx === idx}
                      onClick={() => {
                        setSelectedCategoryIdx(idx);
                        setShowCategorySelection(false);
                      }}
                    >
                      {cat.name}
                    </CategoryCard>
                  ))}
                </CategoryGrid>
              </div>
            ) : (
              <div style={{ width: '100%' }}>
                <Instructions>
                  Click on a card to reveal its Hebrew translation.<br />
                  Click the speaker icon 🔊 to hear the English pronunciation.
                </Instructions>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <FlipAllButton onClick={() => setAllCardsFlipped(!allCardsFlipped)}>
                    {allCardsFlipped ? 'Show English' : 'Show Hebrew'}
                  </FlipAllButton>
                </div>
                {isAllWords ? (
                  sortedCategories.map((category, categoryIndex) => (
                    <CategoryContainer key={categoryIndex}>
                      <CategoryTitle>{category.name}</CategoryTitle>
                      <CardGrid>
                        {category.wordPairs.map((pair, index) => (
                          <WordCard
                            key={index}
                            english={pair.english}
                            hebrew={pair.hebrew}
                            forceFlipped={allCardsFlipped}
                          />
                        ))}
                      </CardGrid>
                    </CategoryContainer>
                  ))
                ) : (
                  <>
                    <CategoryTitle>{selectedCategory.name}</CategoryTitle>
                    <CardGrid>
                      {selectedCategory.wordPairs.map((pair, index) => (
                        <WordCard
                          key={index}
                          english={pair.english}
                          hebrew={pair.hebrew}
                          forceFlipped={allCardsFlipped}
                        />
                      ))}
                    </CardGrid>
                  </>
                )}
              </div>
            )}
          </>
        )}
        {currentView === 'thirdGrade' && <ThirdGradeTab />}
        {currentView === 'fifthGrade' && <FifthGradeTab />}
        {currentView === 'finalExam' && <FinalChallengeTab />}
        {currentView === 'shortSentences' && <ShortSentencesTab />}
        {currentView === 'auxiliaryVerbs' && <AuxiliaryVerbTab />}
        {currentView === 'accessibility' && <AccessibilityStatement />}
        {currentView === 'leArIrEr' && (
          <div style={{ width: '100%' }}>
            <Instructions>
              Words ending with <b>le</b>, <b>ar</b>, <b>ir</b>, or <b>er</b> from all topics.<br />
              Click on a card to reveal its Hebrew translation.<br />
              Click the speaker icon 🔊 to hear the English pronunciation.
            </Instructions>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <FlipAllButton onClick={() => setAllCardsFlipped(!allCardsFlipped)}>
                {allCardsFlipped ? 'Show English' : 'Show Hebrew'}
              </FlipAllButton>
            </div>
            <CategoryTitle>le, ar, ir, er Words</CategoryTitle>
            <CardGrid>
              {leArIrErWords.length === 0 ? (
                <div>No matching words found.</div>
              ) : (
                leArIrErWords.map((pair, index) => (
                  <WordCard
                    key={index}
                    english={pair.english}
                    hebrew={pair.hebrew}
                    forceFlipped={allCardsFlipped}
                  />
                ))
              )}
            </CardGrid>
          </div>
        )}
        {currentView === 'leArIrErExam' && (
          <div style={{ width: '100%' }}>
            <Instructions>
              For each question, choose the correct ending (<b>le</b>, <b>ar</b>, <b>ir</b>, or <b>er</b>) to complete the English word.<br />
              Click the speaker icon 🔊 to hear the full word.<br />
            </Instructions>
            <CategoryTitle>le, ar, ir, er Words Exam</CategoryTitle>
            {leExamComplete ? (
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <h2>Quiz Complete!</h2>
                <p>You got {leExamScore} out of {leArIrErExamQuestions.length} correct.</p>
                <button onClick={handleLeExamRestart} style={{ padding: '0.8rem 1.5rem', borderRadius: 8, background: '#2c3e50', color: 'white', border: 'none', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>Take Exam Again</button>
              </div>
            ) : (
              <div style={{ maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: 15, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
                  {leExamIdx + 1} / {leArIrErExamQuestions.length}
                </h3>
                <div style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#2c3e50' }}>
                  {leArIrErExamQuestions[leExamIdx].base}
                  <span style={{ color: '#bbb', fontWeight: 400 }}>
                    ___
                  </span>
                </div>
                <button
                  onClick={() => {
                    const utter = new window.SpeechSynthesisUtterance(leArIrErExamQuestions[leExamIdx].fullWord);
                    utter.lang = 'en-US';
                    
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
                      utter.voice = femaleVoice;
                    }
                    
                    // Set child-friendly speech rate (slightly slower)
                    utter.rate = 0.8;
                    utter.pitch = 1.1; // Slightly higher pitch for child-friendly sound
                    
                    window.speechSynthesis.speak(utter);
                  }}
                  style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', marginBottom: '1rem' }}
                  title="Click to hear pronunciation"
                >
                  🔊
                </button>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  {leArIrErEndings.map(ending => (
                    <button
                      key={ending}
                      onClick={() => handleLeExamSelect(ending)}
                      disabled={leExamShowAnswer}
                      style={{
                        padding: '0.8rem 1.5rem',
                        borderRadius: 8,
                        background: leExamSelected === ending ? (ending === leArIrErExamQuestions[leExamIdx].correctEnding ? '#2ecc71' : '#e74c3c') : '#f7f9fa',
                        color: leExamSelected === ending ? 'white' : '#2c3e50',
                        border: 'none',
                        fontSize: '1.1rem',
                        cursor: leExamShowAnswer ? 'default' : 'pointer',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}
                    >
                      {ending}
                    </button>
                  ))}
                </div>
                {leExamShowAnswer && (
                  <div style={{ marginBottom: '1.2rem', color: leExamSelected === leArIrErExamQuestions[leExamIdx].correctEnding ? '#2ecc71' : '#e74c3c', fontWeight: 500 }}>
                    {leExamSelected === leArIrErExamQuestions[leExamIdx].correctEnding ? 'Correct! Well done!' : `Incorrect. The correct ending is: ${leArIrErExamQuestions[leExamIdx].correctEnding}`}
                  </div>
                )}
                {leExamShowAnswer && (
                  <button onClick={handleLeExamNext} style={{ padding: '0.8rem 1.5rem', borderRadius: 8, background: '#2ecc71', color: 'white', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>
                    {leExamIdx === leArIrErExamQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </Content>
    </AppContainer>
  );
};

export default App; 