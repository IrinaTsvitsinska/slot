
import { ReelGroup } from "../../components/ReelGroup";
import { STRIPS } from "../../config/Constants";
import { gameEvents } from "../../core/EventSystem";

export class ReelsModule {
  init() {

    this.reelGroup = new ReelGroup(
      {
        strips: STRIPS,
        coords: {
          x: 50,
          y: 0
        },
        reelHorisontalOffset: 200,
        reelAmount: 5,
        symbolSize: 150,
        reelSymbolsAmount: 3,

      });

  }

  load({ application, server }) {
    application.getStage().addChild(this.reelGroup);

    application.addToTicker(() => this.reelGroup.update());

    gameEvents.on("spinButtonClick", () => {
      this.reelGroup.startSpin();

      const stopPositions = server.getStopPositions();
      this.reelGroup.setStopPositions(stopPositions);
    });
  }

  getReel(reelIndex) {
    return this.reelGroup.getReel(reelIndex);
  }
}
