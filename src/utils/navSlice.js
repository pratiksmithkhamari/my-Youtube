import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navBar",
  initialState: {
    isMenuOpen: true,
    home: [],
    catagory: 'All'
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    allVideo: (state, action) => {
      state.home = action.payload
    },
    catagoryVideo:(state,action)=>{
        state.catagory = action.payload
    }
  },
});

export const { toggleMenu, closeMenu,catagoryVideo,allVideo } = navSlice.actions;

export default navSlice.reducer;
