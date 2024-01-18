import axios, { AxiosInstance } from "axios";
import { ErrorService } from "./error.service";
import { EErrorType } from "src/enums/error.enum";
import { IAxiosRequestConfig } from "src/models/axios.model";
import { Cookies } from "quasar";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`
  }
});

async function fetchData(url: string, config?: IAxiosRequestConfig<any> | undefined): Promise<any> {
  try {
    return (await instance.get(url, config))?.data;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : EErrorType.Default;

    if (config?.showError) {
      ErrorService.showError(errorMessage);
    }

    throw new Error(errorMessage);
  }
}

async function postData(url: string, data?: any, config?: IAxiosRequestConfig<any> | undefined): Promise<any> {
  try {
    return (await instance.post(url, data, config)).data;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : EErrorType.Default;

    if (config?.showError) {
      ErrorService.showError(errorMessage);
    }

    throw new Error(errorMessage);
  }
}

export default {
  get: fetchData,
  post: postData
}