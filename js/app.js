//Problem Solving:
// Display an empty tic-tac-toe board when the page is initially displayed. done
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.


/*-------------------------------- Constants --------------------------------*/

//const  gameChoice=['X','O']
const winningCombos=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

/*---------------------------- Variables (state) ----------------------------*/
let board=[]; // this var is used to determine if the block is used or not.
let turn; //this var to track whose turn it is.
let winner; //this var to present the winner
let tie;//
let squareIndex;
let count;
// let isUsed=false; //check if this var is needed 


/*------------------------ Cached Element References ------------------------*/
const messageEl= document.querySelector('#message');
const squareEls=document.getElementsByClassName('sqr');
const resetBtnEl=document.querySelector('#resetGame');
//const resetGameButton2=document.querySelector('#resetGame2')
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
    messageEl.textContent=`it is ${turn}`
    render();
   
    
}
//--------------------------------------------------------------------
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
//Function 4
const updateMessage=()=>{
    if(winner===false && tie===false){
        messageEl.textContent=`it is ${turn} turn`;
    } else{
        messageEl.textContent=`Congrats ${turn} Won`;
    }}

    // if(winner===false && tie===true){
    //     console.log('update message function it is tie')
    //     // messageEl.textContent=`it is Tie`;
//}
//---------------------------------------------------------------------
//Fuction 5
const handleClick=(event)=>{
            squareIndex=event.target.id;   
            
            if(board[squareIndex]==='X'&& winner===false||board[squareIndex]==='O'&& winner===false){
                messageEl.textContent=`this box is taken, it is ${turn} turn`;
                return;
            }else if(winner===true&& tie===false){
                messageEl.textContent=`winner is ${turn}`;
                return;
            }else if(winner===false && tie===true){
                messageEl.textContent='it is TIE'
                return;
            }else{
               // console.log('click function else')
            }

            placePiece(squareIndex);
            checkForWinner();
            checkForTie();
            switchPlayerTurn();
            console.log('winner is',winner,'tie is',tie);
         
}

const placePiece=(idx)=>{
if(turn==='X'){
board[idx]='X';
squareEls[idx].textContent='X'
}else {
board[idx]='O'
squareEls[idx].textContent='O'

}

}

const checkForWinner=()=>{

    for(k=0;k<board.length;k++){
        if(board[0]!==''&& board[0]===board[1] && board[0]===board[2]){
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[3]!==''&& board[3]===board[4]&&board[3]===board[5]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[6]!==''&&board[6]===board[7]&&board[6]===board[8]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[0]!==''&&board[0]===board[4]&&board[0]===board[8]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[2]!==''&&board[2]===board[4]&&board[2]===board[6]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[0]!==''&&board[0]===board[3]&&board[0]===board[6]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[1]!==''&&board[1]===board[4]&&board[1]===board[7]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else if(board[2]!==''&&board[2]===board[5]&&board[2]===board[8]) {
            messageEl.textContent=`winner is ${turn}`;
            winner=true;
        }else{

        }
        
    }
}

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


const switchPlayerTurn= ()=>{
// if(winner===true||tie===true){
//     return;
// }else {
//     if(turn==='X'){
//         turn='O'
//         messageEl.textContent=`it is ${turn} turn`;

//     }else{
//         turn='X'
//         messageEl.textContent=`it is ${turn} turn`;

//     }
// }
if(winner===true||tie===true){
    return;
}else if(winner===false && tie===false){
        if(turn==='X'){
        turn='O'
        messageEl.textContent=`it is ${turn} turn`;

    }else{
        turn='X'
        messageEl.textContent=`it is ${turn} turn`;

    }
}else{
    console.log('test')
}
}



/*----------------------------- Event Listeners -----------------------------*/
for(i=0;i<squareEls.length;i++){
    squareEls[i].addEventListener('click',handleClick)
}

init()
resetBtnEl.addEventListener('click',init);




