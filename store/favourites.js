import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      const filteredIds = state.ids.filter((id) => id !== action.payload.id);
      state.ids = filteredIds;
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
