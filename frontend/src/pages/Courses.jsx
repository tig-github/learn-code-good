import React from "react";
import { Stack, Container, Text, Heading } from "@chakra-ui/react";
import Course from "../components/Course";

const Courses = () => {
  return (
    <>
      <Stack gap={12} my="6rem" align="center">
        <Heading mb="3rem">
          <Text align="center">print('Courses')</Text>
        </Heading>
        <Course route="/lesson/lesson1" />
      </Stack>
    </>
  );
};

export default Courses;
