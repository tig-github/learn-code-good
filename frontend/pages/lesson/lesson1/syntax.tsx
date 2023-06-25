import React from "react";
import { Stack, Image, Text, Button, Heading, Box } from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import TextLine from "../../../components/TextLine";

const goalOneText: string = "Learn basics about Python Syntax.";
const skipText: string =
  "You have used Python before and are familiar with the syntax, along with the concept of abstraction and with expressions.";
const fieldOneText: string = `Syntax is a linguistic term that refers to the arrangement and structure symbols 
to form ideas. Python Syntax is composed of the choices made by the language designer Guido van Rossum to express
the language.`;
const fieldTwoText: string = `In more concrete terms, it is what every symbol means in the language. Most syntax will be covered as we
look into new features and aspects of Python, especially in Lesson 2 - but we will talk about two things first.`;
const fieldThreeText: string = `First, whitespace is a common feature in Python syntax. Whitespace refers to spaces, tabs, newlines, any open space
in text. Unlike most programming languages, whitespace actually matters in Python.`;
const fieldFourText: string = `Consider this basic program, without worrying too much about what is going on. In this program, each line is a statement, and
each statement is executed one after the other. This is basic control flow, which we will dig deeper into in Lesson 2. For now, just assume all programs run from top to
bottom.`;
const fieldFiveText: string = ` Whitespace matters - each new line represents a new statement. If they were all written on the same line, the code
would give you a Syntax Error. The big takeaway is lines matter a lot more in Python than other languages.`;
const fieldSixText: string = `Python also supports comments, which are lines of code that do absolutely nothing. They are there to give reference to programmers.
A single line comment can be added by starting the line with a #, and a multiline comment can be made by wrapping the comment in triple quotation marks.
Comments can also start on exisisting lines of code - the comment will begin once the symbol (# or """) is used.`;
const fieldSevenText: string = `Expressions are statements that evaluate to a value, sort of like in math. An example is 2+2, which is an expression that
evaluates to 4. Expressions do not need to be numeric in programming, and unlike in math can include things like equalities that evaluate to 'True' or 'False'. This
will make more sense as we progress through Lesson 1 - know for now that evaluation is how the expression becomes the value. It is basically Python
trying to solve a problem.`;
const fieldEightText: string = `Abstraction is a fundemental concept in computer science that will increasingly come up more. It means to generalize very complex
systems into simple models/examples. Computers are immensely complicated devices, and a programmer will be very unproductive if they have to fiddle with the nuts and bolts
to accomplish every task - so it is common to abstract 'upwards'. This allows the programmer to work on software that is not
leveraging more complicated systems, without having to worry about it. `;
const fieldNineText: string = `This is also a key component of software itself. Software often gets immesenly large, with millions of lines
of code. It is imperative to abstract away core functionality since many projects will get larger than any given person can fully understand. Even for
smaller project, it helps greatly.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [fieldFourText, fieldFiveText];
const textField3: Array<string> = [fieldSixText];
const textField4: Array<string> = [fieldSevenText];
const textField5: Array<string> = [fieldEightText, fieldNineText];

const L1Syntax = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">The Basics</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Syntax</Text>
        </Heading>

        <TextLine textArray={textField1} />
        <Image src="/images/whitespace.png" width="75%" alt="Whitespace" />
        <TextLine textArray={textField2} />
        <Image src="/images/comment.png" width="75%" alt="Comment" />
        <TextLine textArray={textField3} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Expressions</Text>
        </Heading>
        <TextLine textArray={textField4} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Abstraction</Text>
        </Heading>
        <TextLine textArray={textField5} />
        <Button w="45%" colorScheme="green">
          Lesson Complete
        </Button>
      </Stack>
    </>
  );
};

export default L1Syntax;
