import { createSlice } from "@reduxjs/toolkit";

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
    removeFile: (state, action) => ({
      ...state,
      files: state.files.filter((file) => file.id !== action.payload)
    }),
    updateFileStore: (state, action) => ({
      ...state,
      files: state.files.map((file) => {
        if (file.id === action.payload.id) {
          return {...file, ...action.payload}
        }
        return file
      })
    }),
  }
});

export const { addAllFile, addFile, removeFile , updateFileStore} = fileSlice.actions;
export default fileSlice.reducer;