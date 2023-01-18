type Props = {
    children: string
    active?: boolean
    onClick?: () => void
}
const Button = ({ children, active, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`text-xs ${active ? "bg-sky-600 text-white" : "border"} inline-flex items-center mr-2 py-2 px-4 rounded-full`}>
            {active && <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                </svg>
            </span>}
            {children}
        </button>
    )
}

export default Button