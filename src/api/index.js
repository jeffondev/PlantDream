import axios from "axios";

export const getSeedsItem = (id) => axios.get(`/v1/seeds/${id}`);
export const postSeeds = (inputs) => axios.post('/v1/seeds', inputs)
export const getSeeds = () => axios.get('/v1/seeds')
export const getSeedsToday = () => axios.get('/v1/seeds/today');
export const postSeedsItemPlant = (id) => axios.post(`/v1/seeds/${id}/plant`);

export const postAuthCredentail = (input) => axios.post('/v1/auth/credential', input);
export const postAuthSignup = (input) => axios.post('/v1/auth/signup', input);
export const postAuthSignin = (input) => axios.post('/v1/auth/signin', input);

