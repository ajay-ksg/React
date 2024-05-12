import Input from "./Input";


export default function UserInput({input, handleInputChange}){
    
   return( <section id="user-input">
      <div className="input-group">
         <Input 
            lableText="Initial Investment"
            identifier="initialInvestment"
            value={input}
            onInputChange={handleInputChange}/>
         <Input 
            lableText="Annual Investment" 
            identifier="annualInvestment"
            value={input} 
            onInputChange={handleInputChange}/>
        </div>
      <div className="input-group">
         <Input 
            lableText="Expected Rate of Return" 
            identifier="expectedReturn"
            value={input} 
            onInputChange={handleInputChange}/>
        <Input 
            lableText="Duration" 
            identifier="duration"
            value={input} 
            onInputChange={handleInputChange}
            />
         
        </div>
      </section>
   );
}