export default function Log({turns}){
    const logs = turns.map((turn) => {
        const {square, player} = turn;
        const {row, col} = square;
        return <p key={`${row}${col}`}>{player + " selected row :" + row +" , col :"+col}</p>;
    });
    return(
        <ol id="log">
            <li>{logs}</li>
        </ol>
    );
}