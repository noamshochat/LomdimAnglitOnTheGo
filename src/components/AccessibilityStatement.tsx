import React from 'react';
import styled from 'styled-components';

const StatementContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const SubTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  color: #555;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
`;

const AccessibilityStatement: React.FC = () => {
  return (
    <StatementContainer>
      <Title>Accessibility Statement</Title>
      
      <Section>
        <Paragraph>
          We are committed to ensuring that our English-Hebrew Learning Hub is accessible to all users, 
          including those with disabilities. This statement outlines our accessibility features and 
          ongoing commitment to inclusive design.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Accessibility Standards</SectionTitle>
        <Paragraph>
          This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
          standards and Israeli accessibility regulations. We continuously work to improve accessibility 
          and ensure equal access to educational content for all learners.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Accessibility Features</SectionTitle>
        
        <SubTitle>Keyboard Navigation</SubTitle>
        <List>
          <ListItem>All interactive elements can be accessed using keyboard navigation (Tab, Enter, Space, Arrow keys)</ListItem>
          <ListItem>Clear focus indicators are provided for all interactive elements</ListItem>
          <ListItem>Logical tab order throughout the application</ListItem>
          <ListItem>No keyboard traps that prevent users from navigating away</ListItem>
        </List>

        <SubTitle>Screen Reader Support</SubTitle>
        <List>
          <ListItem>Proper semantic HTML structure with headings, navigation, and main content areas</ListItem>
          <ListItem>ARIA labels and roles for enhanced screen reader compatibility</ListItem>
          <ListItem>Alternative text for all meaningful images and icons</ListItem>
          <ListItem>Live regions for dynamic content updates (quiz feedback, progress)</ListItem>
        </List>

        <SubTitle>Visual Design</SubTitle>
        <List>
          <ListItem>High contrast color scheme meeting WCAG AA standards (4.5:1 for normal text, 3:1 for large text)</ListItem>
          <ListItem>Text remains readable when zoomed to 200%</ListItem>
          <ListItem>Responsive design that works on various screen sizes and devices</ListItem>
          <ListItem>Clear visual hierarchy with proper heading structure</ListItem>
        </List>

        <SubTitle>Interactive Elements</SubTitle>
        <List>
          <ListItem>Buttons and links have descriptive labels</ListItem>
          <ListItem>Form elements are properly labeled</ListItem>
          <ListItem>Interactive elements have minimum touch target size of 44x44 pixels</ListItem>
          <ListItem>Audio pronunciation features with clear controls</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Assistive Technology Compatibility</SectionTitle>
        <Paragraph>
          This website has been tested with:
        </Paragraph>
        <List>
          <ListItem>Screen readers (NVDA, JAWS, VoiceOver)</ListItem>
          <ListItem>Keyboard-only navigation</ListItem>
          <ListItem>Voice control software</ListItem>
          <ListItem>Browser zoom up to 200%</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Known Limitations</SectionTitle>
        <Paragraph>
          We are continuously working to improve accessibility. Currently known limitations include:
        </Paragraph>
        <List>
          <ListItem>Some decorative animations may not be suitable for users with vestibular disorders</ListItem>
          <ListItem>Audio content does not yet include transcripts (planned for future updates)</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Feedback and Support</SectionTitle>
        <Paragraph>
          We welcome feedback about the accessibility of our English-Hebrew Learning Hub. 
          If you encounter any accessibility barriers or have suggestions for improvement, 
          please contact us:
        </Paragraph>
        
        <ContactInfo>
          <SubTitle>Contact Information</SubTitle>
          <Paragraph>
            <strong>Email:</strong> <Link href="mailto:accessibility@english-hebrew-hub.com">accessibility@english-hebrew-hub.com</Link><br/>
            <strong>Subject Line:</strong> Accessibility Feedback - English-Hebrew Learning Hub<br/>
            <strong>Response Time:</strong> We aim to respond to accessibility inquiries within 2 business days.
          </Paragraph>
          
          <Paragraph>
            When reporting accessibility issues, please include:
          </Paragraph>
          <List>
            <ListItem>Description of the accessibility barrier</ListItem>
            <ListItem>The page or feature where you encountered the issue</ListItem>
            <ListItem>The assistive technology you were using (if applicable)</ListItem>
            <ListItem>Your browser and operating system</ListItem>
          </List>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Ongoing Commitment</SectionTitle>
        <Paragraph>
          Accessibility is an ongoing effort. We regularly:
        </Paragraph>
        <List>
          <ListItem>Conduct accessibility audits and testing</ListItem>
          <ListItem>Update our content and features based on user feedback</ListItem>
          <ListItem>Train our development team on accessibility best practices</ListItem>
          <ListItem>Stay current with accessibility standards and guidelines</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Legal Compliance</SectionTitle>
        <Paragraph>
          This accessibility statement is in accordance with Israeli accessibility regulations 
          and international standards. We are committed to providing equal access to educational 
          resources for all users, regardless of ability.
        </Paragraph>
        
        <Paragraph>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </Paragraph>
      </Section>
    </StatementContainer>
  );
};

export default AccessibilityStatement;
