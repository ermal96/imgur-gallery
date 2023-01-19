import { useEffect } from "react";
import { fetchGallery } from "../../store/actions/galleryActions";
import Header from "../header/Header"
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { selectGalleryState } from "../../store/selectors/gallerySelector";

type Props = {
    children: JSX.Element | JSX.Element[]
}
const Layout = ({ children }: Props) => {
    const gallery = useSelector(selectGalleryState);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchGallery(gallery.filters))
    }, [dispatch, gallery.filters]);
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout