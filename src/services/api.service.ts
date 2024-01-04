import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: '',
});

async function fetchData(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> {
  try {
    return (await instance.get(url, config))?.data;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}

async function postData(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> {
  try {
    return (await instance.post(url, data, config)).data;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}

export default {
  get: fetchData,
  post: postData
}