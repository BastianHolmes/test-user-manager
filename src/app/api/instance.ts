import axios from "axios";
import { getTokenFromCookie } from "../helpers/getToken";

const $api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${getTokenFromCookie()}`;
  return config;
});

export default $api;
