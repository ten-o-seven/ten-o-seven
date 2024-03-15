import {string} from 'prop-types';

import React from 'react';
import Balloon from '../../icons/Balloon.svg';
import Cactus from '../../icons/Cactus.svg';
import Cloud from '../../icons/Cloud.svg';
import Eye from '../../icons/Eye.svg';
import FlowerLotus from '../../icons/FlowerLotus.svg';
import FlyingSaucer from '../../icons/FlyingSaucer.svg';
import Ghost from '../../icons/Ghost.svg';
import Infinity from '../../icons/Infinity.svg';
import PinWheel from '../../icons/PinWheel.svg';
import Planet from '../../icons/Planet.svg';
import Robot from '../../icons/Robot.svg';
import RocketLaunch from '../../icons/RocketLaunch.svg';
import Skull from '../../icons/Skull.svg';
import YinYang from '../../icons/YinYang.svg';


/**
 * Creates react context for children
 * @param {Node} children The first number.
 * @return {Node} The sum of the two numbers.
 */
export default function Icon({name, ...rest}) {
  const icons = {
    Balloon: Balloon,
    Cactus: Cactus,
    Cloud: Cloud,
    Eye: Eye,
    FlowerLotus: FlowerLotus,
    FlyingSaucer: FlyingSaucer,
    Ghost: Ghost,
    Infinity: Infinity,
    PinWheel: PinWheel,
    Planet: Planet,
    Robot: Robot,
    RocketLaunch: RocketLaunch,
    Skull: Skull,
    YinYang: YinYang,
  };
  return <img src={icons[name]} {...rest}/>;
}

Icon.propTypes = {
  name: string.isRequired,
};

