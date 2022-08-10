import "./resuable.css"
const Input = ({text, handleChange, icon, label,fieldError}) => {
    return (
        <div>
        <div className="input-container">
            <div className="label-container">
                <label>{label}</label>
            </div>
            <input
                name={label}
                type={text}
                onChange={handleChange} />
            <img src={icon} alt="input-icon" />
        </div>
        <div className="input-error-container">
        <p className={fieldError[label].error? "fieldError" : "noFieldError"}>
        {fieldError[label].message}
    </p>
    </div>
    </div>
    )
}
export default Input;