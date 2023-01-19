import Header from "./components/header/Header";
import GalleryGrid from "./components/gallery/GalleryGrid";
import Filters from "./components/filters";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryState } from "./store/selectors/gallerySelector";
import ErrorHandler from "./components/common/ErrorHandler";
import Loading from "./components/common/Loading";
import { fetchGallery } from "./store/actions/galleryActions";
import { AppDispatch } from "./store";
import { useEffect } from "react";

const App = () => {
  const gallery = useSelector(selectGalleryState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGallery(gallery.filters))
  }, [dispatch, gallery.filters]);


  if (gallery.loading) {
    return <Loading />
  }

  if (gallery.error) {
    return <ErrorHandler />
  }

  return (
    <div className="border-b" >
      <Header />
      <Filters />
      <GalleryGrid />
    </div>

  )
}

export default App
