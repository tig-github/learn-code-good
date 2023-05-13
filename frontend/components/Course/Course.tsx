import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Stack, Container, Text, Heading, Button } from "@chakra-ui/react";

const Course = ({
  route,
  heading,
  lessons,
  text,
  img,
}: {
  route: string;
  heading: string;
  lessons: string;
  text: string;
  img: string;
}) => {
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
          <Image src={img} width={500} height={500} alt="Coder" />
          <Container maxW="80%">
            <Text align="left">{text}</Text>
          </Container>
          <Link href={`${route}`}>
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
