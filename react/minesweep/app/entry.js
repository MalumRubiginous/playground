/* entry.js */

'use strict';
require("../style/style.css");
var React = require('react');

var SquaresTable = require('./SquaresTable.js');
var init = require('./init.js');


init();

React.render(<SquaresTable />, document.getElementById('board'));

/*
files:
  SquaresTable.js
  init.js
  zeroDetect.js
  globalVar.js
  constants.js
*/