import React from "react";
import { Stack, Image, Text, Heading, Box } from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import Python from "../../../components/Python";
import TextLine from "../../../components/TextLine";

const goalOneText: string =
  "Learn basics about Python Variables and Dynamic Binding.";
const skipText: string =
  "You have used Python before and are familiar with variables";
const fieldOneText: string = `Variables are symbols that can represent values. They are different from the ones
in math, because in programming they are able to change - in math they cannot. This is the concept of mutability
versus immutability, where mutability means it is able to change. In Python, all variables are mutable.`;
const fieldTwoText: string = `Run the code above. Above we are assigning the variable x to the value 2. Assignment is the
process of making the value of a variable represent a certain value. This process is called Binding. Because binding is done
at runtime in Python, this is called Dynamic Binding.`;
const fieldThreeText: string = `To put this in a more useful way, when a variable is assigned to something using =, whatever value is on the right
is bound to the variable. In the example above, 2 is bound to x, so when you print x, you actually print 2. The = operator is NOT equals, we will
see that later.`;
const fieldFourText: string = `Before running the code above, try tracing it out in your head one line at a time. What will be printed out? When you
run the code, does it match what you expected? As you can see here, you can assign variables to other variables. When this is done, the variable is bound to
whatever value the other variable represents, as opposed to the variable itself. Because this is done at runtime, it updates as the program moves along.`;
const fieldFiveText: string = `Once again, try tracing this in your head or on paper first before running the code. These variables are assigned to values that
are not numbers - the exact types of values they are will be discussed in the next part of Lesson 1. Notice how y is assigned to z, then z
is assigned to another value. Does this change what y was assigned to? No, because y is only being assigned to the value that z is, not the variable, so future
changes in z will not effect y.`;
const fieldSixText: string = `There are two major naming conventions for variables, and which to use typically depends on the 
programming language. The first is snake_case, which is generally used in Python and is done by separating words with _. The second is 
camelCase, which is more common in C-style languages and separates words with capital letters. Try to stick to snake_case in Python.`;

const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText];
const textField3: Array<string> = [fieldFourText];
const textField4: Array<string> = [fieldFiveText];
const textField5: Array<string> = [fieldSixText];

const L1Variables = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Variables</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <TextLine textArray={textField1} />
        <Python trinketsrc="https://trinket.io/embed/python/7602a71497" />
        <TextLine textArray={textField2} />
        <Python trinketsrc="https://trinket.io/embed/python/1ac80473e8" />
        <TextLine textArray={textField3} />
        <Python trinketsrc="https://trinket.io/embed/python/0d35921a8b" />
        <TextLine textArray={textField4} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Variable Name Conventions</Text>
        </Heading>
        <TextLine textArray={textField5} />
        <Python trinketsrc="https://trinket.io/embed/python/bb483ce246" />
      </Stack>
    </>
  );
};

export default L1Variables;
