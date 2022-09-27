import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
  files: [],
}


export const fileSlice = createSlice({
  name: "file",
  initialState: INITIAL_STATE,
  reducers: {
    addAllFile: (state, action) => ({
      ...state,
      files: action.payload
    }),
    addFile: (state, action) => ({
      ...state,
      files: [...state.files, action.payload]
    }),
  }
});

export const { addAllFile , addFile} = fileSlice.actions;
export default fileSlice.reducer;