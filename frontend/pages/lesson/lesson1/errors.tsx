import React from "react";
import {
  Stack,
  Image,
  Text,
  Heading,
  Box,
  Button,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import TextLine from "../../../components/TextLine";
import TableView from "@/components/TableView";
import { TableType } from "../../../utils/GlobalTypes";

const goalOneText: string = "Learn basics about Python Errors.";
const skipText: string =
  "You have used Python before and know what each type of Error means.";
const fieldOneText: string = `You probably have run into a few errors already if you have been
doing some of the code on your own environment. Python errors occur when a specific
disallowed event happens in the code, triggering an exception. `;
const fieldTwoText: string = `Whenever an error occurs, an exception will be raised. Exceptions, also called
logical errors or runtime errors, are raised by the Python interpreter when something "bad" happens. For example,
if you try to divide 2 by 0, it realizes this is mathematically impossible, and raises the exception.`;
const fieldThreeText: string = `The only error that is handled differently is a SyntaxError - if you mistype something and
the parser (thing that reads the code you type) doesn't understand it, the code will fail before
even being run.`;
const fieldFourText: string = `Notice how here, the print statement never executes. Now see below how it will.`;
const fieldFiveText: string = `The following are some of the most common exceptions in Python.`;

const textField1: Array<string> = [fieldOneText, fieldTwoText, fieldThreeText];
const textField2: Array<string> = [fieldFourText];
const textField3: Array<string> = [fieldFiveText];

const errorTable: TableType = [
  [2, 6],
  ["Exception"],
  ["When it Executes"],
  ["Syntax Errors"],
  ["Parser (program reader) does not understand the code (usually a typo)"],
  ["Name Error"],
  ["Trying to use a variable that does not exist yet"],
  ["Type Error"],
  ["Trying to use an operator on a type that does not support it"],
  ["IndexError"],
  ["Indexing out of the bounds of a structured datatype (Lesson 3)"],
  ["ValueError"],
  [
    `Passing a parameter into a function that does not support it
  (e.g. pass -1 into square root)`,
  ],
  ["Exceptions in Python"],
];

const L1Syntax = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Errors</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <TextLine textArray={textField1} />
        <Image w="75%" src="/images/exception1.PNG" />
        <Image w="75%" src="/images/exception2.PNG" />

        <TextLine textArray={textField2} />
        <Image w="75%" src="/images/exception3.PNG" />
        <Image w="75%" src="/images/exception4.PNG" />

        <TextLine textArray={textField3} />
        <TableView tableData={errorTable} />
        <Button w="45%" colorScheme="green">
          Lesson Complete
        </Button>
      </Stack>
    </>
  );
};

export default L1Syntax;
