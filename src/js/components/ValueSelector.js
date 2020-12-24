import * as PIXI from 'pixi.js';
import { texturesValueSelector } from '../config/Constants';
import { TextButton } from './TextButton';
import { TextFieldValue } from './textFildSelector';

export class ValueSelector extends PIXI.Container {

    constructor({ x, y, height, width, values, label }) {
        super();
        const buttonWidth = 70;

        const buttonMinus = new TextButton(
            { x: 0, y: 0, width: buttonWidth, height: height, label: " - ", textures: texturesValueSelector, callback: () => { this.velueDecrement() } });
        const buttonPlus = new TextButton(
            { x: width - buttonWidth, y: 0, width: buttonWidth, height: height, label: " + ", textures: texturesValueSelector, callback: () => { this.velueIncrement() } }
        );

        const textFildValue = new TextFieldValue({
            x: buttonWidth,
            y: 0,
            width: width - buttonWidth * 2,
            height: height - height / 10,
            label: label,
            value: values[0],
        });


        const graphics = new PIXI.Graphics;
        graphics.lineStyle(4, 0xA0522D, 2);
        graphics.beginFill(0xFFDEAD);
        graphics.drawRect(0, 0, width, height);

        this.currentValue = values[0];
        this.values = values;
        this.position.set(x, y);
        this.i = 0;
        this.textValue = textFildValue;
        this.buttonMinus = buttonMinus;
        this.buttonPlus = buttonPlus;


        this.addChild(graphics);
        this.addChild(buttonMinus);
        this.addChild(buttonPlus);
        this.addChild(textFildValue);

    }

    velueDecrement() {
        this.i--;
        this.currentValue = this.values[this.i];
        this.textValue.setValue(this.currentValue);
        if (this.i <= 0) {
            this.buttonMinus.disable();
        }
        if (this.i < this.values.length - 1) {
            this.buttonPlus.enable();
        }

    }

    velueIncrement() {

        this.i++;
        this.currentValue = this.values[this.i];
        this.textValue.setValue(this.currentValue);
        if (this.i >= this.values.length - 1) {
            this.buttonPlus.disable();
        }
        if (this.i > 0) {
            this.buttonMinus.enable();
        }

    }

    getCurrentValue() {
        return this.currentValue;
    }
}