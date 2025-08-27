import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Contnet-Type": "application/json",
  },
});

export const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDBmYjg3MzcxM2UwMWY1NjA3ZWExMmY1MTA0OTU4NCIsIm5iZiI6MTc1NjI1NDY0NS4zMjQsInN1YiI6IjY4YWU1MWI1YTFmZGIzN2MxNzBmODg5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PIYPKzQLLDQCXc5rqgbpPqD1CL8vQsMoZqokuJgSZKk",
  },
});
