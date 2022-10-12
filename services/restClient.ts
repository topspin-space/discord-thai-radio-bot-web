import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

export interface IConfig {
  baseURL?: string;
  headers?: any;
}

export type Params = { [key: string]: string | number | boolean };

export interface IRequest {
  url?: string;
  method?: Method;
  headers?: any;
  params?: Params;
  data?: any;
}

function handleResponse(response: AxiosResponse) {
  return response.data;
}

function handleError(error: any) {
  return Promise.resolve(error.response);
}

class RestClient {
  private axios: AxiosInstance;
  constructor(private config?: IConfig) {
    this.axios = axios.create({
      ...config,
      baseURL: process.env.API_HOST,
      withCredentials: true 
    });
    this.config = config;
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .request({
        url,
        method: "GET",
        ...config,
      })
      .then(handleResponse)
      .catch(handleError);
  }
  post(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .request({
        url,
        method: "POST",
        ...config,
      })
      .then(handleResponse)
      .catch(handleError);
  }
  put(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .request({
        url,
        method: "PUT",
        ...config,
      })
      .then(handleResponse)
      .catch(handleError);
  }
  delete(url: string) {
    return this.axios
      .request({
        url,
        method: "DELETE",
      })
      .then(handleResponse)
      .catch(handleError);
  }
}

const restClient = new RestClient()

export default restClient