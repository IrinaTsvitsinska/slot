import * as PIXI from 'pixi.js';
import { SpinButton, textureButtons } from './SpinButton';
import { TextFieldValue } from './textFildSelector';

export class ValueSelector extends PIXI.Container {

    constructor(x, y, height, width, values, label) {
        super();
        const buttonWidth = width / 5;

        const buttonMinus = new SpinButton(0, 0, buttonWidth, height, " - ", textureButtons, () => { this.velueDecrement() });
        const buttonPlus = new SpinButton(4 * buttonWidth, 0, buttonWidth, height, " + ", textureButtons, () => { this.velueIncrement() });

        const textFildValue = new TextFieldValue(buttonWidth, 0, width - buttonWidth * 2, height - height / 10, label, values[0]);

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
        return this.textFildValue.getValue();
    }
}