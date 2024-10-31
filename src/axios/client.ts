import axios from "axios";

export const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  timeout: 10 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// apiCaller.interceptors.request.use(
//   (config) => {
//     const token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjowLCJpcCI6IjE0LjE2MS4yNS43NSIsIm1hbnVmYWN0dXJlcl9pZCI6ImIyODIwNWE3MTRkNTk1YTNmYmMwYzkwMjI4ZDJjYmJkIiwiZXhwaXJlIjoxNzI5MjIxMjI1LCJib2R5IjoiQjJDLS1FQ08tLTIxODMxNTEyLS1iMjgyMDVhNzE0ZDU5NWEzZmJjMGM5MDIyOGQyY2JiZCIsImlhdCI6MTcyOTEzNDgyNX0.63DUWuJEDIWFcVvee5p3u6R6NhjRV0JPpXC-ZcEpHyg";
//     const manufacturerId = "b28205a714d595a3fbc0c90228d2cbbd";

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     if (manufacturerId) {
//       config.headers["Manufacturer_id"] = manufacturerId;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

apiCaller.interceptors.response.use((response) => {
  return response.data;
});
