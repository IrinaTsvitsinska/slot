import { SpinButton, textureButtons } from "../../components/SpinButton";
import { ValueSelector } from "../../components/ValueSelector";
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
    const valueSelector = new ValueSelector(500, 10, 100, 300, [0.1, 0.2, 0.5, 1, 2, 5], 'Credits');
    application.getStage().addChild(imgBtn);
    application.getStage().addChild(valueSelector);
  }
}
