import * as PIXI from 'pixi.js';
import { BigWinBtnTextures, COUNTUP_DURATION } from '../config/Constants';
import { scale } from '../utils/animUtils';
import { Counter } from './counter';
import { TextButton } from './TextButton';
import { TextTitle } from './TextTitle';
import TWEEN from '@tweenjs/tween.js';
import { testBtnsGroup } from './testBtbsGroup';
import { gameEvents } from '../core/EventSystem';

const BigWinLevelsConfig = [
    {
        title: "Big Win",
        winValueMin: 0,
        winValueMax: 199.99,
        style: {
            colorText: 'green',
            fontSize: 30
        }
    },
    {
        title: "Mega Win",
        winValueMin: 200,
        winValueMax: 499.99,
        style: {
            colorText: 'blue',
            fontSize: 30
        }
    },
    {
        title: "Super Mega Win",
        winValueMin: 500,
        winValueMax: +Infinity,
        style: {
            colorText: 'red',
            fontSize: 30
        }
    }
];

export class BigWin extends PIXI.Container {
    constructor({ coords, width, height }) {
        super();

        const { x, y } = coords;

        console.log({ x, y });

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

        this.addChild(background);
        this.addChild(titleText);
        this.addChild(countUpAnimHolder);
        this.buttons = new PIXI.Container;
        this.addChild(this.buttons);
        this.createTestButtons();

        // this.visible = false;
        this.background = background;
        this.titleText = titleText;
        this.hide();


    }

    start(value, callback) {
        this.show();
        this.level = -1;

        this.preparePresentation(value);
    }

    preparePresentation(finalValue) {
        this.level++;
        this.playPresentation(BigWinLevelsConfig[this.level], finalValue);
    }

    playPresentation({ title, winValueMin, winValueMax, style }, finalValue) {
        this.setStyle(style, title);
        const hasNextLevel = finalValue > winValueMax;
        const value = hasNextLevel ? winValueMax : finalValue;

        this.countUpAnimHolder.start(winValueMin, value, () => {

            if (hasNextLevel) {
                this.preparePresentation(finalValue);
            } else {
                setTimeout(() => {
                    this.hide();

                    gameEvents.fire("bigWinEnd");
                    // callback();
                }, 2000)

            }
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

    setStyle(levelStyle, levelTitle) {
        this.countUpAnimHolder.setStyle({ colorText: levelStyle.colorText, fontSize: levelStyle.fontSize });
        this.titleText.setText(levelTitle);
        this.titleText.setStyle({ colorText: 'Brown', fontSize: levelStyle.fontSize + 6 });

    }
}


