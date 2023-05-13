import React from "react";
import { Stack, Container, Text, Heading, Grid, Box } from "@chakra-ui/react";
import Course from "../components/Course/Course";

// const courseOneText: string = `
// This course takes you through the basics of programming. The
// language covered for the majority of the course is Python. Lessons
// will cover fundemental topics in programming including Syntax,
// Control Flow, Functions, Recursion, and more. Lessons will expand
// on more advance topics in Python and programming, will guide users
// directly into building useful projects, and will expose users to
// fundementals beyond Python including memory management and data
// structures.`;

const courseOneText: string = `Beyond the fundamentals: Syntax to Data Structures`;

const Courses = () => {
  return (
    <>
      <Heading mt="2rem">
        <Text align="center">print('Courses')</Text>
      </Heading>

      <Box p="4rem">
        <Grid templateColumns="repeat(4, minmax(0,1fr))" gap="1rem">
          <Course
            route="/lesson/lesson1"
            heading={"Learn Programming -- Python"}
            lessons={"11"}
            text={courseOneText}
            img={"/images/royaltyfreeprogrammer.jpg"}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Courses;
