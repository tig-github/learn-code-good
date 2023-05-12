import React from "react";
import { Stack, Text, Heading } from "@chakra-ui/react";
import StarredCourses from "../components/StarredCourses";

type CourseObject = {
  r: string;
  head: string;
  l: string;
  t: string;
  i: string;
};

const Profile = () => {
  const user = "Default Username";
  const courseOneText: string = `
This course takes you through the basics of programming. The
language covered for the majority of the course is Python. Lessons
will cover fundemental topics in programming including Syntax,
Control Flow, Functions, Recursion, and more. Lessons will expand
on more advance topics in Python and programming, will guide users
directly into building useful projects, and will expose users to
fundementals beyond Python including memory management and data
structures.`;
  const courses: Array<CourseObject> = [
    {
      r: "/lesson/lesson1",
      head: "Learn Programming",
      l: "11",
      t: courseOneText,
      i: "/images/royaltyfreeprogrammer.jpg",
    },
  ];
  return (
    <>
      <Stack gap={24} my="6rem" align="center">
        <Heading>
          <Text align="center">print(`Hello {user}`)</Text>
        </Heading>
        <StarredCourses courseList={courses} />
        <Text align="center">Progress:</Text>
      </Stack>
    </>
  );
};

export default Profile;
