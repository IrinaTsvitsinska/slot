import { Reel } from "../../components/Reel";
import { ReelGroup } from "../../components/ReelGroup";
import { STRIPS } from "../../config/Constants";
import { gameEvents } from "../../core/EventSystem";

export class ReelsModule {
  init() {
    this.reelGroup = new ReelGroup(STRIPS, 50, 50, 150, 5, 100, 3);
    this.reels = this.reelGroup.reels;
    //(strips, x, y, reelHorisontalOffset, reelAmount, symbolSize, reelSymbolsAmount, allReelsStoppedCallback) 
    // [
    //   new Reel(1, 50, 50, 100, 3, STRIPS[0], () => {
    //     console.log('callback');
    //   }),

    // ];
  }

  load({ application }) {
    application.getStage().addChild(...this.reels);
    // this.reels.reels.forEach(reel => {
    //   application.getStage().addChild(reel);
    // });

    this.reels.forEach(reel => application.addToTicker(() => {
      reel.update();
    }));

    gameEvents.on("spinButtonClick", () => {
      console.log("Ahaaaaa");
      // reels.getReel(0).setSymbolToSpin(STRIPS[0].length + 3);
      this.reels.forEach((reel, index) => reel.setSymbolToSpin(STRIPS[index].length + 3));

    });
  }

  getReel(reelIndex) {
    return this.reels[reelIndex];
  }
}
