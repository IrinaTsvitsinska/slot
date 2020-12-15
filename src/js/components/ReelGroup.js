import * as PIXI from 'pixi.js';
import { STRIPS } from "../config/Constants";
import { Reel } from "./Reel";

export class ReelGroup extends PIXI.Container {
    constructor(strips, x, y, reelHorisontalOffset, reelAmount, symbolSize, reelSymbolsAmount/*, allReelsStoppedCallback*/) {
        super();
        console.log(strips);
        this.position.set(x, y);
        this.y = y;
        this.x = x;
        this.reels = [];
        //this.strips = STRIPS;

        this.createReels(reelAmount, reelHorisontalOffset, reelSymbolsAmount, symbolSize, strips/*, allReelsStoppedCallback-*/);
        console.log(this.reels);
    }

    createReels(reelAmount, reelHorisontalOffset, symbolAmount, symbolSize, strips/*, allReelsStoppedCallback*/) {
        for (let i = 0; i < reelAmount; i++) {
            let reel = new Reel(i, i * reelHorisontalOffset + this.x, this.y, symbolSize, symbolAmount, strips[i], () => console.log('reel :', i));/*, allReelsStoppedCallback[i]*/
            this.reels.push(reel);

        }
    }
}