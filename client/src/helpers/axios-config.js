import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  withCredentials: true,
})

//interceptors in 'Axios' are equivalent to middleware in Express
//its can be to transform the request before Axios sends it, 
//or transform the response before Axios returns the response to your code

// make sure data property matches/exist in express route
// e.g res.status(err.statusCode).json({'err': err.message})


axiosInstance.interceptors.response.use(
  response => (response), 
  error => (Promise.reject(error))
)

export default axiosInstance;