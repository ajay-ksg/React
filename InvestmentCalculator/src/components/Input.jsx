export default function Input({lableText, identifier, value, onInputChange}){
    return(
        <p>
           <label>{lableText}</label>
           <input type="number" 
           required value={value[identifier]} 
           onChange={(event) => onInputChange(identifier, event.target.value)}/>
         </p>
    )
}