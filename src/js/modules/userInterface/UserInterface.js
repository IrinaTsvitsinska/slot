
import { TextButton, textureButtons } from "../../components/TextButton";
import { ValueSelector } from "../../components/ValueSelector";
import { gameEvents } from "../../core/EventSystem";

export class UserInterfaceModule {
  init() {
    /* tslint:disable */
    console.log('HELLO UI!');
    /* tslint:enable */
  }
  load({ application }) {

    const valueSelector = new ValueSelector(
      {
        x: 500,
        y: 10,
        height: 70,
        width: 300,
        values: [0.1, 0.2, 0.5, 1, 2, 5],
        label: 'Credits'
      });



    // window.bigWin = bigWin;
    const imgBtn = new TextButton(
      {
        x: 400,
        y: 500,
        width: 400,
        height: 70,
        label: 'SpinButton',
        textures: textureButtons,
        callback: () => {
          imgBtn.disable();
          // reels.getReel(0).setSymbolToSpin(STRIPS[0].length + 3);
          gameEvents.fire("spinButtonClick");

          // console.log(valueSelector.getCurrentValue());
        }
      }

    );




    gameEvents.on("spinComplete", () => imgBtn.enable());

    application.getStage().addChild(imgBtn);
    application.getStage().addChild(valueSelector);
    // application.getStage().addChild(bigWin);

  }
}
