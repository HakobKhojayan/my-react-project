import "./input.css"

export default function Input({ type, placeholder, name, value, register }) {
    return (
        <div className="divinp">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className="input"
                {...register(name)}
            />

        </div>
    )
}