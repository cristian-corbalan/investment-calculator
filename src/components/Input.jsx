export default function Input ({id, label, ...props}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </div>
    )
}