import * as PIXI from 'pixi.js';
import { SpinButton } from './js/components/SpinButton';
import { textureButtons } from './js/components/SpinButton';
import TWEEN from '@tweenjs/tween.js';
import { Reel } from './js/components/Reel';
import { STRIPS } from './js/config/Constants';
import { moduleLoader } from './js/core/ModuleLoader';

import { ReelsModule } from './js/modules/reels/Reels';
import { UserInterfaceModule } from './js/modules/userInterface/UserInterface';

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

app.ticker.add((/*delta*/) => {
  TWEEN.update();
  reel.update();
});

const imgBtn = new SpinButton(
  500,
  500,
  200,
  70,
  'SpinButton',
  textureButtons,
  () => {
    reel.setSymbolToSpin(STRIPS[0].length + 3);
  }
);
app.stage.addChild(imgBtn);

// const cell = new Cell(50, 200, 100, 100);
const reel = new Reel(1, 50, 50, 100, 3, STRIPS[0], () => {
  console.log('callback');
});
app.stage.addChild(reel);

// window.cell = cell;
let arr = [1, 2, 3, 4, 5];

window.reel = reel;

moduleLoader.addModule(new ReelsModule());
moduleLoader.addModule(new UserInterfaceModule());

moduleLoader.loadModules();
