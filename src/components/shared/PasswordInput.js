const TextInput = ({ label, placeholder, labelClassName, className, value, setValue }) => {
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    );
};

export default TextInput;
