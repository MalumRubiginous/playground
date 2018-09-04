/* SquaresCol.js */
/* 設置td */
/* required by : SquaresRow */

'use strict';
var React = require('react');

var constant = require('./constants.js');
var globalVar = require('./globalVar.js');

var numOfFlags=0;

var SquaresCol = React.createClass({
	getInitialState: function() {
		return { checked:this.props.initialChecked, element:this.props.element, flagged:this.props.initialFlagged};
	},	
	handleLeftClick: function(){
		if(!this.props.isGameOver && !this.props.initialFlagged && !this.props.initialChecked){
			this.setState({ checked: true });
			this.setState({ element: globalVar.squares[this.props.index_r][this.props.index_c] });
			this.props.callbackParent(this.props.index_r,this.props.index_c);
		}
	},
	handleRightClick: function(event){
		if(!this.props.isGameOver){
			if(!this.state.checked){
				if(numOfFlags<constant.MINES || this.state.flagged){
					if(!this.state.flagged){
						numOfFlags++;
						this.setState({ flagged: true });
						this.setState({element:'?'});
					}
					else if(this.state.flagged){
						numOfFlags--;
						this.setState({ flagged: false });
						this.setState({ element:'\u2007'});
					}
					this.props.callbackFlagged(this.props.index_r,this.props.index_c);
				}
				else{
					alert("到達旗子數上限");
				}
			}
		}
		event.preventDefault();
	},
   render: function() {
		/*--backgroundColor style*/
   	var BG_COLOR = (this.props.initialChecked) ? '#EFEFEF' : '#222';
		BG_COLOR =(this.state.flagged) ? '#19D175' : BG_COLOR;
		
		/*--內容style*/
		var element=(<span style={{color: '#FFF'}}>{this.state.element}</span>);
		if(this.state.checked||this.props.initialChecked){
			if(this.state.element==='X'||this.props.element==='X'){
				if(this.props.isGameOver && this.props.isWin){//正常結束
					element=(<span style={{color: '#FFF'}}>{this.props.element}</span>);
					BG_COLOR='#19D175';
				}
				else{
					element=(this.props.element==='X')?(<span style={{color: '#FFF'}}>{this.props.element}</span>):
					(<span style={{color: '#FFF'}}>{this.state.element}</span>);
					BG_COLOR='#FF1919';
				}
			}
			else if(this.state.element===0||this.props.element===0){
				element=(<span style={{color: '#0099FF'}}>{this.props.element}</span>);
			}
			else{
				element=this.props.element;	
			}
		}
      return <td onClick={this.handleLeftClick} onContextMenu={this.handleRightClick} style={{background:BG_COLOR}}>{element}</td>;
   }
});

module.exports = SquaresCol;