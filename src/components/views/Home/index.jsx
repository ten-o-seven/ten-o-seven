import React from 'react';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Home() {
  return (
    <div
      id="homeContainer"
      style={{
        opacity: 1,
        transition: '0.75s ease-in',
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
        }}
      />
    </div>
  );
}
