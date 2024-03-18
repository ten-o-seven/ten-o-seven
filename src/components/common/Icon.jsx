import {string} from 'prop-types';

import React from 'react';
import Balloon from '../../icons/balloon.svg';
import Cactus from '../../icons/cactus.svg';
import Cloud from '../../icons/cloud.svg';
import Clover from '../../icons/clover.svg';
import Cycle from '../../icons/cycle.svg';
import Ghost from '../../icons/ghost.svg';
import Planet from '../../icons/planet.svg';
import YinYang from '../../icons/yinyang.svg';
import Lily from '../../icons/lily.svg';
import Lightning from '../../icons/lightning.svg';
import Palm from '../../icons/palm.svg';
import Star from '../../icons/star.svg';
import Ufo from '../../icons/ufo.svg';


/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Icon({name, ...rest}) {
  const icons = {
    Balloon,
    Cactus,
    Cloud,
    Clover,
    Cycle,
    Ghost,
    Planet,
    YinYang,
    Lily,
    Palm,
    Star,
    Ufo,
    Lightning,
  };
  return <img src={icons[name]} {...rest}/>;
}

Icon.propTypes = {
  name: string.isRequired,
};

