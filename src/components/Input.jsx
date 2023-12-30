import {useState} from "react";

export default function Input ({id, label, initialValue = 0, ...props}) {
    const [value, setValue] = useState(initialValue);

    function handleValueChange(event) {
        setValue(+event.target.value);
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