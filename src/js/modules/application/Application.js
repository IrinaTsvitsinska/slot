import TWEEN from '@tweenjs/tween.js';
import * as PIXI from 'pixi.js';

export class Application {
    constructor() {
        this.pixiApp = new PIXI.Application({
            width: 1280,
            height: 1024,
            backgroundColor: 0x070606,
            resolution: window.devicePixelRatio || 1,
        });
        this.tickerObject = [];
    }

    init() {
        document.body.appendChild(this.pixiApp.view);


        // this.pixiApp.stage.addChild(bg);
        // this.pixiApp.stage.addChild(panel);

        this.pixiApp.ticker.add((/*delta*/) => {
            TWEEN.update();
            this.tickerObject.forEach(callback => callback());
            // reel.update();
        });
    }

    load() {

    }

    getStage() {
        return this.pixiApp.stage;
    }

    addToTicker(callback) {
        this.tickerObject.push(callback);
    }
}