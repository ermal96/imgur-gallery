import { GalleryFilters } from './../../types';
import { createAsyncThunk, } from '@reduxjs/toolkit'
import api from '../../api'

export const fetchGallery = createAsyncThunk(
    'gallery/get',
    async (filters: GalleryFilters) => {
        try {
            return await api.get(`/${filters.section}/${filters.sort}/${filters.window}/${filters.page}?showViral=${filters.showViral}&mature=${filters.showMature}&album_previews=${filters.albumPreviews}`)
        } catch (error: any) {
            console.log(error?.response)
            return {
                status: 403
            }
        }


    }
)
