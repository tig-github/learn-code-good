import React from "react";
import { Stack, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";

const goalOneText: string =
  "To learn the basics of the Python Programming language.";

const LessonOne = () => {
  return (
    <>
      <Stack my="6rem" align="center">
        <Heading mb="3rem">
          <Text>Lesson One</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Text>It all starts here!</Text>
      </Stack>
    </>
  );
};

export default LessonOne;
