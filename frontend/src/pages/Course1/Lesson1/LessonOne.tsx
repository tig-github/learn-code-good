import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";

const goalOneText: string =
  "To get an introduction into the Python Programming language.";
const fieldOneText: string = `The first time I tried to teach programming 
I attempted to speed through this part of the process to get to the fundementals that are presented here.
This was a big mistake - there are many small details here that, while not important to memorize, should be
made very clear before moving onto the meat of the course. As such this lesson goes through a relatively detailed
look at environment setup, Python syntax, Variables and Types, operators, and errors, finishing up with
Input and Output. The last topic in particular was tricky for my students to understand at the time, so it will be handled
more carefully here. `;
const fieldTwoText: string = `Lesson one alone isn't going to get you up and running, but my hope is that, by the time you finish
it, you will be much more resiliant to common pitfalls that can slow the early learning process. Lesson 2 and onwards, we will hit
the ground running.`;
const skipText: string =
  "You have had minor programming experience in Python before and have an environment set up.";

const LessonOne = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Lesson One</Text>
        </Heading>
        <Goal text={goalOneText} />

        {/* This box is essentially a dividing line */}

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
        >
          <Text fontSize="4xl">It all starts here!</Text>
          <br />
          <Text fontSize="xl">{fieldOneText}</Text>
          <br />
          <Text fontSize="xl">{fieldTwoText}</Text>
        </Box>
        <Skip text={skipText} />
      </Stack>
    </>
  );
};

export default LessonOne;
