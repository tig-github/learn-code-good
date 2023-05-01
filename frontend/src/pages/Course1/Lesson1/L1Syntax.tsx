import React from "react";
import { Stack, Image, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import Python from "../../../components/Python.tsx";
import TextLine from "../../../components/TextLine.tsx";
import whitespaceImg from "../../../images/whitespace.PNG";
import commentImg from "../../../images/comment.PNG";

const goalOneText: string = "Learn basics about Python Syntax.";
const skipText: string =
  "You have used Python before and are familiar with the syntax";
const fieldOneText: string = `Syntax is a linguistic term that refers to the arrangement and structure symbols 
to form ideas. Python Syntax is composed of the choices made by the language designer Guido van Rossum to express
the language.`;
const fieldTwoText: string = `In more concrete terms, it is the layout of the language. Most syntax will be covered as we
look into new features and aspects of Python, especially in Lesson 2 - but we will talk about two things first.`;
const fieldThreeText: string = `First, whitespace is a common feature in Python syntax. Whitespace refers to spaces, tabs, newlines, any open space
in text. Unlike most programming languages, whitespace actually matters in Python.`;
const fieldFourText: string = `Consider this basic program, without worrying too much about what is going on. In this program, each line is a statement, and
each statement is executed one after the other. This is basic control flow, which we will dig deeper into in Lesson 2. For now, just assume all programs run from top to
bottom.`;
const fieldFiveText: string = ` Whitespace matters - each new line represents a new statement. If they were all written on the same line, the code
would give you a Syntax Error.`;
const fieldSixText: string = `Python also supports comments, which are lines of code that do absolutely nothing. They are there to give reference to programmers.
A single line comment can be added by starting the line with a #, and a multiline comment can be made by wrapping the comment in triple quotation marks.
Comments can also start on exisisting lines of code - the comment will begin once the symbol (# or """) is used.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [fieldFourText, fieldFiveText];
const textField3: Array<string> = [fieldSixText];

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
        <Image w="80%" src={whitespaceImg} />
        <TextLine textArray={textField2} />
        <Image w="60%" src={commentImg} />
        <TextLine textArray={textField3} />
      </Stack>
    </>
  );
};

export default L1Syntax;
