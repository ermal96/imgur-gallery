import { useCallback, useMemo } from "react"
import { GalleryItem } from "../../types"

type Props = {
    item: GalleryItem,
    classColor: string
}

const GalleryCard = ({ item, classColor }: Props) => {
    const isImage = useCallback((url: string) => {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }, [])

    const isVideo = useCallback((url: string) => {
        return /\.(mp4)$/.test(url);
    }, [])
    const renderMedia = useMemo(() => {
        if (isImage(item.images[0].link)) {
            return <img className="w-full h-full object-cover" src={item.images[0].link} alt={item.title} />
        } else if (isVideo(item.images[0].link)) {
            return <video controls src={item.images[0].link} />
        } else {
            return null
        }
    }, [isImage, isVideo, item.images, item.title]);

    return (
        <div className={`border-2 overflow-hidden h-[380px] relative  rounded ${classColor}`}>
            {renderMedia}
            <div className="p-4 absolute bottom-0 bg-white w-full">
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}

export default GalleryCard