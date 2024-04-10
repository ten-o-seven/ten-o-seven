import MindSupport from './views/MindSupport';
import PacificParadise from './views/PacificParadise';
import Photography from './views/Photography';
import Doodles from './views/Doodles';
import {withPrefix} from 'gatsby-link';

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
  BLOG,
} = ROUTE_PATH;

export const PAGE_MAP = {
  [PACIFIC_PARADISE]: PacificParadise,
  [MIND_SUPPORT]: MindSupport,
  [PHOTOGRAPHY]: Photography,
  [DOODLE]: Doodles,
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
      left: '35%',
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
    subtitle: 'in the mean time, click on me to checkout my doodles',
  },
};

export const DOODLES_MAP = {
  [PHOTOGRAPHY]: {
    name: 'Lightning',
    value: 20,
    styles: {
      left: '30%',
    },
    title: 'Photography',
  },
  [DOODLE]: {
    name: 'Star',
    value: 30,
    styles: {
      left: '80%',
    },
    title: 'Doodles',
  },
  [BLOG]: {
    name: 'Cloud',
    value: -20,
    styles: {
      left: '20%',
    },
    title: 'Blog',
  },
};
