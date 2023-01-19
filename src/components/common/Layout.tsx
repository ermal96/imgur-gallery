import Header from "../header/Header"

type Props = {
    children: JSX.Element | JSX.Element[]
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout