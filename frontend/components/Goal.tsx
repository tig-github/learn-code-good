import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Goal = ({ text }: { text: string }) => {
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
            bg="#00D100"
            borderWidth=".05rem"
            borderTop="None"
            borderLeft="None"
            borderBottom="None"
            borderColor="black"
            h="100%"
            w="20%"
            minHeight="4rem"
            mr="3rem"
          >
            <Flex gap={5} mt="1rem" align="center">
              <CheckIcon color="white" boxSize={8} ml=".8rem" />
              <Text color="white" align="center" mr="2rem">
                Goal
              </Text>
            </Flex>
          </Box>
          <Text align="center">{text}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Goal;
