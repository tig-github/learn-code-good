import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import TextLine from "../../../components/TextLine.tsx";

const goalOneText: string =
  "To get an introduction into the Python Programming language.";
const skipText: string =
  "You have had minor programming experience in Python before and have an environment set up.";
const fieldOneText: string = `The first time I tried to teach programming 
I attempted to speed through this part of the process to get to the fundementals that are presented here.
This was a big mistake - there are many small details here that, while not important to memorize, should be
made very clear before moving onto the meat of the course.`;
const fieldTwoText: string = ` As such this lesson goes through a relatively detailed
look at environment setup, Python syntax, Variables and Types, operators, and errors, finishing up with
Input and Output. The last topic in particular was tricky for my students to understand at the time, so it will be handled
more carefully here. `;
const fieldThreeText: string = `Lesson one alone isn't going to get you up and running, but my hope is that, by the time you finish
it, you will be much more resiliant to common pitfalls that can slow the early learning process. Lesson 2 and onwards, we will hit
the ground running.`;
const fieldFourText: string = `Now for some general notes on the course.`;
const fieldFiveText: string = `I chose Python as the language for a few simple reasons. First, I simply
know it better than any other language, so it is easiest for me to teach in relative depth.`;
const fieldSixText: string = `Secondly, I do believe Python is one of the best beginner languages. The syntax is very readable which
allows beginners to focus on the concepts more than the language semantics, and the rigid, one way to do it mentality is very
beneficial for people starting out. There are quirks that make it different from many languages, but I personally don't see these as faults
or as particularly problematic. Python is also multi-paradigm, so it is easy to teach a variety of common programming
concepts which translate well to many languages.`;
const fieldSevenText: string = `Thirdly, Python is an excellent language to learn these days. It is no secret that Python is one of the most
popular programming langauges today, and among the most powerful. While you probably aren't going to write an operating system in it, it has
widespread use in Web Development, Data Science, Scripting, etc. It is incredibly beneficial to learn Python these days.`;
const fieldEightText: string = `There are a few setbacks in Python. The whitespace-focused syntax will be a bit of a hurdle
when transitioning into new languages, and dynamic typing might lead to some bad habits. It also teaches very little about low level
fundementals, though Lesson 9 will go into these with the battle tested C language. With that said the value in Python
for teaching far offsets its faults.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [
  fieldFourText,
  fieldFiveText,
  fieldSixText,
  fieldSevenText,
  fieldEightText,
];

const LessonOne = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Lesson One</Text>
        </Heading>
        <Goal text={goalOneText} />

        {/* This box is essentially a dividing line */}

        <TextLine textArray={textField1} />
        <Skip text={skipText} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">This Course</Text>
        </Heading>
        <TextLine textArray={textField2} />
      </Stack>
    </>
  );
};

export default LessonOne;
