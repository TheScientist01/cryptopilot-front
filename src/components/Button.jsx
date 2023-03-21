import { twMerge } from "tailwind-merge"

const Button=({onClick, className, label, isDark=false})=>{
    return(
        <button onClick={onClick} className={twMerge(`rounded-lg py-2 px-5 ${isDark?"bg-black text-white":"bg-transparent text-black"} hover:shadow-card-100 duration-200`, className)}>
            {label}
        </button>
    )
}

export default Button;