export default function Button({children, styles, name, ariaLabel, onClick}){
    return(
        <button
            className={`rounded-sm p-2 ${styles}`}
            name={name}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    )
}