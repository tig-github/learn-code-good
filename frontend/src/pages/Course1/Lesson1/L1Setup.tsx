import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import Python from "../../../components/Python.tsx";
import TextLine from "../../../components/TextLine.tsx";

const goalOneText: string =
  "Get your first taste of programming and setup an environment.";
const skipText: string =
  "You already have an environment set up to run Python.";
const fieldOneText: string = `The classic way to start learning a programming language is learning
how to print Hello World. Let's give it a try. Press the arrow button to run the code below.`;
const fieldTwoText: string = `This is a python interpreter, currently pulled from the website Trinket.
The Python interpreter is what runs our Python code. In this case, the interpreter is executing one line of code,
print("Hello World"). Congrats! You ran your first line of code.`;
const fieldThreeText: string = `print is a builtin function - a function that is provided by Python to help make our lives easier. In this
case, the print function will output whatever is passed into it, which is the sentence Hello World. We will learn what the syntax is
next, how input/output works at the end of this lesson, and what a function is (and how we can make our own!) in Lesson 3.`;
const fieldFourText: string = `For now though, let's setup Python locally. Trinket snippets will be provided in the following
lessons to help teach concepts, but it is recommended to have your own environment to work on things on your own and have more freedom.
Take it from me - when I was learning I didn't, and it made things a bit harder than they needed to be.`;
const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText, fieldFourText];

const L1Setup = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Hello World!</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
        <TextLine textArray={textField1} />
        <Python trinketsrc="https://trinket.io/embed/python3/164cbfc0d8" />
        <TextLine textArray={textField2} />
      </Stack>
    </>
  );
};

export default L1Setup;
