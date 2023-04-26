import React from "react";
import {
  Stack,
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";

const LessonOne = () => {
  return (
    <>
      <Stack my="6rem" align="center">
        <Heading mb="3rem">
          <Text>Lesson One</Text>
        </Heading>
        <Text>It all starts here!</Text>
      </Stack>
    </>
  );
};

export default LessonOne;
