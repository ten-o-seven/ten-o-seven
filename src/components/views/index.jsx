import React from 'react';
import {PAGE_MAP} from '../constants';
import {useStore} from '../Store';
import Navigation from './Navigation';
import './styles.css';

/**
 * @return {Node} primary display layout
 */
export default function Layout() {
  const {displayedPage} = useStore();
  const Display = PAGE_MAP[displayedPage];

  return (
    <div>
      <nav>
        <Navigation/>
      </nav>
      <main className="flex justify-center">
        <Display />
      </main>
    </div>
  );
}
