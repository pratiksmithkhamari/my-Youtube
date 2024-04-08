import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHART_COUNT } from "./constant";

const messageSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.splice(LIVE_CHART_COUNT,1))
       state.messages.unshift(action.payload);
    },
    sentChart:(state,action)=>{
    
    }
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
