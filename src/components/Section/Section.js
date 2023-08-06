import React from 'react';
import PropTypes from 'prop-types';
import { PageSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
   return (
     <PageSection>
       <Title>{title}</Title>
       {children}
     </PageSection>
   );
} 

Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};

export default Section;