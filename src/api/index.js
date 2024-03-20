import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://rocket-2.vercel.app/",
});
