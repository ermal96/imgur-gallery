import { GalleryFilters } from './../../types';
import { createAsyncThunk, } from '@reduxjs/toolkit'
import api from '../../api'

export const fetchGallery = createAsyncThunk(
    'gallery/get',
    async (filters: GalleryFilters) => {
        const response = await api.get(`/${filters.section}/${filters.sort}/${filters.window}/${filters.page}?showViral=${filters.showViral}&mature=${filters.showMature}&album_previews=${filters.albumPreviews}`)
        return response;
    }
)
