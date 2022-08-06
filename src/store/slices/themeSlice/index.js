import { createSlice } from '@reduxjs/toolkit'

const initialState = 'ligth'
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => action.payload
  }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
