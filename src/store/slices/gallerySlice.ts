import { GalleryFilters, GalleryResponse } from './../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GalleryState } from '../../types';
import { fetchGallery } from '../actions/galleryActions';

const initialState: GalleryState = {
    loading: false,
    items: [],
    filters: {
        section: "hot",
        sort: "viral",
        page: 1,
        window: "day",
        showViral: true,
        albumPreviews: true,
        showMature: false
    }
}

const setLoader = (state: GalleryState): void => {
    state.loading = true
};

const setGalleryRejected = (state: GalleryState, action: PayloadAction<GalleryResponse>): void => {
    state.loading = false
    state.success = action.payload.success
};

const setGalleryFulfilled = (state: GalleryState, action: PayloadAction<GalleryResponse>): void => {
    console.log(action.payload);
    state.loading = false
    state.success = action.payload.success
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