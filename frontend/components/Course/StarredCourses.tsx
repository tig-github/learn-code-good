import React from "react";
import { Stack, Box, Flex, Text, Heading } from "@chakra-ui/react";
import CourseView from "./CourseView";

type CourseObject = {
  r: string;
  head: string;
  l: string;
  t: string;
  i: string;
};

const StarredCourses = ({
  courseList,
}: {
  courseList: Array<CourseObject>;
}) => {
  return (
    <>
      <Stack align="center" gap={12}>
        <Heading as="h3" size="lg">
          <Text>Starred Coureses</Text>
        </Heading>
        <Box
          borderWidth=".05rem"
          borderRight="None"
          borderLeft="None"
          borderColor="black"
          w="calc(100vw)"
        >
          <Flex overflowX="scroll" w="100%">
            {courseList.map(({ r, head, l, t, i }: CourseObject) => {
              return (
                <CourseView
                  route={r}
                  heading={head}
                  lessons={l}
                  text={t}
                  img={i}
                />
              );
            })}
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default StarredCourses;
