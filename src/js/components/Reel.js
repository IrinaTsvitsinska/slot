import * as PIXI from 'pixi.js';
import { Cell } from './cell';
import { ASSETS } from '../config/Constants';
import { Filler } from './Filler';

export class Reel extends PIXI.Container {
  constructor(id, x, y, symbolSize, symbolAmount, strip, reelStoppedCallback) {
    super();
    console.log(symbolAmount, strip);
    let stripLength = strip.length;
    console.log(stripLength);
    this.x = x;
    this.y = y;
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
    this.createReel();

    const graphics = new PIXI.Graphics();
    graphics.position.set(0, symbolSize / 2);
    graphics.beginFill(0x00ffff, 0.5);
    graphics.drawRect(-5, 0, symbolSize + 10, symbolSize * symbolAmount + 9);
    graphics.endFill();
    // this.graphics = graphics;
    this.addChild(graphics);

    // container.mask = graphics;
  }

  createReel() {
    let x = 0;
    let symbolAmount = this.symbolAmount;
    for (let i = symbolAmount + 1; i > 0; i--) {
      let y = i * this.symbolSize - this.symbolSize;
      let newCell = new Cell(
        0,
        y - this.symbolSize / 2,
        this.symbolSize,
        this.symbolSize
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

      //console.log('this.symbolToSpin ' + this.symbolToSpin);
      const nextSymbolName = this.filler.getNext();
      // console.log('nextSymbolName ' + nextSymbolName);
      let lastSymbol = this.cells.pop();
      lastSymbol.setTexture(this.textures[nextSymbolName]);
      this.cells.unshift(lastSymbol);
    }

    for (let i = 0; i < this.cells.length; i++) {
      const symbol = this.cells[i];
      symbol.position.y = this.reelPosition + i * symbolSize;
    }
    this.reelPosition += 10;
  }

  update() {
    if (this.symbolToSpin > 0) {
      this.moving();
    }
  }

  setSymbolToSpin(symbolToSpin) {
    this.symbolToSpin = symbolToSpin;
  }
}
