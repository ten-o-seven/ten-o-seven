import MindSupport from './views/MindSupport';
import PacificParadise from './views/PacificParadise';
import Photography from './views/Photography';
import Doodles from './views/Doodles';
import JustForFun from './views/JustForFun';
import {withPrefix} from 'gatsby-link';
import Construction from './common/Construnction';

// for navigate() payload
export const ROUTE_PATH = {
  HOME: '/',
  PROJECTS: '/projects/',
  ABOUT: '/about/',
  PACIFIC_PARADISE: '/projects/pacific_paradise/',
  MIND_SUPPORT: '/projects/mind_support/',
  ANOTHER_PROJECT: '/projects/another_project/',
  PHOTOGRAPHY: '/projects/photography/',
  DOODLE: '/projects/doodle/',
  FUN: '/projects/fun/',
  BLOG: '/blog/',
};

const {
  HOME,
  PROJECTS,
  ABOUT,
  PACIFIC_PARADISE,
  MIND_SUPPORT,
  ANOTHER_PROJECT,
  PHOTOGRAPHY,
  DOODLE,
  FUN,
  BLOG,
} = ROUTE_PATH;

export const PAGE_MAP = {
  [PACIFIC_PARADISE]: PacificParadise,
  [MIND_SUPPORT]: MindSupport,
  [PHOTOGRAPHY]: Photography,
  [ANOTHER_PROJECT]: Construction,
  [DOODLE]: Doodles,
  [FUN]: JustForFun,
};

export const verticalNavList = [
  withPrefix(HOME),
  withPrefix(PROJECTS),
  withPrefix(ABOUT),
];

export const PROJECTS_MAP = {
  [PACIFIC_PARADISE]: {
    name: 'Palm',
    value: 10,
    styles: {
      left: '60%',
    },
    title: 'Pacific Paradise',
    subtitle: 'mobile app case study for a local Chinese restaurant.',
  },
  [MIND_SUPPORT]: {
    name: 'Lily',
    value: -10,
    styles: {
      left: '15%',
    },
    title: 'Mind Support',
    subtitle: 'digital platforms for mental health support.',
  },
  [ANOTHER_PROJECT]: {
    name: 'Ufo',
    value: 20,
    styles: {
      left: '70%',
    },
    title: 'More to Come',
    subtitle: 'in the mean time, the UFO to hang out with Clyde.',
  },
};

export const DOODLES_MAP = {
  [PHOTOGRAPHY]: {
    name: 'Lightning',
    value: 20,
    styles: {
      left: '30%',
    },
    title: 'DSLR',
    subtitle: 'give me a camera so I can make someone uncomfortable.',
  },
  [DOODLE]: {
    name: 'Star',
    value: 30,
    styles: {
      left: '80%',
    },
    title: 'Doodles',
    subtitle: 'one of my favorite ways to tell stories.',
  },
  [FUN]: {
    name: 'Balloon',
    value: -10,
    styles: {
      left: '50%',
    },
    title: 'Just for fun',
    subtitle: 'had an idea, and I executed it because why not.',
  },
  [BLOG]: {
    name: 'Cloud',
    value: -20,
    styles: {
      left: '30%',
    },
    title: 'Blog',
    subtitle: 'occasionally, I have something to say.',
  },
};
