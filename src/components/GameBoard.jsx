

const initialGameBoard = [
    // Rows
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare,turns}){
// const [gameBoard,setGameBoard]=useState(initialGameBoard);

// function handleSelectSquare(rowIndex ,colIndex){
//     setGameBoard((prevGameBoard)=>{
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];//a new array in memory to paste the old version
//         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
//         return updatedBoard;

//     });
//     onSelectSquare();
// }

// deriving state : some computed value that is derived from a state like gameboard from state app components
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const{square ,player} = turn;
        const{row,col} = square;

        gameBoard[row][col] = player;

    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={()=> onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    );
}