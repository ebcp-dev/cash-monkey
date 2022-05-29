import {
  Button,
  ButtonGroup,
  Heading,
  TableContainer,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

import { CurrenciesTable } from "lib/pages/exchange-rates/CurrenciesList";
import type { RatesResponse, CurrenciesJson } from "lib/types";
import { transformCurrencies } from "lib/utils/transform-currencies";

type ExchangeRatesProps = {
  ratesResponse: RatesResponse;
  currencies: CurrenciesJson;
};

export const ExchangeRates = ({
  ratesResponse,
  currencies,
}: ExchangeRatesProps) => {
  const { colorMode } = useColorMode();

  const conversionRatesArr = Object.entries(ratesResponse.conversion_rates);
  const transformedConversionRates = transformCurrencies(
    conversionRatesArr,
    currencies
  );

  const [currencyList, setCurrencyList] = useState(transformedConversionRates);

  const sortLowHigh = () => {
    setCurrencyList(
      transformedConversionRates.sort((a, b) => a.value - b.value)
    );
  };

  const sortHighLow = () => {
    setCurrencyList(
      transformedConversionRates.sort((a, b) => b.value - a.value)
    );
  };

  return (
    <>
      <Heading as="h2" fontSize={{ base: "md" }}>
        Exchange Rates as of{" "}
        {ratesResponse.time_last_update_utc.substring(5, 16)}
      </Heading>
      <Heading as="h2" fontSize={{ base: "sm" }}>
        Base: {ratesResponse.base_code}
      </Heading>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button colorScheme="blue" onClick={sortLowHigh}>
          Sort Low to High
        </Button>
        <Button colorScheme="blue" onClick={sortHighLow}>
          Sort High to Low
        </Button>
      </ButtonGroup>
      <TableContainer
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
        marginTop={2}
        marginBottom={2}
        borderRadius={4}
      >
        <CurrenciesTable size="sm" conversionRatesData={currencyList} />
      </TableContainer>
    </>
  );
};
