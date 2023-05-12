import React from "react";
import { Stack, Text, Heading } from "@chakra-ui/react";

const Profile = () => {
  const user = "Default Username";
  return (
    <>
      <Stack gap={12} my="6rem" align="center">
        <Heading>
          <Text align="center">print(`User {user}`)</Text>
        </Heading>
        <Text align="center">Starred Courses: Progress:</Text>
      </Stack>
    </>
  );
};

export default Profile;
