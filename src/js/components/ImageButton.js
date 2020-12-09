import * as PIXI from 'pixi.js';

export class ImageButton extends PIXI.Sprite {
  constructor(textures, callback) {
    let texture = setTextureFromUrl(textures.buttonNormal);

    super(texture);
    const container = new PIXI.Container();

    this.textures = textures;
    this.interactive = true;
    this.buttonMode = true;

    this.on('click', () => {
      callback();
    });
    this.on('pointerover', () => {
      this.texture = setTextureFromUrl(this.textures.buttonHover);
    });
    this.on('pointerout', () => {
      this.texture = setTextureFromUrl(this.textures.buttonNormal);
    });
    this.on('pointerdown', () => {
      this.texture = setTextureFromUrl(this.textures.buttonPressed);
    });
  }
  enable() {
    this.interactive = true;
    this.texture = setTextureFromUrl(this.textures.buttonNormal);
  }

  disable() {
    this.texture = setTextureFromUrl(this.textures.buttonDisabled);
    this.interactive = false;
  }
}

export function setTextureFromUrl(url) {
  return PIXI.Texture.from(url);
}
