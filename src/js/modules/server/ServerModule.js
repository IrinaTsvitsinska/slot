import { gameEvents } from "../../core/EventSystem";
import { Server } from "./Server";

export class ServerModule {
  init() {
    this.server = new Server();
  }
  load({ userInterface }) {
    this.valueSelector = userInterface.valueSelector;
    gameEvents.on("spinButtonClick", () => {
      this.serverResponse = this.server.makeSpin({ bet: this.valueSelector.getCurrentValue() });
    });
    gameEvents.on("spinComplete", () => {
      console.log(this.serverResponse);
      console.log('win', this.serverResponse.win);
      userInterface.moneyFild.setValue(this.serverResponse.money);
    });
  }


  getStopPositions() {

    return this.serverResponse.stopPositions;
  }
}
