
import { BigWin } from "../../components/BigWin";
import { testBtnsGroup } from "../../components/testBtbsGroup";
import { gameEvents } from "../../core/EventSystem";


export class BigWinModule {
    init() {
        this.bigWin = new BigWin({
            coords: {
                x: 50,
                y: 50
            },
            width: 1100,
            height: 900
        });
    }

    load({ application }) {
        application.getStage().addChild(this.bigWin);

        this.buttons = new testBtnsGroup({
            x: 0,
            y: 0,
            width: window.width,
            height: window.height,
            callbacks: {
                bigWin: () => { this.bigWin.start(100) },
                megaWin: () => { this.bigWin.start(400) },
                superMegaWin: () => { this.bigWin.start(1000) },
            }
        });
        this.bigWin.addChild(this.buttons);
        gameEvents.on("spinComplete", () => { this.bigWin.start(Math.round(Math.random() * 1000) + 10) });

    }
}