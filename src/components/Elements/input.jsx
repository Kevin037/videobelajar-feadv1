import { forwardRef } from "react"

export const Input = forwardRef((props,ref) => {
    const {name,type,placeholder,varian} = props
    return (
        <input 
            type={type}
            className={`text-sm border rounded-theme w-full py-2 px-3 ${varian}`} 
            name={name}
            id={name}
            placeholder={placeholder}
            ref={ref}
        />
    )
});

export const InputButton = forwardRef((props,ref) => {
    const {name,type,placeholder, varian,buttonLabel} = props
    return (
        <div 
            className={`flex align-items-center bg-white shadow-sm rounded-theme p-2 mx-auto mt-5 ${varian}`}>
            <input 
            name={name} type={type} 
            className="text-sm text-gray-900 rounded w-full py-2 px-3 focus:outline-none focus:ring-0" 
            placeholder={placeholder}
            ref={ref}
        />
            <button className="bg-yellow-400 text-white fw-bold rounded-theme px-4 cursor-pointer" type="button">{buttonLabel}</button>
        </div>
    )
})