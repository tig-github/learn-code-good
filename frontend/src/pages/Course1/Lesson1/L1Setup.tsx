import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";

const goalOneText: string =
  "Get your first taste of programming and setup an environment.";
const skipText: string =
  "You already have an environment set up to run Python.";

const L1Setup = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Hello World!</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />

        <Box
          borderWidth=".05rem"
          borderTop="None"
          borderRight="None"
          borderBottom="None"
          borderColor="black"
          h="100%"
          w="80%"
          pl={4}
          minHeight="4rem"
        ></Box>
      </Stack>
    </>
  );
};

export default L1Setup;
