"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomValues {
    randomNumbers(number) {
        if (number == 4) {
            return Math.floor(Math.random() * 10000).toString();
        }
        if (number == 3) {
            return Math.floor(Math.random() * 1000).toString();
        }
        if (number == 2) {
            return Math.floor(Math.random() * 100).toString();
        }
        if (number == 6) {
            return Math.floor(Math.random() * 1000000).toString();
        }
        if (number == 9) {
            return Math.floor(Math.random() * 1000000000).toString();
        }
        if (number == 10) {
            return Math.floor(Math.random() * 10000000000).toString();
        }
    }
    numbersInSplitFormat(number) {
        if (number == 9) {
            let nineNumbers = this.randomNumbers(3) + "-" + this.randomNumbers(2) + "-" + this.randomNumbers(4);
            return nineNumbers.toString();
        }
        if (number == 10) {
            let temNumbers = this.randomNumbers(3) + "-" + this.randomNumbers(3) + "-" + this.randomNumbers(4);
            return temNumbers.toString();
        }
    }
}
exports.RandomValues = RandomValues;
