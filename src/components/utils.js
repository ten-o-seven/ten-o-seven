import {ROUTE_PATH} from './constants';

export const getIsBetweenVerticalNav = (currentPage, targetPage) =>{
  const {HOME, PROJECTS, ABOUT} = ROUTE_PATH;
  if (currentPage === HOME) {
    return targetPage === PROJECTS || targetPage === ABOUT;
  }
  if (currentPage === PROJECTS) {
    return targetPage === HOME || targetPage === ABOUT;
  }
  if (currentPage === ABOUT) {
    return targetPage === PROJECTS || targetPage === HOME;
  }
};
