import { configureStore, createSlice } from '@reduxjs/toolkit'

let isLogginedSlice = createSlice({
  name : 'isLoggined',
  initialState : true,
  reducers : {
    loggined(state){
      console.log('loggined');
      state = true;
      return state;
    }, 
    logout(state) {
      state = false;
      return state;
    }
  }
})

let seedSlice = createSlice({
  name : "seeds", 
  initialState : [],
  reducers : {
    pushSeed(state, a) {
      state = a.payload
      return state;
    }
  }
})

export let { loggined, logout } = isLogginedSlice.actions;
export let { pushSeed } = seedSlice.actions;
export default configureStore({
  reducer: {
    isLoggined : isLogginedSlice.reducer,
    seeds : seedSlice.reducer
  }
}) 