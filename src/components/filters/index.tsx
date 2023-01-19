import { useCallback } from "react";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux"
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import { galleryActions } from "../../store/slices/gallerySlice";
import { AppDispatch } from "../../store";
import Checkbox from "../common/Checkbox";

const Filters = () => {

    const dispatch = useDispatch<AppDispatch>();
    const gallery = useSelector(selectGalleryState);

    const handleFilterTags = useCallback((type: "section" | "sort" | "window", value: string) => {
        dispatch(galleryActions.setFilters({
            ...gallery.filters,
            [type]: value
        }))
    }, [dispatch, gallery.filters]);

    const handleFilterToggle = useCallback((name: string, value: boolean) => {
        dispatch(galleryActions.setFilters({
            ...gallery.filters,
            [name]: value
        }))
    }, [dispatch, gallery.filters]);


    return (
        <div className="container mx-auto px-4 flex flex-wrap items-end gap-10 mt-10">
            <div className="">
                <h3 className="mb-2 text-sm font-bold">Section</h3>
                <div className="flex">
                    <Button onClick={() => handleFilterTags('section', 'hot')} active={gallery.filters.section === "hot"}>
                        <span>hot</span>
                    </Button>
                    <Button onClick={() => handleFilterTags('section', 'top')} active={gallery.filters.section === "top"}>
                        <span>top</span>
                    </Button>
                    <Button onClick={() => handleFilterTags('section', 'user')} active={gallery.filters.section === "user"}>
                        <span>user</span>
                    </Button>
                </div>
            </div>

            <div className="">
                <h3 className="mb-2 text-sm font-bold">Sort</h3>
                <div className="flex">

                    <Button onClick={() => handleFilterTags('sort', 'viral')} active={gallery.filters.sort === "viral"}>
                        <span>viral</span>
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'top')} active={gallery.filters.sort === "top"}>
                        <span>top</span>
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'time')} active={gallery.filters.sort === "time"}>
                        <span>time</span>
                    </Button>

                    <Button onClick={() => handleFilterTags('sort', 'rising')} active={gallery.filters.sort === "rising"}>
                        <span>rising</span>
                    </Button>

                </div>

            </div>

            {gallery.filters.section === "top" &&
                <div className="">
                    <h3 className="mb-2 text-sm font-bold">Window</h3>
                    <div className="flex">
                        <Button onClick={() => handleFilterTags('window', 'day')} active={gallery.filters.window === "day"}>
                            <span>day</span>
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'week')} active={gallery.filters.window === "week"}>
                            <span>week</span>
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'month')} active={gallery.filters.window === "month"}>
                            <span>month</span>
                        </Button>
                        <Button onClick={() => handleFilterTags('window', 'all')} active={gallery.filters.window === "all"}>
                            <span>all</span>
                        </Button>
                    </div>

                </div>}


            <div className="flex">
                <div className="mr-4">
                    <Checkbox checked={gallery.filters.showViral}
                        onChange={(e) => handleFilterToggle('showViral', e.target.checked)} label="Show Viral" />
                </div>
                <div className="mr-4">
                    <Checkbox checked={gallery.filters.showMature}
                        onChange={(e) => handleFilterToggle('showMature', e.target.checked)} label="Show Mature" />
                </div>
            </div>


        </div>
    )
}

export default Filters