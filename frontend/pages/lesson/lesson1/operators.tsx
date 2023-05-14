import React from "react";
import { Stack, Text, Heading, Button, Box } from "@chakra-ui/react";
import Goal from "../../../components/Goal";
import Skip from "../../../components/Skip";
import Python from "../../../components/Python";
import TextLine from "../../../components/TextLine";
import TableView from "@/components/TableView";
import Exercises from "@/components/Exercises";
import { TableType } from "../../../utils/GlobalTypes";

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
const fieldFiveText: string = `In the trinket interpreter above or your own local environment, try writing a program that
uses all of the math operators above. `;
const fieldSixText: string = `We have already discussed how assignment works in the Variable section. Assignment is an operator that binds the value on the
right hand side of the operator to the left hand side variable. What it does is, it looks at what is on the left of the equal sign. It then places it
inside of the variable on the right of the equal sign.`;
const fieldSevenText: string = `The exact mechanisms for this will be looked at in Lesson 9 - variables are basically just
locations in memory. For now, assume they hold the value.`;
const fieldEightText: string = `There are actually many assignment operators, but all are just syntactic sugar (aka shortcuts) to make our
lives a little bit easier.`;
const fieldNineText: string = `Comparison are used to compare two values against each other. This will become useful in Lesson 2, so some of the
more detailed semantics of them will be revisited then.`;
const fieldTenText: string = `They work as you would expect with numbers, though can vary a bit with other types. With
strings, for example, they compare by placement in the alphabet.`;
const fieldElevenText: string = `Logical operators deserve some of their own treatment. And will return True if
both values are true, otherwise False. Or will return True when either value is True, else False. Basically
they work as shown in this chart. Not will flip the value - Not True is False, and Not False is True.`;
const fieldTwelveText: string = `Another note on logical operators - when using other values, some values will
implicitly be converted to True or False. The rule of thumb here is that empty things tend to be
False, and non-empty things tend to be true. For example, 0 and '' are false, 2 and "hello world" are true.`;
const fieldThirteenText: string = `Most string data is manipulated by various builtin functions, most of which we will
be learning in Lesson 2. There are two operators on strings we will learn ahead of time though, indexing and concatenation.`;
const fieldFourteenText: string = `Indexing allows you to access a particular character of a string. For example, in the string "Hello World!",
you could access the second letter by using indexing.`;
const fieldFifteenText: string = `The syntax is []. So if your string was stored in the variable x, you would get the
first letter by using x[0]. But.... why x[0] and not x[1]?`;
const fieldSixteenText: string = `Python, and the vast majority of other languages, are zero-indexed. This means, when it comes to
anything index related, you start counting from 0. Why? History mostly, with details we will see in Lesson 9.`;
const fieldSeventeenText: string = `You can also access the string from behind using negative numbers. So -1 gives you the last char,
-2 gives you the next to last, etc. If you go out of bounds on either direction, you get an error (and believe me, you want to get an error).`;
const fieldEighteenText: string = `Most arithmetic operators will not work on strings, but you can use +. Concatenation is basically
adding strings on top of each other, so "Hello " + "World!" would give you "Hello World!"`;
const exerciseOne: string = `Concatenate multiple strings to form a sentence.`;
const exerciseTwo: string = `Let x = 2. Make it so x becomes 30, using only assignment operators. So no standalone arithmetic operators.`;
const exerciseThree: string = `Let x = True, y = False. Rewrite the expression "not (x or y)" without any parentheses. HINT: look up Demorgan's Law.`;
const exerciseFour: string = `Use arithmetic operators to find out if 15 is divisible by 3. HINT: Consider %`;

const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText, fieldFourText];
const textField3: Array<string> = [fieldFiveText];
const textField4: Array<string> = [
  fieldSixText,
  fieldSevenText,
  fieldEightText,
];
const textField5: Array<string> = [fieldNineText];
const textField6: Array<string> = [fieldTenText, fieldElevenText];
const textField7: Array<string> = [fieldTwelveText];
const textField8: Array<string> = [fieldThirteenText];
const textField9: Array<string> = [
  fieldFourteenText,
  fieldFifteenText,
  fieldSixteenText,
  fieldSeventeenText,
];
const textField10: Array<string> = [fieldEighteenText];
const exerciseField: Array<string> = [
  exerciseOne,
  exerciseTwo,
  exerciseThree,
  exerciseFour,
];

