import * as PIXI from 'pixi.js';

export class TextTitle extends PIXI.Container {
    constructor({ x = 0, y = 0, text = "", color = 0x000000, size = "20px" }) {
        super();
        const style = new PIXI.TextStyle({
            wordWrap: true,
            wordWrapWidth: 440,
            fill: color,
            fontSize: size
        });
        const textItem = new PIXI.Text(text, style);

        this.position.set(x, y);
        textItem.anchor.set(0.5);

        this.addChild(textItem);

        this.textItem = textItem;
        this.text = text;
        this.style = style;
    }

    setText(value) {
        this.textItem.text = value;
    }
    setStyle({ colorText, fontSize }) {
        this.style.fill = colorText;
        this.style.fontSize = fontSize;
    }


}