import * as PIXI from 'pixi.js';

export class BgModule {
    init() {
        this.bg = PIXI.Sprite.from('images/background.jpg');

        // this.bg.anchor.set(0.5);

        this.bg.x = 0;
        this.bg.y = 0;

        this.panel = PIXI.Sprite.from('images/panel.png');

        //panel.anchor.set(0.5);

        this.panel.x = 0;//this.pixiApp.screen.width / 2;
        this.panel.y = 550;//this.pixiApp.screen.height - 200;
    }

    load({ application }) {
        application.getStage().addChild(this.bg);
        application.getStage().addChild(this.panel);
    }
}