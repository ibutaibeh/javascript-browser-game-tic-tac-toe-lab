/*-------------------------------- Constants --------------------------------*/

const winningCombos=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

/*---------------------------- Variables (state) ----------------------------*/
let board=[]; // this var is used to determine if the block is used or not.
let turn; //this var to track whose turn it is.
let winner; //this var to present the winner
let tie;//
let squareIndex;
let count;


/*------------------------ Cached Element References ------------------------*/
const messageEl= document.querySelector('#message');
const squareEls=document.getElementsByClassName('sqr');
const resetBtnEl=document.querySelector('#resetGame');
/*-------------------------------- Functions --------------------------------*/
//Function1
const init=()=>{
    for (i=0; i<squareEls.length;i++){
        board[i]='';
        squareEls[i].textContent=''
           }
    winner=false;
    tie=false
    turn='X'
    messageEl.textContent=`it is ${turn} turn`
         
}
//Function 2
const render=()=>{
    updateBoard();
    updateMessage();
}
//Function 3
const updateBoard=()=>{
    for (i=0; i<board.length;i++){
        board[i]=squareEls[i].textContent;
}}
const updateMessage=()=>{
    if(winner===false && tie===false){
        messageEl.textContent=`it is ${turn} turn`;
    } else if(winner===true && tie===false){
        messageEl.textContent=`Congrats ${turn} Won`;
    }else if(winner===false && tie===true){
        messageEl.textContent='it is Tie';
    }
}
//Fuction 4
const handleClick=(event)=>{
            squareIndex=event.target.id;   
            if(winner===true&& tie===false){
                return;
            }else if(winner===false && tie===true){
                return;
             } else if(board[squareIndex]==='X'&& winner===false||board[squareIndex]==='O'&& winner===false){
                messageEl.textContent=`this box is taken, it is ${turn} turn`;
                return;
             }
            placePiece(squareIndex);
            checkForWinner();
            checkForTie();
            switchPlayerTurn();
            render();
        
}
//Function 5
const placePiece=(idx)=>{
if(turn==='X'){
board[idx]='X';
squareEls[idx].textContent='X'
}else {
board[idx]='O'
squareEls[idx].textContent='O'

}

}
//Function 6
const checkForWinner=()=>{

    for(k=0;k<board.length;k++){
        if(board[0]!==''&& board[0]===board[1] && board[0]===board[2]){
            winner=true;
        }else if(board[3]!==''&& board[3]===board[4]&&board[3]===board[5]) {
            winner=true;
        }else if(board[6]!==''&&board[6]===board[7]&&board[6]===board[8]) {
            winner=true;
        }else if(board[0]!==''&&board[0]===board[4]&&board[0]===board[8]) {
            winner=true;
        }else if(board[2]!==''&&board[2]===board[4]&&board[2]===board[6]) {
            winner=true;
        }else if(board[0]!==''&&board[0]===board[3]&&board[0]===board[6]) {
            winner=true;
        }else if(board[1]!==''&&board[1]===board[4]&&board[1]===board[7]) {
            winner=true;
        }else if(board[2]!==''&&board[2]===board[5]&&board[2]===board[8]) {
            winner=true;
        }        
    }
}

//Function 7
const checkForTie=()=>{
    count=9;
    for(i=0;i<board.length;i++){
        if(board[i]!==""){
         count=count-1;
      }
      } 
if(count===0 && winner===false){
    tie=true;
   }
}
//Function 8
const switchPlayerTurn= ()=>{
if(winner===true||tie===true){
    return;
}else if(winner===false && tie===false){
        if(turn==='X'){
        turn='O'
    }else if(turn==='O'){
        turn='X'
    }
}
}
/*----------------------------- Event Listeners -----------------------------*/
for(i=0;i<squareEls.length;i++){
    squareEls[i].addEventListener('click',handleClick)
}

init()
resetBtnEl.addEventListener('click',init);




