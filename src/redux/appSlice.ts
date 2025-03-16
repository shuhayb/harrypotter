import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserI {
  firstName: string
  lastName: string
  username: string
}

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    username: "",
  },
}

const appSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<UserI>) => {
      state.user = payload
    },
  },
})

export default appSlice.reducer
