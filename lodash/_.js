let _ = {
    clamp(number, lowerB, upperB) {
        const lowerClampedValue = Math.max(number, lowerB);
        const clampedValue = Math.min(lowerClampedValue, upperB);

        return clampedValue;
    },
    inRange(number, start, end) {

        if (typeof(end) === 'undefined') {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;

        }
        let isInRange;
        if (start <= number && number < end) {
            isInRange = true;
        } else {
            isInRange = false;
        }
        return isInRange;
    },
    words(string) {

        const words = string.split(' ');

        return words;
    },


    pad(string, Length) {

        if (Length <= string.length) {
            return string;
        }
        const diff = Length - string.length;
        const startPaddingLength = Math.floor(diff / 2);
        const endPaddingLength = diff - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;
    },
    has(obj, key) {
        let hasValue;

        if (!obj.hasOwnProperty(key)) {
            hasValue = false;
            return hasValue;
        } else {
            hasValue = true;
            return hasValue;
        }


    },
    invert(obj) {
        const invertedObject = {}
        for (let [key, value] of Object.entries(obj)) {
            let originalValue = key;
            let temp = key;
            key = value;
            value = temp;


            return swappedObject = { originalValue: value };

        }

    },
    findKey(obj, predicate) {
        let failedResult = undefined;


        for (let key in obj) {
            let value = obj[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key;


            }

        }

        return failedResult;

    },
    drop(arr, n) {
        if (typeof(n) === 'undefined') {
            n = 1;
        }
        const droppedArray = arr.slice(n);
        return droppedArray;


    },
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex(function(element, index) {
            return !predicate(element, index, array);
        });
        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },
    chunk(array, size) {
        if (typeof(size) === 'undefined') {
            size = 1;
        };

        const arrayChunks = [];
        let counter = 0;
        for (let i = 0; i < array.length; i += size) {
            counter = counter + size;
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;

    }



}




// Do not write or modify code below this line.
module.exports = _;