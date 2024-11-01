import classes from "./MyButton.module.css";

export default function MyButton({ children, type = 'button', classNames, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${classNames} ${classes.myButton}`}
        >{children}</button>
    )
}
