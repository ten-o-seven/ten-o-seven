import MindSupport from './views/MindSupport';
import PacificParadise from './views/PacificParadise';
import bird from '../images/bird.png';
import golf from '../images/golf.png';
import sneakers from '../images/sneakers.png';

// for navigate() payload
export const ROUTE_PATH = {
  HOME: '/',
  PROJECTS: '/projects/',
  CONTACTS: '/contacts/',
  PACIFIC_PARADISE: '/projects/pacific_paradise/',
  // MIND_SUPPORT: 'mind_support',
  // ANOTHER_PROJECT: 'another_project',
  INSTAGRAM: '/projects/instagram',
};

const {
  PACIFIC_PARADISE,
  MIND_SUPPORT,
  ANOTHER_PROJECT,
} = ROUTE_PATH;

export const PAGE_MAP = {
  [PACIFIC_PARADISE]: PacificParadise,
  [MIND_SUPPORT]: MindSupport,
};

export const PROJECTS_MAP = {
  [PACIFIC_PARADISE]: {
    src: bird,
    value: 10,
    styles: {
      left: '60%',
    },
    title: 'Pacific Paradise',
    subtitle: 'mobile app case study for a local restaurant',
  },
  [MIND_SUPPORT]: {
    src: golf,
    value: -10,
    styles: {
      left: '35%',
    },
    title: 'Mind Support',
    subtitle: 'web & mobile mental health self-help app',
  },
  [ANOTHER_PROJECT]: {
    src: sneakers,
    value: 20,
    styles: {
      left: '70%',
    },
    title: 'More to Come',
    subtitle: 'in the mean time, feel free to check out my doodles',
  },
};

export const DOODLES_MAP = {
  [PACIFIC_PARADISE]: {
    src: sneakers,
    value: 20,
    styles: {
      left: '30%',
    },
  },
  [MIND_SUPPORT]: {
    src: golf,
    value: 30,
    styles: {
      left: '80%',
    },
  },
  [ANOTHER_PROJECT]: {
    src: bird,
    value: -20,
    styles: {
      left: '20%',
    },
  },
};
