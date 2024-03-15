import {ROUTE_PATH} from './constants';

export const getIsBetweenVerticalNav = (currentPage, targetPage) =>{
  const {HOME, PROJECTS, ABOUT} = ROUTE_PATH;
  if (currentPage === HOME) {
    return targetPage === PROJECTS || ABOUT;
  }
  if (currentPage === PROJECTS) {
    return targetPage === HOME || ABOUT;
  }
  if (currentPage === ABOUT) {
    return targetPage === PROJECTS || HOME;
  }
};
