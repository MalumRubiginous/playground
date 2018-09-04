/* globalVar.js */
/* required by: init(), zeroDetect(), SquareCol, SquaresTable */

var constant = require('./constants.js');

function define(name, value) {
    Object.defineProperty(exports, name, {
			value: value,
			writable: true,
			enumerable: true,
			configurable: true
    });
}

define("squares", new Array(constant.ROWS));
define("INIT_ELEMENT", new Array(constant.ROWS));
define("INIT_CHECK_STATE", new Array(constant.ROWS));
define("INIT_FLAGS_STATE", new Array(constant.ROWS));
define("minesHush",[]);
