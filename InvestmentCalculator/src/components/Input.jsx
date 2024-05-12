export default function Input({lableText, identifier, value, onInputChange}){
    return(
        <p>
           <label>{lableText}</label>
           <input type="number" 
           min={identifier ==='expectedReturn'|| identifier ==='duration'? 0: undefined}
           required value={value[identifier]} 
           onChange={(event) => onInputChange(identifier, event.target.value)}/>
         </p>
    )
}