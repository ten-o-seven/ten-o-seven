import React, {createContext, useContext, useState} from 'react';
import {ROUTE_PATH} from './constants';
import PropTypes from 'prop-types';

export const StoreContext = createContext({});
export const useStore = () => useContext(StoreContext);

/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Store({children}) {
  const [displayedPage, setDisplayedPage] = useState(ROUTE_PATH.HOME);

  const context = {
    displayedPage,
    setDisplayedPage,
  };

  return (
    <StoreContext.Provider value={context}>
      {children}
    </StoreContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
