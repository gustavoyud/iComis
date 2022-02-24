import {AxiosRequestConfig} from 'axios';
import axios from './axios-instance';

/**
 * Default Http response interface
 */
export interface HttpResponse<T> {
  /**
   * Status code
   */
  statusCode: number;

  /**
   * Response body
   */
  body: T;
}

/**
 * Generical get method
 *
 * @param url - API URL to be retrieved
 * @param [params] - params to be provided
 *
 * @returns get response
 */
export async function get<T = any>(
  url: string,
  params: any = {},
  config: AxiosRequestConfig = {},
): Promise<T> {
  return axios
    .get(`/${url}`, {...config, params})
    .then(({data}) => data)
    .catch(({response: {data}}) => {
      throw data;
    });
}

/**
 * Generical post method
 *
 * @param url - URL to post
 * @param [data] - data to be provided
 *
 * @returns post response
 */
export async function post<T = any>(
  url: string,
  data: any = {},
  config?: AxiosRequestConfig,
): Promise<T> {
  return axios
    .post(`/${url}`, data, config)
    .then(({data: success}) => success)
    .catch(({response}) => {
      throw response?.data ?? response?.error ?? response;
    });
}

/**
 * Generical put method
 *
 * @param url - URL to put
 * @param [data] - data to be provided
 *
 * @returns put response
 */
export async function put<T = any>(
  url: string,
  data: any = {},
  config?: AxiosRequestConfig,
): Promise<T> {
  return axios
    .put(`/${url}`, data, config)
    .then(({data: success}) => success)
    .catch(({response: {data: error}}) => {
      throw error;
    });
}

/**
 * Generical delete method
 *
 * @param url - API URL to delete
 * @param [params] - params to be provided
 *
 * @returns delete response
 */
export async function httpDelete<T = any>(
  url: string,
  params: any = {},
  data: any = {},
): Promise<T> {
  return axios
    .delete(`/${url}`, {params, data})
    .then(({data: success}) => success)
    .catch(({response: {data: error}}) => {
      throw error;
    });
}
