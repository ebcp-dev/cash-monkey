import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://github.com/ebcp-dev/"
          isExternal
          rel="noopener noreferrer"
        >
          ebcp-dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
