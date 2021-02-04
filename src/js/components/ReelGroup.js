import * as PIXI from 'pixi.js';

import { gameEvents } from '../core/EventSystem';
import { Reel } from "./Reel";

export class ReelGroup extends PIXI.Container {
    constructor({ strips, coords = { x: x, y: y }, reelHorisontalOffset, reelAmount, symbolSize, reelSymbolsAmount, allReelsStoppedCallback }) {
        super();
        console.log(strips);
        this.position.set(coords.x, coords.y);
        this.y = coords.y;
        this.x = coords.x;
        this.reels = [];
        this.stopPositions = [];
        //this.strips = STRIPS;

        this.createReels(reelAmount, reelHorisontalOffset, reelSymbolsAmount, symbolSize, strips/*, allReelsStoppedCallback-*/);
        console.log(this.reels);
    }

    createReels(reelAmount, reelHorisontalOffset, symbolAmount, symbolSize, strips/*, allReelsStoppedCallback*/) {
        for (let i = 0; i < reelAmount; i++) {
            let reel = new Reel({
                id: i,
                coords: { x: i * reelHorisontalOffset + this.x, y: this.y },
                symbolSize: symbolSize,
                symbolAmount: symbolAmount,
                strip: strips[i],
                reelStoppedCallback: () => this.onReelStop(i),
            });
            this.reels.push(reel);

            this.addChild(reel);
        }

    }

    onReelStop(reelIndex) {
        const nextReelIndex = reelIndex + 1;
        if (this.reels[nextReelIndex] !== undefined) {
            this.reels[nextReelIndex].startStopping(this.stopPositions[nextReelIndex]);;
        } else {
            gameEvents.fire("spinComplete");
            // this.allReelsStoppedCallback();
        }

    }

    update() {
        this.reels.forEach(reel => reel.update());
    }

    getReel(index) {
        return this.reels[index];
    }

    startSpin() {

        this.reels.forEach((reel, index) => {
            reel.startSpining();

            // reel.startStopping(STRIPS[index].length + 3);
            //reel.setSymbolToSpin();
        });





    }

    setStopPositions(stopPositions) {
        this.stopPositions = stopPositions;
        setTimeout(() => {
            this.reels[0].startStopping(stopPositions[0]);
        }, 1000);

        // for (let i = 0; i < stopPositions.length; i++) {
        //     this.reels[i].setStopPosition(stopPositions[i]);
        // }
    }
}