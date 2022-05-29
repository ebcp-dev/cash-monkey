export type Merge<P, T> = Omit<P, keyof T> & T;

export type RatesResponse = {
  time_last_update_utc: string;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [key: string]: number;
  };
};

export type CurrenciesJson = {
  [key: string]: string;
};

export type Currency = {
  code: string;
  fullName: string;
  value: number;
};
