import { ImageButton } from './ImageButton';
import * as PIXI from 'pixi.js';

export const textureButtons = {
  buttonHover: 'images/btn_circle_hover.png',
  buttonNormal: 'images/btn_circle_normal.png',
  buttonPressed: 'images/btn_circle_pressed.png',
  buttonDisabled: 'images/btn_circle_disabled.png',
};

export class TextButton extends ImageButton {
  constructor({ x, y, width, height, label, textures, callback }) {
    super(textures, callback);

    const style = {
      fontSize: height - height / 5,
      dropShadow: true,
      dropShadowAngle: 6.2,
      dropShadowBlur: 5,
      dropShadowColor: '#e2c065',
      fontWeight: 'bold',
      letterSpacing: 7,
      fill: '#E6E6FA',
    };
    const buttonLabel = new PIXI.Text(label, style);
    buttonLabel.position.set(width / 2, height / 2);
    buttonLabel.anchor.set(0.5);
    this.position.set(x, y);
    this.buttonLabel = buttonLabel;

    this.addChild(buttonLabel);
  }

  setStyle(fontSize, colorText) {
    this.buttonLabel.style.fill = colorText;
    this.buttonLabel.style.fontSize = fontSize;
  }
}
