import * as PIXI from 'pixi.js';
import { BigWinBtnTextures, COUNTUP_DURATION } from '../config/Constants';
import { scale } from '../utils/animUtils';
import { Counter } from './counter';
import { TextButton } from './TextButton';
import { TextTitle } from './TextTitle';
import TWEEN from '@tweenjs/tween.js';
import { testBtnsGroup } from './testBtbsGroup';
import { gameEvents } from '../core/EventSystem';


export class BigWin extends PIXI.Container {
    constructor({ coords = { x: x, y: y }, width, height }) {
        super();

        const titleText = new TextTitle({ x: width / 2, y: height / 3, text: "Big Win!!!", color: 0xFFCC33, size: "50px" });
        // const countUpAnimHolder = new Counter({ x: coords.x, y: coords.y, winValue });
        const countUpAnimHolder = new Counter({ x: width / 2, y: height * 2 / 3, width: width / 2, height: height / 2, });

        const background = new PIXI.Graphics();
        //background.lineStyle(4, 0xFF4500);
        background.beginFill(0xFFFFE0, 0.5); //FFFFE0 
        background.drawRect(coords.x, coords.y, width, height);
        background.endFill();

        this.countUpAnimHolder = countUpAnimHolder;
        this.position.set(coords.x, coords.y);
        this.levels = {
            BigWin: {
                winValueMin: 10,
                style: {
                    colorText: 'green',
                    fontSize: 30
                }
            },
            MegaWin: {
                winValueMin: 200,
                style: {
                    colorText: 'blue',
                    fontSize: 30
                }
            },
            SuperMegaWin: {
                winValueMin: 500,
                style: {
                    colorText: 'red',
                    fontSize: 30
                }
            }

        }

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
        this.countUpAnimHolder.start(value, () => {
            setTimeout(() => {
                this.hide();

                gameEvents.fire("bigWinEnd");
                // callback();
            }, 2000)
        });




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
        this.buttons = new testBtnsGroup({
            x: 0,
            y: 0,
            width: window.width,
            height: window.height,
            callbacks: {
                bigWin: () => { this.start(100) },
                megaWin: () => { this.start(400) },
                superMegaWin: () => { this.start(1000) },
            }
        });
        this.addChild(this.buttons);
    }

    isBigWin(isTrue) {
        if (isTrue) {
            this.setStyle(this.levels.BigWin, 'Big Win');
        }
    }

    isMegaWin(isTrue) {
        if (isTrue) {
            this.setStyle(this.levels.MegaWin, 'Mega Win');
        }

    }

    isSuperMegaWin(isTrue) {
        if (isTrue) {
            this.setStyle(this.levels.SuperMegaWin, 'Super Mega Win');

        }

    }

    // setCurrentLevelName(winValue) {
    //     const levelNames = this.levels.keys;
    //     console.log(levelNames);
    //     const currentLevel = '',
    //     // for (let i = 0; i < levelNames.length; i++){
    //     //     console.log(levelNames[i]);
    //     //     // if (winValue > this.levels.levelNames[i].winValueMin) {
    //     //     //     currentLevel = levelNames[i];
    //     //     // }
    //     // }
    //     //return currentLevel;
    // }

    setStyle(level, levelTitle) {
        console.log(level);
        this.countUpAnimHolder.setStyle({ colorText: level.style.colorText, fontSize: level.style.fontSize });
        this.titleText.setText(levelTitle);
        this.titleText.setStyle({ colorText: 'Brown', fontSize: level.style.fontSize + 6 });

    }
}