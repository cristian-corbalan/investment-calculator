import Input from "./Input.jsx";

export default function UserInput (){
    return (
      <section id="user-input">
        <form action="#">
            <div className="input-group">
                <Input
                    id="initial"
                    label="Initial investment"
                    type="number"
                    name="initial"
                />
                <Input
                    id="anual"
                    label="Anual investment"
                    type="number"
                    name="anual"
                />
            </div>
            <div className="input-group">
                <Input
                    id="expected"
                    label="Expected return"
                    type="number"
                    name="expected"
                />
                <Input
                    id="duration"
                    label="Duration"
                    type="number"
                    name="duration"
                />
            </div>
        </form>
      </section>
    );
}