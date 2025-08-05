import axios, { AxiosError, AxiosResponse } from "axios";
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timeout, please try again later.",
    headers: {
        "Content-Type": "application/json",
    }
})

export interface AxiosCustomResponse {
    detail?: any,
    data?: any,
    message?: string,
    options?: any,
    status: string
}

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    throw error.response;
})

export const get = async (url: string, config: any = {}) => axiosInstance.get(url, config)
export const post = async (url: string, data: any = {}, config: any = {}) => axiosInstance.post(url, data, config)

export default axiosInstance