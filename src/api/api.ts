import axios from "axios";

const API = axios.create({
  baseURL: "https://test-assignment.emphasoft.com/api/v1",
});

export default API;
