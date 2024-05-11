import { useState } from "react";

export default function Player({initialPlayerName, symbol, isActive, onNameChange}){
    const[isEditting, setIsEditting] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);
    function handleEditName(){
      //when you change value of state using its old value always use lambda function like below. Bcz setState 
      // function schedule the state change not update it imidiatly and if you pass lambda then it picks the lates
      // value of the state at the time of update.   
      setIsEditting((editing) => !editing); 
      if(isEditting){
        onNameChange(symbol,playerName);
      }
    }
 
    function handleChange(event){
      //console.log(event);
      setPlayerName(event.target.value)
    }

    let editPlayerName = <span className="player-name" >{playerName}</span>;
    if(isEditting)
    {
      editPlayerName = <input type={"text"} required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editPlayerName}
          {<span className="player-symbol">{symbol}</span>}
        </span>
        <button onClick={handleEditName}>{isEditting ? "Save" : "Edit"}</button> 
      </li>
    );
}