import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import userSlice from './slices/userSlice'
import folderReducer from "./slices/folderSlice"
import fileReducer from "./slices/fileSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userSlice,
    folders: folderReducer,
    files: fileReducer
  }
})
