
import { MoneyFild } from "../../components/MoneyFild";
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

    this.valueSelector = new ValueSelector(
      {
        x: 880,
        y: 654,
        height: 50,
        width: 90,
        values: [0.1, 0.2, 0.5, 1, 2, 5],
        label: 'Bet'
      });



    // window.bigWin = bigWin;
    const imgBtn = new TextButton(
      {
        x: 596,
        y: 629,
        width: 400,
        height: 70,
        label: '',
        textures: textureButtons,
        callback: () => {
          imgBtn.disable();
          // reels.getReel(0).setSymbolToSpin(STRIPS[0].length + 3);
          gameEvents.fire("spinButtonClick");

          // console.log(valueSelector.getCurrentValue());
        }
      }

    );

    this.moneyFild = new MoneyFild({ x: 1030, y: 630, title: 'Money', width: 220, height: 100 });

    gameEvents.on("spinComplete", () => imgBtn.enable());

    application.getStage().addChild(imgBtn);
    application.getStage().addChild(this.valueSelector);
    application.getStage().addChild(this.moneyFild);
    // application.getStage().addChild(bigWin);

  }


}
