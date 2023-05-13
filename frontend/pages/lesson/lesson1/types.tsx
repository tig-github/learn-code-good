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
  Box,
} from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import Python from "../../../components/Python";
import TextLine from "../../../components/TextLine";

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
const fieldElevenText: string = `We now get to learn our second builtin function after print(). type() is used to
tell you what type the value you pass into it is. Here we get into a distinction with functions - some will do work on
their own as part of calling them, like print - this work is called side effects.`;
const fieldTwelveText: string = `Others, like type(), will just return a value to you for your own use. This will be
elaborated on in great detail in Lesson 4, but for now try running the code below and see what happens.`;
const fieldThirteenText: string = `As you see, it only printed twice. That is because type() returns a string, which is then
printed out. Again, these semantics will be discussed in greater detail, but basically, you pass a value into a function and get something
out of it. If you are curious and can't wait until lesson 4, try treating print() like type(), and see what you get.`;
const fieldFourteenText: string = `For now though, all you need to get out of this is that type() can be used to see
the exact type of a value.`;
const fieldFifteenText: string = `Python does allow you to change the type of one value to another in limited cases. The rule of thumb is, if it 
makes sense to allow typecasting, Python will allow it. This has to be done directly in Python though, using a new collection of builtin functions.`;
const fieldSixteenText: string = `These work similarly to type() in that they return a value that is useful, however in this case the value they return
is the value passed in, changed to the proper type. For example, str(2) will return "2", and int("2") will return 2. However, something strange
like int("Hello World!") will just give a ValueError.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [fieldFourText];
const textField3: Array<string> = [fieldFiveText];
const textField4: Array<string> = [fieldSixText, fieldSevenText];
const textField5: Array<string> = [fieldEightText];
const textField6: Array<string> = [fieldNineText, fieldTenText];
const textField7: Array<string> = [fieldElevenText, fieldTwelveText];
const textField8: Array<string> = [fieldThirteenText, fieldFourteenText];
const textField9: Array<string> = [fieldFifteenText, fieldSixteenText];

const L1Types = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Types</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
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
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">type()</Text>
        </Heading>
        <TextLine textArray={textField7} />
        <Python trinketsrc="https://trinket.io/embed/python3/78e3061cf0" />
        <TextLine textArray={textField8} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Type Casting</Text>
        </Heading>
        <TextLine textArray={textField9} />
        <TableContainer w="75%">
          <Table colorScheme="blackAlpha" variant="striped">
            <Thead>
              <Tr>
                <Th>Function</Th>
                <Th>Converts To</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>str()</Td>
                <Td>String</Td>
              </Tr>
              <Tr>
                <Td>int()</Td>
                <Td>Integer</Td>
              </Tr>
              <Tr>
                <Td>float()</Td>
                <Td>Float</Td>
              </Tr>
              <Tr>
                <Td>bool()</Td>
                <Td>
                  Boolean (but this is usually done implicitly unlike other
                  typecasts)
                </Td>
              </Tr>
              <Tr>
                <Td>ord()</Td>
                <Td>Unicode Number (see Lesson 9)</Td>
              </Tr>
              <Tr>
                <Td>chr()</Td>
                <Td>Unicode char from a unicode number (see Lesson 9)</Td>
              </Tr>
              <Tr>
                <Td>hex()</Td>
                <Td>Hexadecimal from Integer (see Lesson 9)</Td>
              </Tr>
            </Tbody>
            <TableCaption>
              Types Casting functions in Python - many more exist
            </TableCaption>
          </Table>
        </TableContainer>
        <Python trinketsrc="https://trinket.io/embed/python3/26e904f750" />
      </Stack>
    </>
  );
};

export default L1Types;
