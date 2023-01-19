import { Check } from "tabler-icons-react"

type Props = {
    children: JSX.Element | JSX.Element[]
    active?: boolean
    onClick?: () => void
}
const Button = ({ children, active, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`text-xs ${active ? "bg-blue-600 text-white" : "border"} inline-flex items-center mr-2 py-2 px-4 rounded-full`}>
            {active && <span className="mr-2">
                <Check size={20} />
            </span>}
            {children}
        </button>
    )
}

export default Button