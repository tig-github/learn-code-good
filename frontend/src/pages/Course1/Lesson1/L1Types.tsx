import React from "react";
import {
  Stack,
  Image,
  Text,
  Heading,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import Python from "../../../components/Python.tsx";
import TextLine from "../../../components/TextLine.tsx";

const goalOneText: string = "Learn the basics of Types in Python";
const skipText: string =
  "You are familiar with the concept of types, dynamic typing, and strong typing";
const fieldOneText: string = `We previously discussed how variables can be assigned to values. It should also be clear from the examples
that not all values are the same. Values have different Types, which define the operations and behavior of the value.`;
const fieldTwoText: string = `Python is a dynamically typed language. This means that the type of a variable is determined at runtime. In 
human terms, this means that the type of a variable is whatever value it was assigned to is. Not all languages are like this, as we will see in Lessons
8 and 10.`;
const fieldThreeText: string = `Python, however, is also a strongly typed language. This means that operations between different types that could lead to
unexpected behavior will generally cause an error. For example, trying to subtract a sentence would throw a Type Error error in Python.
Try running the code below and see what happens.`;
const fieldFourText: string = `Here are some of the major types in Python. We will go into structured types in Lesson 3.`;
const fieldFiveText: string = `Python has a few numeric types. Integers represent, well, integer numbers, like 1 2 3 and not 1.1, 2.2, 3.3. Floats represent
decimals - really they represent floating point numbers, but we will go into that in Lesson 10. Complex are a Python unique type that represent complex numbers.
Numeric types are generally able to interact with each other without a problem, you can add and divide between integers and floats, for example.`;
const fieldSixText: string = `Strings are a list of characters. If you have experience with other languages, note that Python does not have a dedicated character 
type, all characters are just considered 1-length strings.`;
const fieldSevenText: string = `Strings are Python's way of representing words, sentences, data in that manner. They are a very flexible type. Generally, 
operations between numeric types and strings will not work (with a few small exceptions like multiplication). Strings should be treated differently
from numeric types as a whole.`;
const fieldEightText: string = `Strings also can output different things depending on the special characters in them. For example, \\n represents
a newline. We will go more into this in the final part of Lesson 1.`;
const fieldNineText: string = `Booleans are simple - they represent True and False. They will be pretty uninteresting until Lesson 2.`;
const fieldTenText: string = `None is a special type which represents nothing. This is also pretty uninteresting until later, but know that
None is handled differently from other types and cannot be operated on with other types.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [fieldFourText];
const textField3: Array<string> = [fieldFiveText];
const textField4: Array<string> = [fieldSixText, fieldSevenText];
const textField5: Array<string> = [fieldEightText];
const textField6: Array<string> = [fieldNineText, fieldTenText];

const L1Types = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Types</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
        <TextLine textArray={textField1} />
        <Python trinketsrc="https://trinket.io/embed/python/6296cc5f2e" />
        <TextLine textArray={textField2} />
        <TableContainer w="75%">
          <Table colorScheme="blackAlpha" variant="striped">
            <Thead>
              <Tr>
                <Th>Numeric</Th>
                <Th>Non-Numeric</Th>
                <Th>Structured</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Integer</Td>
                <Td>String</Td>
                <Td>List</Td>
              </Tr>
              <Tr>
                <Td>Float</Td>
                <Td>None</Td>
                <Td>Set</Td>
              </Tr>
              <Tr>
                <Td>Complex</Td>
                <Td>Boolean</Td>
                <Td>Dictionary</Td>
              </Tr>
            </Tbody>
            <TableCaption>
              Types in Python - many more structured types than shown
            </TableCaption>
          </Table>
        </TableContainer>
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Numeric Types</Text>
        </Heading>
        <TextLine textArray={textField3} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Non-Numeric Types</Text>
        </Heading>
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Strings</Text>
        </Heading>
        <TextLine textArray={textField4} />
        <Python trinketsrc="https://trinket.io/embed/python/ec96de29c2" />
        <TextLine textArray={textField5} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Booleans and None</Text>
        </Heading>
        <TextLine textArray={textField6} />
      </Stack>
    </>
  );
};

export default L1Types;