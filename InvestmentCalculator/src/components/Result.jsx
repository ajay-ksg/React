import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Result({input}){
    console.log(input);
    let data = [];
    if(input.duration)
       data = calculateInvestmentResults(input);
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    return(

            <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th> 
                    <th>Invested Capital</th> 
                </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        const totalInterest = 
                        row.valueEndOfYear -  
                        row.annualInvestment*row.year - 
                        initialInvestment;

                        const investedCapital = row.valueEndOfYear - totalInterest;
                        return(
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.valueEndOfYear)}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(investedCapital)}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
   
    )
}

{/* <thead>Investment Value</thead>
                    <thead>Interest (Year)</thead>
                    <thead>Total Interest</thead>
                    <thead>Invested Capital</thead> */}