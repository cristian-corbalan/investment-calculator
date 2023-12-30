import {useState} from "react";

export default function Input ({id, label, initialValue = 0, onInvestmentValues, ...props}) {
    const [value, setValue] = useState(initialValue);

    function handleValueChange(event) {
        const value = +event.target.value

        setValue(value);
        onInvestmentValues(id, value);
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                value={value}
                onChange={handleValueChange}
                {...props}
            />
        </div>
    )
}