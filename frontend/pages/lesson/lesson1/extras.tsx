import React from "react";
import { Stack, Image, Text, Heading } from "@chakra-ui/react";
import TextLine from "../../../components/TextLine";

const fieldOneText: string = `These sections are just for small notes at the end of lessons and further readings.`;
const fieldTwoText: string = `Future lessons will not be constantly referring to upcoming lessons like I did here. It probably
gets annoying, but early here I wanted to help inspire curious students on how much there is ahead, and to avoid bogging
students down on details that will be treated better later.`;
const fieldThreeText: string = `If you are curious about what variables actually are but don't want to skip ahead, they are essentially
locations in memory. Memory itself can be thought of as a giant list of sequential numbers (so 1,2,3,4) that each can store a certain amount of data. A 
variable is basically a 'pointer' to a location in memory to store your data. So assignment really is saying, I want to put my data in this location.`;
const fieldFourText: string = `However, that is more of a general way in how variables work. Variables are actually implemented differently in the Python interperter
according to the Python Data Model in Lesson 5. In Python, everything is an object, which itself is just a way to abstract data.
The semantics of this can get pretty complicated though, and a lot of it is currently beyond me as well. Basically, you can go super
deep even in simple concepts like variables, so it helps to draw the line very very early when first learning. `;
const fieldFiveText: string = `Types are another area we can deep dive into. Python being dynamically typed means they acn
mostly be invisible, though Python being strongly typed means you can't just use them as you please. Other langauges will mandate
that your variable have a certain type, and you cannot assign different types to it - among other things. There is a lot of value
in this in terms of optimization and catching bugs.`;
const fieldSixText: string = `Other languages are even more lax than python. notably Javascript. In these langauges,
the interpreter won't actually tell you not to use operators on different types, it will just lead to unpredictable
behavior. So if you have a typo, and instead of adding 2 and 2 you add 2 and "2", you might end up with "22", or maybe
you'll end up with 4, or maybe even a None type. It depends on the language, type, etc. On the flipside, it gives you a huge
amount of flexibility to work with.`;
const fieldSevenText: string = `I don't expect most students to be familiar with bit manipulation and binary math at this point. Logical
operators are an essential to manipulate control flow, but in Python especially you will very rarely mess with bits directly, except in very
niche cases or for fun stuff like competitive programming. They are important for sure, but I expect most people will find them
when they need them.`;

const textField1: Array<string> = [
  fieldOneText,
  fieldTwoText,
  fieldThreeText,
  fieldFourText,
  fieldFiveText,
  fieldSixText,
  fieldSevenText,
];

const L1Extras = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Extras</Text>
        </Heading>
        <TextLine textArray={textField1} />
      </Stack>
    </>
  );
};

export default L1Extras;