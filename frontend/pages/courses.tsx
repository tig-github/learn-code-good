import React from "react";
import { Stack, Container, Text, Heading } from "@chakra-ui/react";
import Course from "../components/Course";

const courseOneText: string = `
This course takes you through the basics of programming. The
language covered for the majority of the course is Python. Lessons
will cover fundemental topics in programming including Syntax,
Control Flow, Functions, Recursion, and more. Lessons will expand
on more advance topics in Python and programming, will guide users
directly into building useful projects, and will expose users to
fundementals beyond Python including memory management and data
structures.`;

const Courses = () => {
  return (
    <>
      <Stack gap={12} my="6rem" align="center">
        <Heading mb="3rem">
          <Text align="center">print(`Courses`)</Text>
        </Heading>
        <Course
          route="/lesson/lesson1"
          heading={"Learn Programming"}
          lessons={"11"}
          text={courseOneText}
          img={'/images/royaltyfreeprogrammer.jpg'}
        />
      </Stack>
    </>
  );
};

export default Courses;
