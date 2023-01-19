import { Link } from "react-router-dom";
import imgurLogo from "../../assets/Imgur-logo.svg";

const Logo = () => {
    return (
        <Link to={"/"}>
            <img alt="Logo Imgur" src={imgurLogo} />
        </Link>
    )
}

export default Logo