/* zeroDetect.js */
/* 展開相連'0' 使用>Recursive */
/* required by : SquaresCol */

'use strict';
var constant = require('./constants.js');
var globalVar = require('./globalVar.js');

function zeroDetect(i,j){
	if(i===0){//最上排
		if(j===0){//左上角
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !== 'X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1]=== 0){zeroDetect(i,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j+1] && !globalVar.INIT_CHECK_STATE[i+1][j+1] && globalVar.squares[i+1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j+1]=true;
				globalVar.INIT_ELEMENT[i+1][j+1]=globalVar.squares[i+1][j+1];
				if(globalVar.squares[i+1][j+1] === 0){zeroDetect(i+1,j+1);}
			}
		}
		else if(j===constant.COLUMNS-1){//右上角
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j-1] && !globalVar.INIT_CHECK_STATE[i+1][j-1] && globalVar.squares[i+1][j-1] !== 'X'){
				globalVar.INIT_CHECK_STATE[i+1][j-1]=true;
				globalVar.INIT_ELEMENT[i+1][j-1]=globalVar.squares[i+1][j-1];
				if(globalVar.squares[i+1][j-1] === 0){zeroDetect(i+1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
		}
		else{//最上排扣除最左右兩個
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1] === 0){zeroDetect(i,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j-1] && !globalVar.INIT_CHECK_STATE[i+1][j-1] && globalVar.squares[i+1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j-1]=true;
				globalVar.INIT_ELEMENT[i+1][j-1]=globalVar.squares[i+1][j-1];
				if(globalVar.squares[i+1][j-1] === 0){zeroDetect(i+1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j+1] && !globalVar.INIT_CHECK_STATE[i+1][j+1] && globalVar.squares[i+1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j+1]=true;
				globalVar.INIT_ELEMENT[i+1][j+1]=globalVar.squares[i+1][j+1];
				if(globalVar.squares[i+1][j+1] === 0){zeroDetect(i+1,j+1);}
			}	
		}
	}//最上排
	else if(i===constant.ROWS-1){//最下排
		if(j===0){//左下角
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j+1] && !globalVar.INIT_CHECK_STATE[i-1][j+1] && globalVar.squares[i-1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j+1]=true;
				globalVar.INIT_ELEMENT[i-1][j+1]=globalVar.squares[i-1][j+1];
				if(globalVar.squares[i-1][j+1] === 0){zeroDetect(i-1,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1] === 0){zeroDetect(i,j+1);}
			}
		}
		else if(j===constant.COLUMNS-1){//右下角
			if(!globalVar.INIT_FLAGS_STATE[i-1][j-1] && !globalVar.INIT_CHECK_STATE[i-1][j-1] && globalVar.squares[i-1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j-1]=true;
				globalVar.INIT_ELEMENT[i-1][j-1]=globalVar.squares[i-1][j-1];
				if(globalVar.squares[i-1][j-1] === 0){zeroDetect(i-1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
		}
		else{//最下排扣除最左右兩個
			if(!globalVar.INIT_FLAGS_STATE[i-1][j-1] && !globalVar.INIT_CHECK_STATE[i-1][j-1] && globalVar.squares[i-1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j-1]=true;
				globalVar.INIT_ELEMENT[i-1][j-1]=globalVar.squares[i-1][j-1];
				if(globalVar.squares[i-1][j-1] === 0){zeroDetect(i-1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j+1] && !globalVar.INIT_CHECK_STATE[i-1][j+1] && globalVar.squares[i-1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j+1]=true;
				globalVar.INIT_ELEMENT[i-1][j+1]=globalVar.squares[i-1][j+1];
				if(globalVar.squares[i-1][j+1] === 0){zeroDetect(i-1,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1] === 0){zeroDetect(i,j+1);}
			}	
		}
	}//最下排
	else{//扣除最上下排的部分
		if(j===0){//扣除最左
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j+1] && !globalVar.INIT_CHECK_STATE[i-1][j+1] && globalVar.squares[i-1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j+1]=true;
				globalVar.INIT_ELEMENT[i-1][j+1]=globalVar.squares[i-1][j+1];
				if(globalVar.squares[i-1][j+1] === 0){zeroDetect(i-1,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1] === 0){zeroDetect(i,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j+1] && !globalVar.INIT_CHECK_STATE[i+1][j+1] && globalVar.squares[i+1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j+1]=true;
				globalVar.INIT_ELEMENT[i+1][j+1]=globalVar.squares[i+1][j+1];
				if(globalVar.squares[i+1][j+1] === 0){zeroDetect(i+1,j+1);}
			}
		}
		else if(j===constant.COLUMNS-1){//扣除最右
			if(!globalVar.INIT_FLAGS_STATE[i-1][j-1] && !globalVar.INIT_CHECK_STATE[i-1][j-1] && globalVar.squares[i-1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j-1]=true;
				globalVar.INIT_ELEMENT[i-1][j-1]=globalVar.squares[i-1][j-1];
				if(globalVar.squares[i-1][j-1] === 0){zeroDetect(i-1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j-1] && !globalVar.INIT_CHECK_STATE[i+1][j-1] && globalVar.squares[i+1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j-1]=true;
				globalVar.INIT_ELEMENT[i+1][j-1]=globalVar.squares[i+1][j-1];
				if(globalVar.squares[i+1][j-1] === 0){zeroDetect(i+1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
		}
		else{//四周都存在者
			if(!globalVar.INIT_FLAGS_STATE[i-1][j-1] && !globalVar.INIT_CHECK_STATE[i-1][j-1] && globalVar.squares[i-1][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j-1]=true;
				globalVar.INIT_ELEMENT[i-1][j-1]=globalVar.squares[i-1][j-1];
				if(globalVar.squares[i-1][j-1] === 0){zeroDetect(i-1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j] && !globalVar.INIT_CHECK_STATE[i-1][j] && globalVar.squares[i-1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j]=true;
				globalVar.INIT_ELEMENT[i-1][j]=globalVar.squares[i-1][j];
				if(globalVar.squares[i-1][j] === 0){zeroDetect(i-1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i-1][j+1] && !globalVar.INIT_CHECK_STATE[i-1][j+1] && globalVar.squares[i-1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i-1][j+1]=true;
				globalVar.INIT_ELEMENT[i-1][j+1]=globalVar.squares[i-1][j+1];
				if(globalVar.squares[i-1][j+1] === 0){zeroDetect(i-1,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j-1] && !globalVar.INIT_CHECK_STATE[i][j-1] && globalVar.squares[i][j-1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j-1]=true;
				globalVar.INIT_ELEMENT[i][j-1]=globalVar.squares[i][j-1];
				if(globalVar.squares[i][j-1] === 0){zeroDetect(i,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i][j+1] && !globalVar.INIT_CHECK_STATE[i][j+1] && globalVar.squares[i][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i][j+1]=true;
				globalVar.INIT_ELEMENT[i][j+1]=globalVar.squares[i][j+1];
				if(globalVar.squares[i][j+1] === 0){zeroDetect(i,j+1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j-1] && !globalVar.INIT_CHECK_STATE[i+1][j-1] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j-1]=true;
				globalVar.INIT_ELEMENT[i+1][j-1]=globalVar.squares[i+1][j-1];
				if(globalVar.squares[i+1][j-1] === 0){zeroDetect(i+1,j-1);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j] && !globalVar.INIT_CHECK_STATE[i+1][j] && globalVar.squares[i+1][j] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j]=true;
				globalVar.INIT_ELEMENT[i+1][j]=globalVar.squares[i+1][j];
				if(globalVar.squares[i+1][j] === 0){zeroDetect(i+1,j);}
			}
			if(!globalVar.INIT_FLAGS_STATE[i+1][j+1] && !globalVar.INIT_CHECK_STATE[i+1][j+1] && globalVar.squares[i+1][j+1] !=='X'){
				globalVar.INIT_CHECK_STATE[i+1][j+1]=true;
				globalVar.INIT_ELEMENT[i+1][j+1]=globalVar.squares[i+1][j+1];
				if(globalVar.squares[i+1][j+1] === 0){zeroDetect(i+1,j+1);}
			}
		}
	}//扣除最上下排的部分
}

module.exports = zeroDetect;