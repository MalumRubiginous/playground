/* constants.js */
/* required by: init(), zeroDetect(), SquareCol, globalVar */

function defineConst(name, value) {
    Object.defineProperty(exports, name, {
			value: value,
			enumerable: true
    });
}

defineConst("ROWS", 10);
defineConst("COLUMNS", 10);
defineConst("MINES", 10);

