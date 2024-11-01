import classes from "./MyContainer.module.css";

export default function MyContainer({ children, classNames }) {
    return (
        <div className={`${classes.containerBox} ${classNames}`}>
            {children}
        </div>
    )
}
