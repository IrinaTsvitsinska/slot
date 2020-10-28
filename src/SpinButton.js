const { ImageButton } = require("./ImageButton");
import * as PIXI from 'pixi.js'

export const textureButtons = {
    buttonHover: "images/continue_button_hover.png",
    buttonNormal: "images/continue_button_normal.png",
    buttonPressed: "images/continue_button_pressed.png",
    buttonDisabled: "images/continue_button_disabled.png",
};

export class SpinButton extends ImageButton {
    constructor(x, y, width, height, label, textures, callback) {
        super(textures, callback);
        // console.log(textures.buttonNormal);
        const style = {
            fontSize: height / 2,
            dropShadow: true,
            dropShadowAngle: 6.2,
            dropShadowBlur: 5,
            dropShadowColor: "#e2c065",
            fontWeight: "bold",
            letterSpacing: 3,
            fill: "#443413",

        };
        const buttonLabel = new PIXI.Text(label, style);
        buttonLabel.position.set(width, height / 2);
        buttonLabel.anchor.set(0.5);
        this.position.set(x, y);

        this.addChild(buttonLabel);
    }


}