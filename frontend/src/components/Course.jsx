import React from "react";
import {
  Box,
  Stack,
  Container,
  Text,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Course = ({ route }) => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderColor="grey"
        w="50%"
        h="100%"
        minH="25rem"
        p={4}
      >
        <Stack gap={6} align="center">
          <Heading size="lg">
            <Text align="center">Learn Programming</Text>
          </Heading>
          <Text align="center">Lessons: 11</Text>
          <Container maxW="80%">
            <Text align="left">
              This course takes you through the basics of programming. The
              language covered for the majority of the course is Python. Lessons
              will cover fundemental topics in programming including Syntax,
              Control Flow, Functions, Recursion, and more. Lessons will expand
              on more advance topics in Python and programming, will guide users
              directly into building useful projects, and will expose users to
              fundementals beyond Python including memory management and data
              structures.
            </Text>
          </Container>
          <Link as={RouterLink} to={route}>
            <Button colorScheme="green" w="100%">
              Begin
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Course;
