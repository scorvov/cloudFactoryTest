import { createContext } from 'react';
import { observable, action, configure, makeObservable } from 'mobx';

import { ContentStatus, Tickers, TickersCollection } from './types';
import { loadTickers } from '@/api';

configure({
  enforceActions: 'never',
});

export class TickersStore {
  tickers: TickersCollection = {};
  tickersTransform: Tickers = [];
  status: ContentStatus = ContentStatus.Init;
  loadingTimer: null | ReturnType<typeof setInterval> = null;

  constructor() {
    makeObservable(this, { tickersTransform: observable, status: observable, loadTickers: action });
  }

  loadTickers = async () => {
    try {
      const response = await loadTickers();
      this.transformTickers(response.data);
      this.status = ContentStatus.Loaded;
    } catch (e) {
      console.log('Error: ', e);
      this.status = ContentStatus.Error;
    }
  };

  transformTickers = (refreshedTickers: TickersCollection) => {
    const tickersComp: Tickers = Object.keys(refreshedTickers).map((name: string) => {
      const currElement = this.tickers[name];
      let isChanged = false;
      if (currElement) {
        isChanged =
          currElement.last !== refreshedTickers[name].last ||
          currElement.highestBid !== refreshedTickers[name].highestBid ||
          currElement.percentChange !== refreshedTickers[name].percentChange;
      }

      return { name: name.replace('_', '/'), ...refreshedTickers[name], isChanged };
    });
    this.tickers = refreshedTickers;
    this.tickersTransform = tickersComp;
  };

  startLoading = () => {
    this.loadTickers();
    this.loadingTimer = setInterval(() => this.loadTickers(), 5000);
  };

  stopLoading = () => clearInterval(this.loadingTimer as ReturnType<typeof setInterval>);
}

export const TickersStoreContext = createContext(new TickersStore());
