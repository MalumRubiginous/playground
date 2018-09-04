/* SquaresTable.js */
/* required by : SquaresCol, entry.js */

'use strict';
var React = require('react');

var SquaresRow = require('./SquaresRow.js');
var constant = require('./constants.js');
var globalVar = require('./globalVar.js');
var zeroDetect = require('./zeroDetect.js');

/*--設置table*/
var SquaresTable = React.createClass({
   getInitialState: function() {
      return {
			element: globalVar.INIT_ELEMENT,
			checked: globalVar.INIT_CHECK_STATE,
			flagged: globalVar.INIT_FLAGS_STATE,
			isGameOver: false,
			isWin: true
		};
   },
   onChildChanged: function(i,j) {
		globalVar.INIT_CHECK_STATE[i][j]=true;
      this.setState({ checked: globalVar.INIT_CHECK_STATE });
		globalVar.INIT_ELEMENT[i][j]=globalVar.squares[i][j];
		this.setState({ element: globalVar.INIT_ELEMENT });

		/*--gameContinue*/
		if(!this.state.isGameOver){
			/*--開'0'*/
			if(this.state.element[i][j] === 0){
				zeroDetect(i,j);
				this.setState({ checked: globalVar.INIT_CHECK_STATE });
				this.setState({ element: globalVar.INIT_ELEMENT });
			}
			/*--game over--踩雷*/
			if(this.state.element[i][j]==='X'){
				this.setState({isGameOver:true});
				this.setState({isWin:false});
				for(var i=0;i<constant.MINES;i++){//show up mineSquares
					globalVar.INIT_CHECK_STATE[globalVar.minesHush[i].xAxis][globalVar.minesHush[i].yAxis]=true;
					globalVar.INIT_ELEMENT[globalVar.minesHush[i].xAxis][globalVar.minesHush[i].yAxis]='X';
				}
				this.setState({ checked: globalVar.INIT_CHECK_STATE });
				this.setState({ element: globalVar.INIT_ELEMENT });
			}
		}
		/*--openedSquares*/
		var checkingCounter=0;
		for(var i=0;i<constant.ROWS;i++){
			for(var j=0;j<constant.COLUMNS;j++){
				checkingCounter+=(this.state.checked[i][j])?1:0;
			}
		}

		/*--確認clicked 正常結束*/
		if((checkingCounter+constant.MINES)===(constant.ROWS*constant.COLUMNS)){
			this.setState({isGameOver:true});
			for(var i=0;i<constant.MINES;i++){//show up mineSquares
				globalVar.INIT_FLAGS_STATE[globalVar.minesHush[i].xAxis][globalVar.minesHush[i].yAxis]=true;
				globalVar.INIT_CHECK_STATE[globalVar.minesHush[i].xAxis][globalVar.minesHush[i].yAxis]=true;
					globalVar.INIT_ELEMENT[globalVar.minesHush[i].xAxis][globalVar.minesHush[i].yAxis]='X';
			}
			this.setState({ flagged: globalVar.INIT_FLAGS_STATE });
			this.setState({ checked: globalVar.INIT_CHECK_STATE });
			this.setState({ element: globalVar.INIT_ELEMENT });
		}
   },
	onChildFlagged: function(i,j){
		globalVar.INIT_FLAGS_STATE[i][j]=!globalVar.INIT_FLAGS_STATE[i][j];
		this.setState({ flagged: globalVar.INIT_FLAGS_STATE });
	},
    render: function() {
		var rows = [];
			for(var i=0;i<constant.ROWS;i++){
				rows.push(<SquaresRow element={this.state.element[i]}
				initialChecked={this.state.checked[i]} 
				initialFlagged={this.state.flagged[i]}
				isGameOver={this.state.isGameOver}
				isWin={this.state.isWin}
				callbackParent={this.onChildChanged} 
				callbackFlagged={this.onChildFlagged} 
				index_r={i} />);
			}
        return  <table>{rows}</table>;
    }
});

module.exports = SquaresTable;