// program that takes the position of a Knight as an input on an 8x8 chessboard and outputs the number of possible moves the Knight can make.
const prompt = require('prompt-sync')();
let ChessBoard_Size = 8;
function isValid(x, y) {
    if (x < 0 || x >= ChessBoard_Size || y < 0 || y >= ChessBoard_Size) {
        return false;
    }
    return true;
}
// function to calculate the moves of the Knight on an empty chessboard
function positionofknight(xposition,yposition){
    let possible_moves_xarray = [ 2, 1, -1, -2, -2, -1, 1, 2];
    let possible_moves_yarray = [ 1, 2, 2, 1, -1, -2, -2, -1];
    for(let i = 0; i < possible_moves_xarray.length; i++){
        let x = xposition + possible_moves_xarray[i];
        let y = yposition + possible_moves_yarray[i];
        if(isValid(x,y)){
            console.log(x,y);
        }
    }

}
let input_x_coordinate = Number(prompt('Enter the x coordinate of the knight: '));
let input_y_coordinate = Number(prompt('Enter the y coordinate of the knight: '));
positionofknight(input_x_coordinate,input_y_coordinate);

