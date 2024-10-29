import classes from "./InputField.module.css";

export default function InputField({ name, type, placeholder, value, classNames, label, onChange }) {
    return (
        <>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className={classNames}
                onChange={onChange}
            />
        </>
    )
}
