import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});


// http.defaults.headers.common["Authorization"] = `Bearer ${tokenAuth}`;

// http.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       await refreshAuthToken();
//       const newToken = useAuthStore.getState().tokenAuth;
//       http.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
//       originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//       return http(originalRequest);
//     }

//     return Promise.reject(error);
//   }
// );

export { http };
