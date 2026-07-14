import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interactions: [],
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    addInteraction: (state, action) => {
      state.interactions.push(action.payload);
    },

    setInteractions: (state, action) => {
      state.interactions = action.payload;
    },

    deleteInteraction: (state, action) => {
      state.interactions = state.interactions.filter(
        (item, index) => index !== action.payload
      );
    },

    clearInteractions: (state) => {
      state.interactions = [];
    },
  },
});

export const {
  addInteraction,
  setInteractions,
  deleteInteraction,
  clearInteractions,
} = interactionSlice.actions;

export default interactionSlice.reducer;