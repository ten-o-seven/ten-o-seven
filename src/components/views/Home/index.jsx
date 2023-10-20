import React from 'react';
import styled from '@emotion/styled';
import backgroundImage from '../../../images/home_static_1.png';

const Container = styled.img`
  opacity: 1;
  transition: 0.75s ease-in;
  object-fit: cover;
`;

/**
 * @return {Node} home landing page
 */
export default function Home() {
  return (
    <Container src={backgroundImage} className="full-view" id="homeContainer"/>
  );
}
