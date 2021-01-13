
import { BigWin } from "../../components/BigWin";


export class BigWinModule {
    init() {
        this.bigWin = new BigWin({
            coords: {
                x: 50,
                y: 50
            },
            width: 700,
            height: 500
        });
    }

    load({ application }) {
        application.getStage().addChild(this.bigWin);

    }
}