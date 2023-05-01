import React from "react";
import { Stack, Image, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import Python from "../../../components/Python.tsx";
import TextLine from "../../../components/TextLine.tsx";

const goalOneText: string = "Learn basics about Python Syntax.";
const skipText: string =
  "You have used Python before and are familiar with the syntax";
const fieldOneText: string = `Syntax is a linguistic term that refers to the arrangement and structure symbols 
to form ideas. Python Syntax is composed of the choices made by the language designer Guido van Rossum to express
the langugae.`;

const textField1: Array<string> = [fieldOneText];

const L1Syntax = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Syntax</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
        <TextLine textArray={textField1} />
      </Stack>
    </>
  );
};

export default L1Syntax;
