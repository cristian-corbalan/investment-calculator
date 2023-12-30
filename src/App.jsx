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
        })
    }

    return (
        <>
            <UserInput onInvestmentValues={handleInvestmentValues}></UserInput>
            <Results results={results}></Results>
        </>
    )
}

export default App


/*
* TODO List:
* Utilice el proyecto inicial adjunto a esta lección
* Añada componentes para mostrar una cabecera, recoger los datos introducidos por el usuario y generar la tabla de resultados.
* Obtener y almacenar los datos introducidos por el usuario (es decir, los parámetros de inversión introducidos).
* Derivar los resultados de la inversión con la ayuda de la función de utilidad proporcionada (en el proyecto inicial)
* Mostrar los resultados de la inversión en una tabla HTML (Utilice <table>, <thead>, <tbody> <tr>, <th>, <td>)
* Mostrar condicionalmente un mensaje informativo si se ha introducido una duración no válida (< 1)
 */