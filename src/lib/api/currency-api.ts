import axios from "axios";

export const getLatestRates = async (baseCurrency = "USD") => {
  const url = `${process.env.CURRENCY_API_URL}/latest`;
  const params = {
    apiKey: process.env.CURRENCY_API_KEY,
    base_currency: baseCurrency,
  };
  const response = await axios.get(url, {
    params,
  });

  return response.data;
};
