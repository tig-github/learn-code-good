import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import TextLine from "../../../components/TextLine";

const goalOneText: string = "To learn control flow, branching, and looping.";
const skipText: string =
  "You have experience with branching and looping constructs in any language, and know Python file handling.";
const fieldOneText: string = `Now that you have experience working with Python, it is time to learn how to use it effectively.`;
const fieldTwoText: string = `This lesson will cover the core of programming in imperative languages, and by the end of it you will be able to make
  a wide variety of programs that accomplish useful tasks.`;
const fieldThreeText: string = `The lesson will go over branching - which is where the code decides whether to execute one block of code or another depending on a certain condition.`;
const fieldFourText: string = `It will then go into looping in Python, which allows the same code to execute multiple times to accomplish a specific task.`;
const fieldFiveText: string = `Finally, we will look into files and error handling, both powerful tools in many programs.,`;

const textField1: Array<string> = [fieldOneText, fieldTwoText];
const textField2: Array<string> = [
  fieldThreeText,
  fieldFourText,
  fieldFiveText,
];

const LessonTwo = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Lesson Two</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <TextLine textArray={textField1} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Overview</Text>
        </Heading>
        <TextLine textArray={textField2} />
      </Stack>
    </>
  );
};

export default LessonTwo;
