import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  folders: [],
  foldersStructure: {},
};
export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    addAllFolder: (state, action) => ({
      ...state,
      folders: action.payload
    }),
    addFolder: (state, action) => ({
      ...state,
      folders: [...state.folders, ...action.payload],
    }),
    addFoderStructure: (state, action) => ({
      ...state,
      foldersStructure: action.payload,
    }),
    deleteFolder: (state, action) => ({
      ...state,
      folders: state.folders.filter(folder => folder.id !== action.payload),
    }),
  }
});

export const { addFoderStructure, addAllFolder, addFolder, deleteFolder } = folderSlice.actions;
export default folderSlice.reducer;
