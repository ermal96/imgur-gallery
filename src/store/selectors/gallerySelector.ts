import { RootState } from './../index';
import { createSelector } from "@reduxjs/toolkit";


export const selectGalleryState = createSelector((state: RootState) => state, (state) => state.gallery)

export const selectGalleryStateById = (id: string) => {
    return createSelector((state: RootState) => state, (state) => state.gallery.items.filter((item) => item.id === id)[0])
}
