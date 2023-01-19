import Logo from "./Logo"

const Header = () => {
    return (
        <header className='h-24  bg-slate-300 flex items-center justify-start '>
            <div className="container mx-auto px-4">
                <Logo />
            </div>

        </header>
    )
}

export default Header