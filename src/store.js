import { configureStore, createSlice } from '@reduxjs/toolkit'
import SeedDetail from './components/SeedDetail';

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

let seedDetailSlice = createSlice({
  name : "seedDetail",
  initialState : {
    title: "",
    start_date: 0,
    planned_days: 0,
    plants: []
  },
  reducers : {
    setSeedDetail(state, data) {
      state.title = data.payload.title;
      state.start_date = data.payload.start_date;
      state.planned_days = data.payload.planned_days;
      state.plants = data.payload.plants;

      return state;
    }
  }
})

export let { loggined, logout } = isLogginedSlice.actions;
export let { pushSeed } = seedSlice.actions;
export let { setSeedDetail } = seedDetailSlice.actions;
export default configureStore({
  reducer: {
    isLoggined : isLogginedSlice.reducer,
    seeds: seedSlice.reducer,
    seedDetail : seedDetailSlice.reducer
  }
}) 