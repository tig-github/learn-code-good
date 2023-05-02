import React from "react";
import { Stack, Image, Text, Heading } from "@chakra-ui/react";
import Goal from "../../components/Goal.tsx";
import Skip from "../../components/Skip.tsx";
import Python from "../../components/Python.tsx";
import TextLine from "../../components/TextLine.tsx";

const goalOneText: string = "Goal string";
const skipText: string = "Skip string";
const fieldOneText: string = ``;
const textField1: Array<string> = [fieldOneText];

const LessonTemplate = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Template</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
      </Stack>
    </>
  );
};

export default LessonTemplate;
