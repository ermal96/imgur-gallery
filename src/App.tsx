import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchGallery } from "./store/actions/galleryActions";
import { selectGalleryState } from "./store/selectors/gallerySelector";

const App = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectGalleryState);


  useEffect(() => {
    dispatch(fetchGallery(gallery.filters))
  }, []);


  return (
    <div className="App">

    </div>
  )
}

export default App
