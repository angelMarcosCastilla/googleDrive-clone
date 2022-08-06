import { createSlice } from '@reduxjs/toolkit'

const initialState = null
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => action.payload,
    logoutUser: () => null
  }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
