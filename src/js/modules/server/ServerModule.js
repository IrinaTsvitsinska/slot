import { gameEvents } from "../../core/EventSystem";
import { Server } from "./Server";

export class ServerModule {
  init() {
    this.server = new Server();
  }
  load() {

  }


  getStopPositions() {
    console.log(this.server.makeSpin(1));
    return this.server.getRandomStopPosition();
  }
}
