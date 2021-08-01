import axios , { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  Success = 200,
  CreateSuccess = 201
}

const headers: Readonly<Record<string, string|boolean>> = {
  Accept: "application/json",
  'Content-type': 'application/json',
  "Access-Control-Allow-Credentials": true,
}

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch(error) {
    throw new Error(error)
  }
}

class Api {
  private instance: AxiosInstance | null = null
  private get api(): AxiosInstance {
    return this.instance != null ? this.instance : this.initApi()
  }

  initApi() {
    const http = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers,
      withCredentials: true
    })

    http.interceptors.request.use(injectToken, error => Promise.reject(error))

    this.instance = http
    return http
  }

  request<T= any, R= AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.api.request(config)
  }

  get<T=any, R=AxiosResponse<T>>(url:string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get<T, R>(url, config)
  }

  post<T= any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.api.post<T, R>(url, data, config)
  }

  put<T=any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.api.put<T, R>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.delete<T, R>(url, config);
  }
}

export const api = new Api()
