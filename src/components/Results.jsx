import {formatter} from "../util/investment.js";

export default function Results({results = []}) {
    let totalInterest = 0;

    return (
        <table id="result">
            <thead className="center">
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Inverted Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                results.map((investment) => {
                    totalInterest += investment.interest;
                    const invertedCapital = investment.valueEndOfYear - totalInterest;

                    return (
                        <tr key={investment.year}>
                            <td>{investment.year}</td>
                            <td>{formatter.format(investment.valueEndOfYear)}</td>
                            <td>{formatter.format(investment.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(invertedCapital)}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}