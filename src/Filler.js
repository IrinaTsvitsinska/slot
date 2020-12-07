export class Filler {
    constructor(list, i = 0) {
        this.list = list;
        this.i = i;
        this.n = list.length;

    }

    getNext() {

        if (this.i >= this.n - 1) {
            this.i = this.i - this.n;
        }
        // if (this.i <= 0) {
        //     this.i += this.n;
        // }
        this.i++;
        return this.list[this.i];

    }

    getCurrentPosition() {
        return this.i;
    }

    setCurrentPosition(i) {
        this.i = i;
    }

    getLength() {
        return this.n;
    }
}