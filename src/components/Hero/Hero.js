import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am Aditya Nagar, a React Developer, pursuing Computer Science Engineering and am interested in developing Website and Android/iOS applications using React and React Native 
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
</>
);

export default Hero;