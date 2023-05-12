import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Skip = ({ text }: { text: string }) => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderColor="grey"
        w="60%"
        h="40%"
        overflow="hidden"
      >
        <Flex align="center">
          <Heading size="md"></Heading>
          <Box
            bg="red"
            borderWidth=".05rem"
            borderTop="None"
            borderLeft="None"
            borderBottom="None"
            borderColor="black"
            h="100%"
            w="40%"
            minHeight="4rem"
            minWidth="6rem"
            mr="3rem"
          >
            <Flex gap={5} mt="1rem" align="center">
              <WarningTwoIcon color="white" boxSize={8} ml=".8rem" />
              <Text color="white" align="center" mr="2rem">
                Only Skip if...
              </Text>
            </Flex>
          </Box>

          <Text align="center" mr="2rem">
            {text}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Skip;
