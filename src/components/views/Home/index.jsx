import React from 'react';
import styled from '@emotion/styled';
import cloud1 from '../../../video/cloud_1.mp4';

const Container = styled.div`
  opacity: 1;
  transition: 0.75s ease-in;
  overflow: hidden;
`;

/**
 * @return {Node} home landing page
 */
export default function Home() {
  return (
    <Container className="full-view" id="homeContainer">
      <video autoPlay={true} controls={false} className="full-view" style={{objectFit: 'cover'}}>
        <source src={cloud1} type="video/mp4" />
      </video>
    </Container>
  );
}
