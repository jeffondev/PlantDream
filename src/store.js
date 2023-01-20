import { configureStore, createSlice } from '@reduxjs/toolkit'

let isLogginedSlice = createSlice({
  name : 'isLoggined',
  initialState : true,
  reducers : {
    loggined(state){
      console.log('loggined');
      state = true;
      return state
    }, 
    logout(state) {
      state = false;
    }
  }
})

export let { loggined, logout } = isLogginedSlice.actions;
export default configureStore({
  reducer: {
    isLoggined : isLogginedSlice.reducer
  }
}) 