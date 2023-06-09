import React from "react";
import { Stack, Box, Flex, Text, Heading } from "@chakra-ui/react";
import CourseView from "./CourseView";
import { CourseViewObject } from "../../utils/GlobalTypes";

const StarredCourses = ({
  courseList,
}: {
  courseList: Array<CourseViewObject>;
}) => {
  return (
    <>
      <Stack align="center" gap={6}>
        <Heading as="h3" size="lg">
          <Text>Starred Courses</Text>
        </Heading>
        <Box
          borderWidth=".05rem"
          borderRight="None"
          borderLeft="None"
          borderColor="black"
          w="calc(100vw)"
          p="1rem"
          pb="0rem"
        >
          <Flex overflowX="scroll" w="100%">
            {courseList.map(
              ({
                headString,
                lessonsString,
                imageString,
              }: CourseViewObject) => {
                return (
                  <CourseView
                    heading={headString}
                    lessons={lessonsString}
                    img={imageString}
                  />
                );
              }
            )}
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default StarredCourses;
