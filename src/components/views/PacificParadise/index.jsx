import React from 'react';
import AnchorList from '../../common/AnchorList';
import ProjectsNavigator from '../../common/ProjectsNavigator';
import {ROUTE_PATH} from '../../constants';
import Hero from './Hero';
import HeroSubSection from './HeroSubSection';
import HighFidelity from './HighFidelity';
import Ideation from './Ideation';
import Opportunities from './Opportunities';
import Prototype from './Prototype';
import StyleGuide from './StyleGuide';
import UserResearch from './UserResearch';
import UserStories from './UserStories';

const anchorList = [
  {level: 0, title: 'Pacific Paradise', anchor: 'pp'},
  {level: 1, title: '01. User Research Summary', anchor: 'research'},
  {level: 1, title: '02. Define', anchor: 'define'},
  {level: 2, title: 'Existing Customers', anchor: 'existing'},
  {level: 2, title: 'New Customers', anchor: 'new'},
  {level: 1, title: '0.3 Ideation', anchor: 'ideation'},
  {level: 2, title: 'Brainstorm', anchor: 'brainstorm'},
  {level: 2, title: 'User Flow', anchor: 'flow'},
  {level: 2, title: 'Paper Wireframes', anchor: 'paper'},
  {level: 2, title: 'Key Lo-Fi Frames', anchor: 'lofi'},
  {level: 2, title: 'More Wireframes', anchor: 'moreLofi'},
  {level: 2, title: 'Usability Testing', anchor: 'usability'},
  {level: 2, title: 'Lo-Fi to Hi-Fi', anchor: 'hifi'},
  {level: 2, title: 'Final Design', anchor: 'final'},
  {level: 1, title: '0.4 Style Guide', anchor: 'style'},
];

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Project Page
 */
export default function PacificParadise() {
  return (
    <div className="container flex flex-column" style={{marginTop: 100}} >
      <AnchorList anchorList={anchorList} />
      <Hero />
      <HeroSubSection />
      <UserResearch />
      <Opportunities />
      <UserStories />
      <Ideation />
      <Prototype />
      <HighFidelity />
      <StyleGuide />
      <ProjectsNavigator
        style={{marginTop: 200, marginBottom: 100}}
        next={ROUTE_PATH.MIND_SUPPORT}
      />
    </div>
  );
}
