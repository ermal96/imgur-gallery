import { getGallery } from '../../api/galleryApi';
import { GalleryFilters } from './../../types';
import { createAsyncThunk, } from '@reduxjs/toolkit'


export const fetchGallery = createAsyncThunk(
    'gallery/get',
    async (filters: GalleryFilters, { rejectWithValue }) => {
        return await getGallery(filters, rejectWithValue);
    }
)
