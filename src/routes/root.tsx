import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorHandler from "../components/common/ErrorHandler";
import Filters from "../components/filters";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { AppDispatch } from "../store";
import { fetchGallery } from "../store/actions/galleryActions";
import { selectGalleryState } from "../store/selectors/gallerySelector";
import Layout from "../components/common/Layout";

const Root = () => {
    const gallery = useSelector(selectGalleryState);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchGallery(gallery.filters))
    }, [dispatch, gallery.filters]);


    if (gallery.error) {
        return <ErrorHandler />
    }

    return (
        <Layout>
            <Filters />
            <GalleryGrid />
        </Layout>

    )
}

export default Root
