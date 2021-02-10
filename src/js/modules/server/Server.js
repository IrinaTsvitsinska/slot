import { Filler } from "../../components/Filler";
import { STRIPS, WIN_LINES, SYMBOL_PRICE } from "../../config/Constants";

export class Server {
    constructor() {
        this.amountElements = 3;
        this.stopPositions = [];
        this.outcome = []; //VisualElements
        this.winSituations = [];
        this.money = 500;
        this.win = 0;
        this.bonus = {};
    }



    getRandomStopPosition() {
        let stopPositions = [];
        for (let i = 0; i < STRIPS.length; i++) {
            stopPositions.push(Math.round(Math.random() * STRIPS[i].length));
        }
        console.log(stopPositions);
        return stopPositions;
    }

    getCurrentCombination(stopPositions) {
        let currentCombination = [];

        for (let i = 0; i < STRIPS.length; i++) {
            let filler = new Filler(STRIPS[i], 0);
            let newline = [];
            filler.setCurrentPosition(stopPositions[i] - 1);

            for (let n = 0; n < this.amountElements; n++) {
                let nextSymbol = filler.getNext();
                newline.push(nextSymbol);
            }
            currentCombination.push(newline);
        }
        console.log(currentCombination);

        return currentCombination;
    }

    makeSpin({ bet, fakeStopPosition }) {
        console.log('bet', bet);
        this.stopPositions = fakeStopPosition ? fakeStopPosition : this.getRandomStopPosition();
        this.outcome = this.getCurrentCombination(this.stopPositions);
        this.winSituations = this.getWinSituations(this.outcome, WIN_LINES, bet);
        this.win = this.calculateWinValue(this.winSituations);
        this.money = (this.money - bet + this.win).toFixed(2);;

        return {
            stopPositions: this.stopPositions,
            outcome: this.outcome,
            winSituations: this.winSituations,
            money: this.money,
            win: (this.win).toFixed(2),

        }
    }

    getWinSituations(outCome, winLines, bet) {
        let winSituations = [];
        for (let i = 0; i < winLines.length; i++) {
            let winLine = winLines[i];
            let symbolsOnLine = [];
            let symbolsOnLineValue = [];
            let winSybmolAmount = 0;
            for (let column = 0; column < winLine.length; column++) {
                let rowId = winLine[column];
                const obj = {
                    reelIndex: column,
                    symbolIndex: rowId
                };
                symbolsOnLineValue.push(outCome[column][rowId]);
                symbolsOnLine.push(obj);
            }


            winSybmolAmount = this.getWinSymbolAmount(symbolsOnLineValue);

            if (winSybmolAmount >= 3) {
                winSituations.push({
                    lineNumber: i,
                    value: (SYMBOL_PRICE[symbolsOnLineValue[0]] * bet * winSybmolAmount / outCome.length).toFixed(2),
                    line: symbolsOnLine,
                    winSymbolAmount: winSybmolAmount
                });
            }

        }

        return winSituations;
    }

    calculateWinValue(winSituations) {
        let win = 0;
        for (let i = 0; i < winSituations.length; i++) {
            win += +winSituations[i].value;
            console.log(winSituations[i]);
        }

        return win;
    }

    getWinSymbolAmount(line) {
        let winSymbolAmount = 0;
        const value = line[0];
        if (value === line[1] && value === line[2]) {
            winSymbolAmount = 3;
            if (value === line[3]) {
                winSymbolAmount++;
                if (value === line[4]) {
                    winSymbolAmount++;
                }
            }
        }

        return winSymbolAmount;
    }

}