import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";

import type { Currency } from "lib/types";

type CurrenciesTableProps = {
  conversionRatesData: Currency[];
  size?: string;
};

export const CurrenciesTable = ({
  conversionRatesData,
  size,
}: CurrenciesTableProps) => {
  return (
    <Table variant="striped" size={size}>
      <Thead>
        <Tr>
          <Th>Currency</Th>
          <Th>Change</Th>
          <Th isNumeric>(Value)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {conversionRatesData.map((currency) => (
          <Tr key={currency.code}>
            <Td>
              {currency.code}{" "}
              <Tooltip label={currency.fullName}>
                <InfoOutlineIcon />
              </Tooltip>
            </Td>
            <Td>{currency.fullName}</Td>
            <Td isNumeric>{currency.value}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Currency</Th>
          <Th>Change</Th>
          <Th isNumeric>(Value)</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};
