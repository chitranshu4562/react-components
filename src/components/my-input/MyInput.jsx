import classes from "./MyInput.module.css";

export default function MyInput({ id, type, name, value, onChange, classNames, placeholder }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className={`${classNames} form-control`}
            onChange={onChange}
        />
    )
}
