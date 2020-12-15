import { SpinButton, textureButtons } from "../../components/SpinButton";
import { STRIPS } from "../../config/Constants";
import { gameEvents } from "../../core/EventSystem";

export class UserInterfaceModule {
  init() {
    /* tslint:disable */
    console.log('HELLO UI!');
    /* tslint:enable */
  }
  load({ application }) {
    const imgBtn = new SpinButton(
      500,
      500,
      200,
      70,
      'SpinButton',
      textureButtons,
      () => {
        // reels.getReel(0).setSymbolToSpin(STRIPS[0].length + 3);
        gameEvents.fire("spinButtonClick");
      }
    );
    application.getStage().addChild(imgBtn);
  }
}
