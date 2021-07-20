import { create, ApiResponse } from 'apisauce';

import { TickersCollection } from '@/stores/types';

export const baseURL = 'https://poloniex.com';

export const api = create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
    LANGUAGE: 'en',
  },
});

export const loadTickers = (): Promise<ApiResponse<TickersCollection, any>> => {
  return api.get('/public?command=returnTicker');
};
