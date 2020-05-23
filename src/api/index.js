import axios from "axios";
import router from "@/router";

const api = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000, // indicates 10000ms
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// Interceptor for responses
const responseInterceptor = response => {
  switch (response.status) {
    case 200:
      console.log("Exito");
      break;
  }

  return response;
};

// Interceptor for error responses
const errorInterceptor = error => {
  let path = "/error";

  switch (error.response.status) {
    case 404:
      path = "/404";
      break;
  }
  router.push(path);
  return Promise.reject(error);
};

api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
