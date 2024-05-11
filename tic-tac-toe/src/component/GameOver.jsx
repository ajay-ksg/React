export default function GameOver({winner, handleRematch}){
    return (
        <div id="game-over">
            <h2>Game Over !</h2>
            {winner&&<p>{winner} WON !!</p>}
            {!winner&&<p>It's a Draw</p>}

            <button onClick={handleRematch}>Start Again!</button>
        </div>
    );
}