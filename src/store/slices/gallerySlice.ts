import { GalleryFilters, GalleryResponse, GalleryItem } from './../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GalleryState } from '../../types';
import { fetchGallery } from '../actions/galleryActions';
import mock from '../../mock.json'

const initialState: GalleryState = {
    loading: false,
    items: mock as GalleryItem[],
    filters: {
        section: "top",
        sort: "rising",
        page: 1,
        window: "day",
        showViral: true,
        albumPreviews: false,
        showMature: false
    }
}

const setLoader = (state: GalleryState): void => {
    state.loading = true
};

const setGalleryRejected = (state: GalleryState, action: PayloadAction<GalleryResponse>): void => {
    state.loading = false
    state.statusCode = action.payload.status
};

const setGalleryFulfilled = (state: GalleryState, action: PayloadAction<GalleryResponse>): void => {
    state.loading = false
    state.statusCode = action.payload.status
    state.items = action.payload.data.data
};



export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setFilters: ((state, action: PayloadAction<GalleryFilters>) => {
            state.filters = action.payload
        }),
        resetFilters: ((state) => {
            state.filters = initialState.filters
        }),
    },
    extraReducers: {
        [fetchGallery.pending as unknown as string]: setLoader,
        [fetchGallery.fulfilled as unknown as string]: setGalleryFulfilled,
        [fetchGallery.rejected as unknown as string]: setGalleryRejected,
    }
})

export const galleryActions = gallerySlice.actions;

export default gallerySlice.reducer