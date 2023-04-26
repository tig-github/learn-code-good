import React from "react";
import {
  Stack,
  Container,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import Course from "../../../components/Course";
import Sidebar from "../../../components/Sidebar";

const LessonOne = () => {
  return (
    <>
      <Grid>
        <Stack gap={12} my="6rem" align="center">
          <Heading mb="3rem">
            <Text align="center">Lesson One</Text>
          </Heading>
        </Stack>
        <Sidebar />
      </Grid>
    </>
  );
};

export default LessonOne;
