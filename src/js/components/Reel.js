import * as PIXI from 'pixi.js';
import { Cell } from './cell';
import { ASSETS } from '../config/Constants';
import { Filler } from './Filler';

export class Reel extends PIXI.Container {
  constructor({ id, coords, symbolSize, symbolAmount, strip, reelStoppedCallback }) {
    super();

    let stripLength = strip.length;
    this.x = coords.x;
    this.y = coords.y;
    this.id = id;
    this.stripLength = stripLength;

    this.symbolAmount = symbolAmount;
    this.symbolSize = symbolSize;
    this.filler = new Filler(strip, -1);
    this.assets = ASSETS;
    this.textures = this.createTextures(this.assets);
    this.cells = [];
    this.reelPosition = 0;
    this.symbolToSpin = 0;
    this.reelStoppedCallback = reelStoppedCallback;
    this.createReel();

    const graphics = new PIXI.Graphics();
    graphics.position.set(0, symbolSize / 2);
    graphics.beginFill(0x00ffff, 0.5);
    graphics.drawRect(10, 0, symbolSize + 10, symbolSize * symbolAmount + 9);
    graphics.endFill();
    // this.graphics = graphics;
    this.addChild(graphics);

    this.state = 'stopped';

    this.mask = graphics;
  }

  createReel() {
    let x = 0;
    let symbolAmount = this.symbolAmount;
    for (let i = symbolAmount + 1; i > 0; i--) {
      let y = i * this.symbolSize - this.symbolSize;
      let newCell = new Cell({
        x: 0,
        y: y - this.symbolSize / 2,
        width: this.symbolSize,
        height: this.symbolSize
      }
      );
      this.addChild(newCell);
      let symbolId = this.filler.getNext();
      // console.log(symbolId);
      newCell.setTexture(this.textures[symbolId]);
      this.cells.push(newCell);
    }
  }

  createTextures(assets) {
    const textures = {};
    const names = Object.keys(this.assets);
    //console.log(names);

    names.forEach(assetName => {
      // console.log(assets[assetName]);
      textures[assetName] = PIXI.Texture.from(assets[assetName]);
    });
    return textures;
  }

  reset() {
    this.cells.forEach(cell => cell.reset());
  }



  moving() {
    let symbolSize = this.symbolSize;
    // console.log(this.reelPosition, symbolSize);

    if (this.reelPosition > this.symbolSize) {
      this.reelPosition = this.reelPosition % 3;
      this.symbolToSpin--;

      const nextSymbolName = this.filler.getNext();

      let lastSymbol = this.cells.pop();
      lastSymbol.setTexture(this.textures[nextSymbolName]);
      this.cells.unshift(lastSymbol);
    }

    for (let i = 0; i < this.cells.length; i++) {
      const symbol = this.cells[i];
      symbol.position.y = this.reelPosition + i * symbolSize;
    }
    this.reelPosition += 50;
  }

  update() {
    if (this.state === "stopped") {
      return;
    }
    this.moving();

    if (this.symbolToSpin == 0 && this.state == 'stopping') {
      this.state = 'stopped';
      console.log(this.state);

      console.log("REEL STOPPED");
      this.reelStoppedCallback();
    }
  }

  setSymbolToSpin(symbolToSpin) {

    this.symbolToSpin = symbolToSpin;
  }

  startSpining() {
    this.state = 'spinning';
    console.log(this.state);
  }

  startStopping(stopPosition) {
    this.state = 'stopping';
    this.setSymbolToSpin(2 * this.filler.getLength() - this.filler.getCurrentPosition() - stopPosition + 1);
    console.log(this.state);

  }

  setStopPosition(stopPosition) {
    this.reelPosition = stopPosition;

  }

  getState() {
    return this.state;
  }
}
