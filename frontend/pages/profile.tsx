import React from "react";
import { Stack, Text, Heading } from "@chakra-ui/react";
import StarredCourses from "../components/Course/StarredCourses";
import CourseViewObject from "../utils/GlobalTypes";

const Profile = () => {
  const user = "Default Username";
  const courseOne: CourseViewObject = {
    headString: "Learn Programming",
    lessonsString: "11",
    imageString: "/images/royaltyfreeprogrammer.jpg",
  };

  const courses: Array<CourseViewObject> = [courseOne];
  return (
    <>
      <Stack gap={24} my="6rem" align="center">
        <Heading>
          <Text align="center">print(`Hello {user}`)</Text>
        </Heading>
        <StarredCourses courseList={courses} />
      </Stack>
    </>
  );
};

export default Profile;
