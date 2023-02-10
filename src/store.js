import { configureStore, createSlice } from '@reduxjs/toolkit'

let getTokenSlice = createSlice({
  name : 'token',
  initialState : "",
  reducers : {
    setToken(state, data){
      state = data;
      return state;
    }
  }
})

let seedSlice = createSlice({
  name : "seeds", 
  initialState : [],
  reducers : {
    pushSeed(state, data) {
      state = data.payload.map((item)=>{
        const { title, id, weight } = item;
        return {id, title, done: weight>0}
      })
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


export let { setToken } = getTokenSlice.actions;
export let { pushSeed } = seedSlice.actions;
export let { setSeedDetail } = seedDetailSlice.actions;
export default configureStore({
  reducer: {
    token : getTokenSlice.reducer,
    seeds: seedSlice.reducer,
    seedDetail : seedDetailSlice.reducer,
  }
}) 