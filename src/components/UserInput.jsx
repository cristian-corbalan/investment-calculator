import Input from "./Input.jsx";

export default function UserInput ({onInvestmentValues}){
    return (
      <section id="user-input">
        <form action="#">
            <div className="input-group">
                <Input
                    id="initialInvestment"
                    label="Initial investment"
                    type="number"
                    name="initial"
                    onInvestmentValues={onInvestmentValues}
                />
                <Input
                    id="annualInvestment"
                    label="Anual investment"
                    type="number"
                    name="anual"
                    onInvestmentValues={onInvestmentValues}
                />
            </div>
            <div className="input-group">
                <Input
                    id="expectedReturn"
                    label="Expected return"
                    type="number"
                    name="expected"
                    onInvestmentValues={onInvestmentValues}
                />
                <Input
                    id="duration"
                    label="Duration"
                    type="number"
                    name="duration"
                    onInvestmentValues={onInvestmentValues}
                />
            </div>
        </form>
      </section>
    );
}