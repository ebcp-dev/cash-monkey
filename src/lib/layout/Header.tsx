import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" direction="row">
      <HStack spacing="24px">
        <Heading as="h1" size="md">
          <Link href="/">Cash Monkey</Link>
        </Heading>
        <Heading as="h1" size="sm">
          <Link href="/exchange-rates">Rates</Link>
        </Heading>
      </HStack>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
