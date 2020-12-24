import * as PIXI from 'pixi.js';

export class TextFieldValue extends PIXI.Container {

    constructor({ x, y, width, height, label, value }) {
        super();
        const style = new PIXI.TextStyle({
            fill: 0x8B4513,//"lime",
            dropShadow: true,
            dropShadowColor: "#F4A460",
            dropShadowDistance: 3,
            dropShadowAlpha: 0.5,
            fontSize: height / 3,
            letterSpacing: 5,
        });
        const textValue = new PIXI.Text(value, style);
        const textLabel = new PIXI.Text(label, style);
        textValue.position.set(width / 2, height * 2 / 3);
        textValue.anchor.set(0.5);
        textLabel.position.set(width / 2, height / 4);
        textLabel.anchor.set(0.5);

        this.textValue = textValue;
        this.position.set(x, y);

        this.addChild(textValue);
        this.addChild(textLabel);
    }

    setValue(value) {
        console.log(value);
        this.textValue.text = value;
    }
}