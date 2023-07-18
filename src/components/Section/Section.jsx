import React from 'react';

import { SectionContainer, Title } from '../App.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

export default Section;
