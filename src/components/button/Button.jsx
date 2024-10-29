import classes from "./Button.module.css";

export default function Button({ children, name, type = "button", disabled = false, classNames, onClick }) {
    return (
        <button
            name={name}
            type={type}
            disabled={disabled}
            className={`${classes.btn} ${classNames}`}
            onClick={onClick}
        >{ children }</button>
    )
}
