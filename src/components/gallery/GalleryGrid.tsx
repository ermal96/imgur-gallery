import { useSelector } from "react-redux";
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import { useMemo } from "react";
import GalleryCard from "./GalleryCard";

const GalleryGrid = () => {
    const gallery = useSelector(selectGalleryState);

    const colors = useMemo(() => ["green", "lime", "yellow", "cyan", "violet", "pink"], [])

    const renderItems = useMemo(() => {

        return gallery.items.filter((item) => item.images).map((item) => {
            const classColor = `border-${colors[Math.floor(Math.random() * colors.length)]}-300`;
            return <GalleryCard classColor={classColor} item={item} key={item.id} />
        })
    }, [colors, gallery.items]);


    return (
        <main className="w-full px-6 mt-10 columns-2 md:columns-3 lg:columns-4 gap-8">
            {renderItems}
        </main>
    )
}

export default GalleryGrid