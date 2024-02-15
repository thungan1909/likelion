import axios from 'axios';
const AxiosClient3 = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      "Content-Type": "application/json"
    }
  });
  AxiosClient3.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      const additional = config;
      additional.headers = additional.headers ?? {};
      additional.headers.Authorization = token ? `Bearer ${token}` : "";
      return additional;
    },
    (error) => {
      // Do something with request error
      console.log(error);
      return Promise.reject(error);
    }
  );
  
  AxiosClient3.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  
  export default AxiosClient3;
  