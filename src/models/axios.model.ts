import { AxiosRequestConfig } from "axios";

export interface IAxiosRequestConfig<T> extends AxiosRequestConfig<T> {
  showError?: boolean;
}