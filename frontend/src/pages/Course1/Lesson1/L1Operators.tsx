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

const goalOneText: string = "Gain familiarity with common Python operators.";
const skipText: string = "You have used most common Python operators before.";
const fieldOneText: string = `An operator is a symbol that preforms an operation on data. Essentially it is
how the programmer manipulates data. Most operators are very familiar, including addition, subtraction, etc.
Python has a rich set of operators to use.`;
const fieldTwoText: string = `There are a few interesting operators to take note of. First, exponentiation x**y takes the form
x^y, or x to the power of y. `;
const fieldThreeText: string = `Second, Python supports two operators for division with remainder. Modulo will give remainder,
where x % y will give the remainder of x divided by y.`;
const fieldFourText: string = `Integer division will round down the result of normal division, so
5 // 2 would give 2. This is useful when you need to work with integer types, as opposed to float types. Another note on
Modulo, it can be used to check if a number is divisible by another, though I'll let you reason out how.`;
const fieldFiveText: string = `In the trinket interperter above or your own local environment, try writing a program that
uses all of the math operators above. `;
const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText, fieldFourText];
const textField3: Array<string> = [fieldFiveText];

const L1Operators = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Operators</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
        <TextLine textArray={textField1} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Mathematical</Text>
        </Heading>
        <TableContainer w="75%">
          <Table colorScheme="blackAlpha" variant="striped">
            <Thead>
              <Tr>
                <Th>Operator</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>+</Td>
                <Td>Addition</Td>
              </Tr>
              <Tr>
                <Td>-</Td>
                <Td>Subtraction</Td>
              </Tr>
              <Tr>
                <Td>*</Td>
                <Td>Multiplication</Td>
              </Tr>
              <Tr>
                <Td>/</Td>
                <Td>Division</Td>
              </Tr>
              <Tr>
                <Td>%</Td>
                <Td>Modulo (division remainder)</Td>
              </Tr>
              <Tr>
                <Td>**</Td>
                <Td>Exponentiation</Td>
              </Tr>
              <Tr>
                <Td>//</Td>
                <Td>Integer Division</Td>
              </Tr>
            </Tbody>
            <TableCaption>Arithmetic Operators in Python</TableCaption>
          </Table>
        </TableContainer>
        <TextLine textArray={textField2} />
        <Python trinketsrc="https://trinket.io/embed/python3/bab2a94f6c" />
        <TextLine textArray={textField3} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Assignment</Text>
        </Heading>
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Indexing</Text>
        </Heading>
      </Stack>
    </>
  );
};

export default L1Operators;
