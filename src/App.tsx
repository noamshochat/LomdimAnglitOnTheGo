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
  &:hover {
    background: #e0e0e0;
    color: #2c3e50;
  }
  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
  }
`;

const WordsLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'words' | 'exam' | 'story1' | 'story2' | 'leArIrEr' | 'leArIrErExam'>('words');
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);

  // Sort categories alphabetically by name
  const sortedCategories = [...words.categories].sort((a, b) => a.name.localeCompare(b.name));

  // For le, ar, ir, er Words tab
  const leArIrErWords = words.categories.flatMap(category =>
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
            Words Practice
          </TabButton>
          <DisabledTabButton isActive={false}>Story-1</DisabledTabButton>
          <DisabledTabButton isActive={false}>Story-2</DisabledTabButton>
          <TabButton 
            isActive={activeTab === 'leArIrEr'} 
            onClick={() => setActiveTab('leArIrEr')}
          >
            le, ar, ir, er Words
          </TabButton>
          <TabButton 
            isActive={activeTab === 'leArIrErExam'} 
            onClick={() => setActiveTab('leArIrErExam')}
          >
            le, ar, ir, er Words Exam
          </TabButton>
        </TabContainer>
      </Header>
      <Content>
        {activeTab === 'words' && (
          <WordsLayout>
            <SideMenu>
              <MenuButton
                isActive={isAllWords}
                onClick={() => setSelectedCategoryIdx(-1)}
              >
                All Words
              </MenuButton>
              {sortedCategories.map((cat, idx) => (
                <MenuButton
                  key={cat.name}
                  isActive={selectedCategoryIdx === idx}
                  onClick={() => setSelectedCategoryIdx(idx)}
                >
                  {cat.name}
                </MenuButton>
              ))}
            </SideMenu>
            <div style={{ flex: 1 }}>
              <Instructions>
                Click on a card to reveal its Hebrew translation.<br />
                Click the speaker icon 🔊 to hear the English pronunciation.
              </Instructions>
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
                      />
                    ))}
                  </CardGrid>
                </>
              )}
            </div>
          </WordsLayout>
        )}
        {activeTab === 'exam' && <ExamTab />}
        {activeTab === 'leArIrEr' && (
          <div style={{ width: '100%' }}>
            <Instructions>
              Words ending with <b>le</b>, <b>ar</b>, <b>ir</b>, or <b>er</b> from all topics.<br />
              Click on a card to reveal its Hebrew translation.<br />
              Click the speaker icon 🔊 to hear the English pronunciation.
            </Instructions>
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
                  />
                ))
              )}
            </CardGrid>
          </div>
        )}
        {activeTab === 'leArIrErExam' && (
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