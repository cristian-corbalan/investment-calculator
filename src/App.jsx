import {useState} from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {calculateInvestmentResults} from "./util/investment.js";

const INVESTMENT_VALUES = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
}

function App() {
    const [investmentValues, setInvestmentValues] = useState(INVESTMENT_VALUES);

    const results = calculateInvestmentResults(investmentValues);

    function handleInvestmentValues (type, newValue){
        setInvestmentValues((prevValues) => {
            return {
                ...prevValues,
                [type]: newValue
            };
        });
    }

    return (
        <>
            <UserInput onInvestmentValues={handleInvestmentValues}></UserInput>
            <Results results={results}></Results>
        </>
    );
}

export default App;