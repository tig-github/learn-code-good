import React from "react";
import Image from "next/image";
import { Box, Stack, Text, Heading } from "@chakra-ui/react";

const CourseView = ({
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
        w="100%"
        h="100%"
        minH="25rem"
        minW="22rem"
        mx="2rem"
        p={4}
      >
        {/*should move mx (margin-x) to starredcourses later*/}
        <Stack gap={6} align="center">
          <Heading size="lg">
            <Text align="center">{heading}</Text>
          </Heading>
          <Text align="center">Lessons: {lessons}</Text>
          <Image src={img} width={250} height={250} alt="Coder" />
        </Stack>
      </Box>
    </>
  );
};

export default CourseView;
