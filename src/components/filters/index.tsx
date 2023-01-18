import { useCallback, useEffect } from "react";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux"
import { fetchGallery } from "../../store/actions/galleryActions";
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import { galleryActions } from "../../store/slices/gallerySlice";

const Filters = () => {

    const dispatch = useDispatch();
    const gallery = useSelector(selectGalleryState);

    useEffect(() => {
        // dispatch(fetchGallery(gallery.filters))
    }, []);


    const handleFilterTags = useCallback((type: "section" | "sort" | "window", value: string) => {
        dispatch(galleryActions.setFilters({
            ...gallery.filters,
            [type]: value
        }))
    }, [dispatch, gallery.filters]);


    return (
        <div className="px-6 flex gap-10 w-full mt-10">
            <div className="">
                <h3 className="mb-2 text-sm font-bold">Section</h3>
                <div className="flex">
                    <Button onClick={() => handleFilterTags('section', 'hot')} active={gallery.filters.section === "hot"}>
                        hot
                    </Button>
                    <Button onClick={() => handleFilterTags('section', 'top')} active={gallery.filters.section === "top"}>
                        top
                    </Button>
                    <Button onClick={() => handleFilterTags('section', 'user')} active={gallery.filters.section === "user"}>
                        user
                    </Button>
                </div>
            </div>

            <div className="">
                <h3 className="mb-2 text-sm font-bold">Sort</h3>
                <div className="flex">

                    <Button onClick={() => handleFilterTags('sort', 'viral')} active={gallery.filters.sort === "viral"}>
                        viral
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'top')} active={gallery.filters.sort === "top"}>
                        top
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'time')} active={gallery.filters.sort === "time"}>
                        time
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'rising')} active={gallery.filters.sort === "rising"}>
                        rising
                    </Button>

                </div>

            </div>

            {gallery.filters.section === "top" &&
                <div className="">
                    <h3 className="mb-2 text-sm font-bold">Window</h3>
                    <div className="flex">
                        <Button onClick={() => handleFilterTags('window', 'day')} active={gallery.filters.window === "day"}>
                            day
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'week')} active={gallery.filters.window === "week"}>
                            week
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'month')} active={gallery.filters.window === "month"}>
                            month
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'all')} active={gallery.filters.window === "all"}>
                            all
                        </Button>
                    </div>

                </div>}




        </div>
    )
}

export default Filters