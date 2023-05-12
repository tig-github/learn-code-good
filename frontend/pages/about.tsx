import React from "react";
import { Stack, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Stack gap={12} my="6rem" align="center">
        <Heading>
          <Text align="center">print(`About`)</Text>
        </Heading>
        <Text align="center">I&apos;m all about learning. Dive in!</Text>
      </Stack>
    </>
  );
};

export default About;
