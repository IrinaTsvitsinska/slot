import { TextTitle } from "./TextTitle";
import * as PIXI from 'pixi.js';

export class MoneyFild extends PIXI.Container {
    constructor({ x, y, title, width, height, value = 500 }) {
        super();
        this.position.set(x, y);
        const bg = PIXI.Sprite.from('images/fild1.png');
        bg.width = width;
        bg.height = height;
        this.value = value;
        this.title = title;
        this.textTitleFild = new TextTitle({ x: width / 2, y: height / 2, width: width, height: height, text: title + ': ' + value, color: 0xD8BFD8, size: 26 });

        this.addChild(bg);
        this.addChild(this.textTitleFild);
    }

    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
        this.textTitleFild.setText(this.title + ': ' + this.value);
    }

}