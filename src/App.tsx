import Header from "./components/header/Header";
import GalleryGrid from "./components/gallery/GalleryGrid";
import Filters from "./components/filters";
import { useSelector } from "react-redux";
import { selectGalleryState } from "./store/selectors/gallerySelector";
import ErrorHandler from "./components/common/ErrorHandler";
import Loading from "./components/common/Loading";

const App = () => {
  const gallery = useSelector(selectGalleryState);


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
