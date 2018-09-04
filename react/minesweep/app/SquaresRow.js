/* SquaresRow.js */
/* 設置tr */
/* required by : SquaresTable */

'use strict';
var React = require('react');

var SquaresCol = require('./SquaresCol.js');
var constant = require('./constants.js');


var SquaresRow = React.createClass({
	render: function() {
		var cols = [];
      for(var i=0;i<constant.COLUMNS;i++){
			cols.push(<SquaresCol element={this.props.element[i]}
			initialChecked={this.props.initialChecked[i]}
			initialFlagged={this.props.initialFlagged[i]}
			isGameOver={this.props.isGameOver}
			isWin={this.props.isWin}
			callbackParent={this.props.callbackParent}
			callbackFlagged={this.props.callbackFlagged} 
			index_r={this.props.index_r} 
			index_c={i} 
			/>);
		}
    // SquaresRow doesn't care of "text", but it has to pass it down nonetheless
   return <tr>{cols}</tr>;
  }
});

module.exports = SquaresRow;