const operatorTable: TableType = [
  [2, 7],
  ["Operator"],
  ["Name"],
  ["+"],
  ["Addition"],
  ["-"],
  ["Subtraction"],
  ["*"],
  ["Multiplication"],
  ["/"],
  ["Division"],
  ["%"],
  ["Modulo (division remainder)"],
  ["**"],
  ["Exponentiation"],
  ["//"],
  ["Integer Division"],
  ["Arithmetic Operators in Python"],
];

const assignmentTable: TableType = [
  [2, 8],
  ["Operator"],
  ["Name"],
  ["="],
  ["Assignment"],
  ["+="],
  ["Add to itself then assign"],
  ["-="],
  ["Subtract from itself then assign"],
  ["*="],
  ["Multiply by itself then assign"],
  ["/="],
  ["Divide by itself then assign"],
  ["%="],
  ["Modulo (division remainder) from itself then assign"],
  ["**="],
  ["Exponentiation to itself then assign"],
  ["//="],
  ["Integer division by itself then assign"],
  ["Assignment Operators in Python"],
];

const logicTable: TableType = [
  [2, 8],
  ["Operator"],
  ["Name"],
  ["<"],
  ["Less than"],
  [">"],
  ["Greater than"],
  ["<="],
  ["Less than or Equal to"],
  [">="],
  ["Greater than or Equal to"],
  ["=="],
  ["Equals"],
  ["!="],
  ["Not Equals"],
  ["and"],
  ["Logical And"],
  ["or"],
  ["Logical Or"],
  ["not"],
  ["Logical Negation"],
  ["Comparison and Logical Operators in Python"],
];

const booleanTable: TableType = [
  [5, 2],
  ["Operator"],
  ["True op True"],
  ["True op False"],
  ["False op True"],
  ["False op False"],
  ["and"],
  ["True"],
  ["False"],
  ["False"],
  ["False"],
  ["or"],
  ["True"],
  ["True"],
  ["True"],
  ["False"],
  ["Boolean Algebra in Python"],
];

const L1Operators = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading>
          <Text align="center">Operators</Text>
        </Heading>
        <Box>
          <Goal text={goalOneText} />
          <Skip text={skipText} />
        </Box>
        <TextLine textArray={textField1} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Mathematical</Text>
        </Heading>
        <TableView tableData={operatorTable} />
        <TextLine textArray={textField2} />
        <Python trinketsrc="https://trinket.io/embed/python3/bab2a94f6c" />
        <TextLine textArray={textField3} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Assignment</Text>
        </Heading>
        <TextLine textArray={textField4} />
        <TableView tableData={assignmentTable} />
        <Python trinketsrc="https://trinket.io/embed/python/4b624e0ad3" />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">Comparison and Logical</Text>
        </Heading>
        <TextLine textArray={textField5} />
        <TableView tableData={logicTable} />
        <TextLine textArray={textField6} />
        <TableView tableData={booleanTable} />
        <TextLine textArray={textField7} />
        <Python trinketsrc="https://trinket.io/embed/python/347222cb14" />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="2xl">String Operators</Text>
        </Heading>
        <TextLine textArray={textField8} />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Indexing</Text>
        </Heading>
        <TextLine textArray={textField9} />
        <Python trinketsrc="https://trinket.io/embed/python/eba579e27d" />
        <Heading mb="6rem" ml="25rem">
          <Text fontSize="xl">Concatenation</Text>
        </Heading>
        <TextLine textArray={textField10} />
        <Exercises exerciseArray={exerciseField} />
        <Button w="45%" colorScheme="green">
          Lesson Complete
        </Button>
      </Stack>
    </>
  );
};

export default L1Operators;
