import React from "react";
import {
  Stack,
  Container,
  Box,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";

const LessonOne = () => {
  return (
    <>
      <SimpleGrid columns={2}>
        <Sidebar />
        <Stack my="6rem">
          <Heading mb="3rem">
            <Text>Lesson One</Text>
          </Heading>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default LessonOne;
