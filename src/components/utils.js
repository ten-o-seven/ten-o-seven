import {ROUTE_PATH} from './constants';

export const getIsBetweenPortAndProj = (currentPage, targetPage) =>{
  return currentPage === ROUTE_PATH.HOME && targetPage === ROUTE_PATH.PROJECTS ||
    currentPage === ROUTE_PATH.PROJECTS && targetPage === ROUTE_PATH.HOME;
};
