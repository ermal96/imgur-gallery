import { AxiosError } from 'axios';
import { GalleryFilters } from './../types';
import api from "./index"

export const getGallery = async (filters: GalleryFilters, rejectWithValue: any) => {
    try {
        const response = await api.get(`/${filters.section}/${filters.sort}/${filters.window}/${filters.page}?showViral=${filters.showViral}&mature=${filters.showMature}&album_previews=${filters.albumPreviews}`)

        return response;

    } catch (_err) {
        let err = (_err as AxiosError)
        return rejectWithValue(err.response?.data)
    }

}