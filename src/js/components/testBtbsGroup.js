import * as PIXI from 'pixi.js';
import { BigWinBtnTextures } from '../config/Constants';
import { gameEvents } from '../core/EventSystem';
import { TextButton } from './TextButton';
export class testBtnsGroup extends PIXI.Container {
    constructor({ x, y, width, height, callbacks }) {
        super();
        this.position.set(x, y);
        this.width = width;
        this.height = height;
        this.buttons = [];


        this.createTestButtons(callbacks);

    }

    createTestButtons(callbacks) {

        const bigWinBtn = new TextButton(
            {
                x: 50,
                y: 600,
                width: 200,
                height: 70,
                label: 'bigWin',
                textures: BigWinBtnTextures,
                callback: () => {
                    this.disableAllButtons();

                    callbacks['bigWin']();

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
                    this.disableAllButtons();
                    callbacks['megaWin']();
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
                    this.disableAllButtons();
                    callbacks['superMegaWin']();
                }
            }

        );
        this.buttons.push(bigWinBtn, megaWinBtn, megaSuperWinBtn);
        gameEvents.on("bigWinEnd", () => this.enableAllButtons());



        this.addChild(bigWinBtn);
        this.addChild(megaWinBtn);
        this.addChild(megaSuperWinBtn);
        bigWinBtn.setStyle(22, "green");
        megaWinBtn.setStyle(22, "blue");
        megaSuperWinBtn.setStyle(22, "red");
    }

    disableAllButtons() {
        this.buttons.forEach(button => {
            button.disable();
        });
    }

    enableAllButtons() {
        this.buttons.forEach(button => {
            button.enable();
        });
    }
}