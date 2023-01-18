import { RootState } from './../index';
import { createSelector } from "@reduxjs/toolkit";

export const selectGalleryState = createSelector((state: RootState) => state, (state) => state.gallery)