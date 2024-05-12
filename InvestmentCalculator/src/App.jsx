import {useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 100,
      expectedReturn: 6,
      duration: 6

    }
  );

  function handleValueChange(inputIdentifier, newValue){
  
    setUserInput((prevUserInput) => 
      {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
  }
  const isValidInput = userInput.duration && userInput.duration > 0 && userInput.duration <= 150;
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 100,
      expectedReturn: 6,
      duration: 6

    }
  );

  function handleValueChange(inputIdentifier, newValue){
  
    setUserInput((prevUserInput) => 
      {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
  }
  const isValidInput = userInput.duration && userInput.duration > 0 && userInput.duration <= 150;
  return (
    <>
      <Header />
      <UserInput input={userInput} handleInputChange={handleValueChange}/>
      {isValidInput ? 
        <Result input={userInput} />:
        <p className="center">Please enter a valid duration between 0 to 150 years</p>
      }
    </>
  )
}

export default App
