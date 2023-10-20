import React from 'react';
import {PAGE_MAP} from '../constants';
import {useStore} from '../Store';
import Navigation from './Navigation';
import './styles.css';

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Layout() {
  const {displayedPage} = useStore();
  const Display = PAGE_MAP[displayedPage];

  return (
    <div>
      <Navigation/>
      <Display />
    </div>
  );
}
