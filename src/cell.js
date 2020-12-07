import * as PIXI from 'pixi.js';
import { opacity, scale } from './animUtils';
import { setTextureFromUrl } from './ImageButton';

import TWEEN from '@tweenjs/tween.js';

const animationDuration = 3000;
const maxScale = 2;

export class Cell extends PIXI.Sprite {
  constructor(x, y, width, height /*, callback*/) {

    const texture = setTextureFromUrl('images/cells/sym1.png');
    super(texture);

    const graphics = new PIXI.Graphics();
    graphics.lineStyle(4, 0x00ff7f, 2); // красный DC143C, светлый FFDAB9
    graphics.drawRect(0, 0, width, height);

    this.position.set(x + height / 2, y + width / 2);
    this.graphics = graphics;
    this.pivot.set(width / 2, height / 2);
    this.addChild(graphics);
    this.backlightVisible(false);
    this.interactive = true;
    this.on('click', () => {
      this.showActive();
    });
  }

  setTexture(texture) {
    this.texture = texture;
  }

  backlightVisible(ifTrue) {
    this.graphics.visible = ifTrue;
  }

  showActive() {
    this.backlightVisible(true);
    this.scaleHandler = scale(
      this,
      { x: 1, y: 1 },
      { x: maxScale, y: maxScale },
      animationDuration / 2,
      TWEEN.Easing.Quadratic.Out
    ).onComplete(
      () => {
        scale(this, { x: maxScale, y: maxScale }, { x: 1, y: 1 }, animationDuration / 2, TWEEN.Easing.Quadratic.Out);
      });
  }

  showInActive() {
    this.opacityHandler = opacity(
      this, 1, 0.5, animationDuration / 2);
  }

  reset() {
    if (this.scaleHandler) {
      this.scaleHandler.stop();
    }
    this.scale.set(1);
    this.alpha = 1;
    this.backlightVisible(false);
  }

}
