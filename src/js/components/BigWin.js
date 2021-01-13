import * as PIXI from 'pixi.js';
import { BigWinBtnTextures } from '../config/Constants';
import { scale } from '../utils/animUtils';
import { Counter } from './counter';
import { TextButton } from './TextButton';
import { TextTitle } from './TextTitle';


export class BigWin extends PIXI.Container {
    constructor({ coords = { x: x, y: y }, width, height }) {
        super();

        const titleText = new TextTitle({ x: width / 2, y: height / 3, text: "Big Win!!!", color: 0xFFCC33, size: "50px" });
        // const countUpAnimHolder = new Counter({ x: coords.x, y: coords.y, winValue });
        const countUpAnimHolder = new Counter({ x: width / 2, y: height * 2 / 3 });
        const background = new PIXI.Graphics();
        //background.lineStyle(4, 0xFF4500);
        background.beginFill(0xFFFFE0, 0.5); //FFFFE0 
        background.drawRect(coords.x, coords.y, width, height);
        background.endFill();

        this.countUpAnimHolder = countUpAnimHolder;
        this.position.set(coords.x, coords.y);

        this.addChild(background);
        this.addChild(titleText);
        this.addChild(countUpAnimHolder);
        this.buttons = new PIXI.Container;
        this.addChild(this.buttons);
        this.createTestButtons();
        this.megaWinValue = 300;
        this.megaSuperWinValue = 500;

        // this.visible = false;
        this.background = background;
        this.titleText = titleText;
        this.hide();

    }

    start(value, callback) {
        this.show();
        this.isBigWin(true);
        if (value > this.megaWinValue) {
            this.isMegaWin(true);
        }
        if (value > this.megaSuperWinValue) {
            this.isSuperMegaWin(true);
        }
        this.countUpAnimHolder.start(value, () => { setTimeout(() => this.hide(), 2000) });

    }

    show() {
        //this.visible = true;
        this.background.visible = true;
        this.titleText.visible = true;
        this.countUpAnimHolder.visible = true;

    }
    hide() {
        this.background.visible = false;
        this.titleText.visible = false;
        this.countUpAnimHolder.visible = false;
        //this.visible = false;

    }

    createTestButtons() {
        const bigWinBtn = new TextButton(
            {
                x: 50,
                y: 600,
                width: 200,
                height: 70,
                label: ' bigWin',
                textures: BigWinBtnTextures,
                callback: () => {
                    this.start(100);
                }
            }

        );

        const megaWinBtn = new TextButton(
            {
                x: 300,
                y: 600,
                width: 200,
                height: 70,
                label: ' megaWin',
                textures: BigWinBtnTextures,
                callback: () => {

                    this.start(400);
                }
            }

        );

        const megaSuperWinBtn = new TextButton(
            {
                x: 550,
                y: 600,
                width: 200,
                height: 70,
                label: 'SuperWin',
                textures: BigWinBtnTextures,
                callback: () => {
                    this.start(1000);
                }
            }

        );


        this.buttons.addChild(bigWinBtn);
        this.buttons.addChild(megaWinBtn);
        this.buttons.addChild(megaSuperWinBtn);
        bigWinBtn.setStyle(22, "green");
        megaWinBtn.setStyle(22, "blue");
        megaSuperWinBtn.setStyle(22, "red");
    }

    isBigWin(isTrue) {
        if (isTrue) {
            this.countUpAnimHolder.setStyle({ colorText: 'green', fontSize: 30 });
            this.titleText.setText('BigWin');
            this.titleText.setStyle({ colorText: 'darkgreen', fontSize: 36 });
        }
    }

    isMegaWin(isTrue) {
        if (isTrue) {
            this.countUpAnimHolder.setStyle({ colorText: 'blue', fontSize: 32 });
            this.titleText.setText('Mega Win');
            this.titleText.setStyle({ colorText: 'darkblue', fontSize: 38 });
        }

    }

    isSuperMegaWin(isTrue) {
        if (isTrue) {
            this.countUpAnimHolder.setStyle({ colorText: 'red', fontSize: 34 });
            this.titleText.setText('Super Mega Win');
            this.titleText.setStyle({ colorText: 'FireBrick', fontSize: 40 });
        }

    }
}