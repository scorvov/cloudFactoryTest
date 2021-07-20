export interface Ticker {
  name: string;
  last: number;
  highestBid: number;
  percentChange: number;
  isChanged: boolean;
}

export type Tickers = Array<Ticker>;

export type TickerIn = {
  last: number;
  highestBid: number;
  percentChange: number;
  isChanged: boolean;
};

export type TickersCollection = Record<string, TickerIn>;

export enum ContentStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
