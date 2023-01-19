import { useSelector } from "react-redux";
import ErrorHandler from "../components/common/ErrorHandler";
import Filters from "../components/filters";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { selectGalleryState } from "../store/selectors/gallerySelector";
import Layout from "../components/common/Layout";

const Root = () => {
    const gallery = useSelector(selectGalleryState);

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
