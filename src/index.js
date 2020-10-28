import * as PIXI from 'pixi.js';
import { SpinButton } from './SpinButton';
import { GameConfig } from './test';
import { textureButtons } from "./SpinButton";
import { Cell } from './cell';
import { Tween } from '@tweenjs/tween.js';
import { update } from '@tweenjs/tween.js/dist/tween.umd';



const app = new PIXI.Application({
  width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

// app.ticker.add((/*delta*/) => {
//   update();
// });

function animate() {
  requestAnimationFrame(animate);
  update();
}
requestAnimationFrame(animate);
// const container = new PIXI.Container();

// app.stage.addChild(container);

// Create a new texture


const texture2 = PIXI.Texture.from('images/continue_button_disabled.png');
const texture1 = PIXI.Texture.from('images/continue_button_normal.png');

const imgBtn = new SpinButton(50, 50, 200, 100, "SpinButton", textureButtons, () => { imgBtn.disable() });
app.stage.addChild(imgBtn);

const cell = new Cell(50, 200, 100, 100);
app.stage.addChild(cell);
console.log(imgBtn, cell);
//imgBtn.position.set(50, 50);


