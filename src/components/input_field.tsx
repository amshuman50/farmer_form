export const InputFieldRequired = ({ type, id, placeholder, label }: { type: string, id: string, placeholder: string, label: string }) => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
                    {label} <span className="text-red-500">*</span>
                </label>
                <input
                    type={type}
                    id={id}
                    className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export const InputField = ({ type, id, placeholder, label }: { type: string, id: string, placeholder: string, label: string }) => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
                    {label}
                </label>
                <input
                    type={type}
                    id={id}
                    className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={`Enter your ${placeholder.toLowerCase()}`}
                />
            </div>
        </>
    )
}

export default InputFieldRequired;
