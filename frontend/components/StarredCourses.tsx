import React from "react";
import { Stack, Flex, Text, Heading } from "@chakra-ui/react";
import Course from "../components/Course";

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
      <Heading as="h3" size="lg">
        <Text>Starred Coureses</Text>
      </Heading>
      <Flex maxH="20rem" overflow="scroll">
        {courseList.map(({ r, head, l, t, i }: CourseObject) => {
          return (
            <Course
              route={r}
              heading={head}
              lessons={l}
              text={t}
              img={i}
            ></Course>
          );
        })}
      </Flex>
    </>
  );
};

export default StarredCourses;
