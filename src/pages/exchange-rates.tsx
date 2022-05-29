import type { GetStaticProps } from "next";

// import { getLatestRates } from "lib/api/currency-api";
import { currencies } from "lib/api/data/currencies";
import { mockData } from "lib/api/data/mock";
import { ExchangeRates } from "lib/pages/exchange-rates";

export default ExchangeRates;
/* eslint-disable @typescript-eslint/no-unused-vars */
export const getStaticProps: GetStaticProps = async (context) => {
  // const response = await getLatestRates();

  return {
    props: {
      ratesResponse: mockData,
      currencies,
    },
  };
};
