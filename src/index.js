import * as PIXI from 'pixi.js';
import { SpinButton } from './js/components/SpinButton';
import { textureButtons } from './js/components/SpinButton';
import TWEEN from '@tweenjs/tween.js';
import { Reel } from './js/components/Reel';
import { STRIPS } from './js/config/Constants';
import { moduleLoader } from './js/core/ModuleLoader';

import { ReelsModule } from './js/modules/reels/ReelsModule';
import { UserInterfaceModule } from './js/modules/userInterface/UserInterface';
import { Application } from './js/modules/application/Application';





// const cell = new Cell(50, 200, 100, 100);

moduleLoader.addModule("application", new Application());
moduleLoader.addModule("reels", new ReelsModule());
moduleLoader.addModule("userInterface", new UserInterfaceModule());

moduleLoader.initModules();
