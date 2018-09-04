/* init.js */
/* 初始化模組 */
/* required by : SquaresTable */

var constant = require('./constants.js');
var globalVar = require('./globalVar.js');

function init(){
	var temp=[];
	var i,j;
	/*--設置mines*/
	for(i=0;i<(constant.ROWS*constant.COLUMNS);i++){
		temp[i]=(i>constant.MINES-1)?0:'X';
	}
	/*--隨機塞入mines*/
	for(i=0;i<constant.ROWS;i++){
		globalVar.squares[i]=new Array(constant.COLUMNS);
		globalVar.INIT_CHECK_STATE[i]=new Array(constant.COLUMNS);
		globalVar.INIT_FLAGS_STATE[i]=new Array(constant.COLUMNS);
		globalVar.INIT_ELEMENT[i]=new Array(constant.COLUMNS);
		for(j=0;j<constant.COLUMNS;j++){
			var r=Math.floor(Math.random()*temp.length);
			globalVar.squares[i][j]=temp.splice(r-1,1)[0];
			globalVar.INIT_CHECK_STATE[i][j]=false;
			globalVar.INIT_FLAGS_STATE[i][j]=false;
			globalVar.INIT_ELEMENT[i][j]='\u2007';
		}
	}
	/*--設定normalSquares附近的mines數*/
	for(i=0;i<constant.ROWS;i++){
		for(j=0;j<constant.COLUMNS;j++){
			if(globalVar.squares[i][j]===0){//判別normalSquares
				if(i===0){//最上排
					if(j===0){//左上角
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j+1]==='X')?1:0;
					}
					else if(j===constant.COLUMNS-1){//右上角
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
					}
					else{//最上排扣除最左右兩個
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j+1]==='X')?1:0;
					}
				}//最上排
				else if(i===constant.ROWS-1){//最下排
					if(j===0){//左下角
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
					}
					else if(j===constant.COLUMNS-1){//右下角
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
					}
					else{//最下排扣除最左右兩個
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
					}
				}//最下排
				else{//扣除最上下排的部分
					if(j===0){//扣除最左
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j+1]==='X')?1:0;
					}
					else if(j===constant.COLUMNS-1){//扣除最右
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
					}
					else{//四周都存在者
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i-1][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i][j+1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j-1]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j]==='X')?1:0;
						globalVar.squares[i][j]+=(globalVar.squares[i+1][j+1]==='X')?1:0;
					}
				}//扣除最上下排的部分
			}//判別normalSquares
			else{
				globalVar.minesHush.push({"xAxis":i,"yAxis":j});
			}//紀錄mine位置
		}//for-j
	}//for-i
}

module.exports = init;