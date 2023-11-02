import axios from "axios";
import { getTokenFromCookie } from "../helpers/getToken";

export const API_URL = "https://test-assignment.emphasoft.com/api/v1";

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${getTokenFromCookie()}`;
  return config;
});

export default $api;
