export default function Input({ type, placeholder, value, onChange}) {
    return(
        <input
            className="w-full h-full p-2"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}