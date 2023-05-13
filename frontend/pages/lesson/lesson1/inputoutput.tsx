import React from "react";
import { Stack, Text, Heading, Box } from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import TextLine from "../../../components/TextLine";
import Python from "../../../components/Python";

const goalOneText: string =
  "Learn basics about Python Command Line Input and Output.";
const skipText: string =
  "You have used Python before and have used Input and Output";
const fieldOneText: string = `At this point you have already gotten practice with Python output using the print() function. However, programs would not
be very useful if they could never take in information. Here we will learn the most simple way to allow a user to communicate with the program.
From here on I will be using the term I/O to refer to Input and Output together, which is a shorthand used a ton in programming.`;
const fieldTwoText: string = `The builtin function input() prompts users for input in the command line before continuing program execution. Basically,
when you have a line of code with input(), the program will say - "I do not know what the value of input is, so I will ask the user directly, and once this
user gives me the value, I will return it." We talked a bit about the concept of returning in the types section - input() is just like type()
in that we are primarily interested in what it gives us.`;
const fieldThreeText: string = `What makes it a little more complicated is that input is a bit like both print and type - it will cause a side effect, or
work separate from what is returned - which here is prompting the user and waiting until the user responds. It also returns a value that is used. To revie,
print does not return anything meaninful, it just has a useful side effect - outputting the value to command line. Carefully study the code below and try writing your own.`;
const fieldFourText: string = `print() has two more nice features we have not gone over yet.`;
const fieldFiveText: string = `You can actually 'pass' (put into the parentheses as values for the function to use) multiple values into print. The way to do this
is to seperate them by comma. print() will automatically add a space between these values.`;
const fieldSixText: string = `You can also specify what the last line should be. Instead of printing a newline every time, you can print anything you want. This is 
specified by the end="" keyword argument, with it printing any string. There are also special characters you can use that will
react differently on output than others, such as \n for newline, \t for tab, or \\ to use the \ as a character.`;

const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText];
const textField3: Array<string> = [fieldFourText, fieldFiveText, fieldSixText];

const L1InputOutput = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Input/Output</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <TextLine textArray={textField1} />
        <Heading as="h3" mb="6rem" ml="25rem">
          <Text fontSize="2xl">input()</Text>
        </Heading>
        <TextLine textArray={textField2} />
        <Python trinketsrc="https://trinket.io/embed/python3/95145687f1" />
        <Heading as="h3" mb="6rem" ml="25rem">
          <Text fontSize="2xl">print() revisited</Text>
        </Heading>
        <TextLine textArray={textField3} />
        <Python trinketsrc="https://trinket.io/embed/python3/3bb7fb52fa" />
      </Stack>
    </>
  );
};

export default L1InputOutput;
