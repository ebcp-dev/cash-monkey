import type { Currency, CurrenciesJson } from "lib/types";

export const transformCurrencies = (
  conversion_rates_arr: [string, number][],
  currencies: CurrenciesJson
) => {
  const ratesArr: Currency[] = [];
  conversion_rates_arr.forEach((curr) => {
    const currencyFullName = currencies[curr[0]]
      ? currencies[curr[0]]
      : "Not available";
    ratesArr.push({
      code: curr[0],
      fullName: currencyFullName,
      value: curr[1],
    });
  });

  return ratesArr;
};
