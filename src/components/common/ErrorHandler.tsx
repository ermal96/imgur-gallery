import { useSelector } from "react-redux";
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import errorImg from '../../assets/error.svg';

const ErrorHandler = () => {
    const gallery = useSelector(selectGalleryState);

    return (
        <div className="flex h-screen items-center justify-center flex-col">
            <img className="h-96" src={errorImg} alt={gallery?.error?.data.error} />
            <h1 className="text-center  text-2xl  mt-6">{gallery?.error?.data.error}</h1>
        </div>
    )
}

export default ErrorHandler