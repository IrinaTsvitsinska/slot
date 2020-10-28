import * as PIXI from 'pixi.js';
import { scale } from './animUtils';
import { setTextureFromUrl } from "./ImageButton";

// const { TWEEN, Tween, Easing } = require('@tweenjs/tween.js')
import { Easing, TWEEN } from '@tweenjs/tween.js/dist/tween.umd';


const animationDuration = 3000;
const maxScale = 2;

export class Cell extends PIXI.Sprite {
    constructor(x, y, width, height/*, callback*/) {
        const texture = setTextureFromUrl("images/cells/sym1.png");
        super(texture);

        const graphics = new PIXI.Graphics();
        graphics.lineStyle(4, 0x00FF7F, 2); // красный DC143C, светлый FFDAB9
        graphics.drawRect(0, 0, width, height);

        this.position.set(x, y);
        this.graphics = graphics;

        this.addChild(graphics);
        this.backlightVisible(false);
        this.interactive = true;
        this.on('click', () => { this.showActive() });
    }

    setTexture(url) {
        this.texture = setTextureFromUrl(url);

    }

    backlightVisible(ifTrue) {
        this.graphics.visible = ifTrue;
    }


    showActive() {
        console.log('showActive');
        scale(this, { x: 1, y: 1 }, { x: maxScale, y: maxScale }, animationDuration / 2, Easing.Quadratic.Out)
        // .onComplite(
        //     () => {

        //         scale(this, { x: maxScale, y: maxScale }, { x: 1, y: 1 }, animationDuration / 2/*, Easing.Quadratic.Out*/);
        //     });
    }

    showInActive() {

    }
}