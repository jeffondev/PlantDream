import { configureStore, createSlice } from '@reduxjs/toolkit'

let isLogined = createSlice({
  isPlaying : false,
  reducers : {
    sucLogin(state){
      return (state = true)
    }
  }
})

export let { sucLogin } = isLogined.actions
export default configureStore({
  reducer: {
    isLogined : isLogined.reducer
  }
}) 