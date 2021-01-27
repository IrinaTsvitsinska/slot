
import { TextTitle } from "./TextTitle";
import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import { COUNTUP_DURATION } from "../config/Constants";
import { opacity, scale } from '../utils/animUtils';


export class Counter extends PIXI.Container {

    constructor({ x, y, width, height, }) {
        super();
        const countUpText = new TextTitle({ x: x, y: y, width: width, height: height, text: "", color: 0xFF4500, size: "50px" });
        this.countUpText = countUpText;

        this.addChild(countUpText);
        this.hide();
    }

    start(value, callback) {
        this.show();
        const countUpAnimHolder = new TWEEN.Tween({ value: 0 });

        countUpAnimHolder.to({ value: value }, COUNTUP_DURATION / 2);
        countUpAnimHolder.onUpdate((param) => {
            const text = (param.value).toFixed(2);

            this.countUpText.setText(text);
        });
        countUpAnimHolder.easing(TWEEN.Easing.Cubic.Out);
        countUpAnimHolder.start();

        scale(this.countUpText, { x: 1, y: 1 }, { x: 1.5, y: 1.5 }, COUNTUP_DURATION / 2, TWEEN.Easing.Cubic.Out).onComplete(() => {
            scale(this.countUpText, { x: 1.5, y: 1.5 }, { x: 3, y: 3 }, COUNTUP_DURATION / 2, TWEEN.Easing.Bounce.Out).onComplete(() => {
                callback();
            });
        });
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    setStyle({ colorText, fontSize }) {
        this.countUpText.setStyle({ colorText, fontSize });
    }

}