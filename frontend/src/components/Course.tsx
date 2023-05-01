import React from "react";
import {
  Box,
  Stack,
  Container,
  Text,
  Heading,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Course = ({ route, heading, lessons, text, img }) => {
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
            <Text align="center">{heading}</Text>
          </Heading>
          <Text align="center">Lessons: {lessons}</Text>
          <Image boxSize="50%" src={img} />
          <Container maxW="80%">
            <Text align="left">{text}</Text>
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
