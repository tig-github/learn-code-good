import React from "react";
import { Box, Grid, Image, Stack, Text, Heading } from "@chakra-ui/react";

const CourseView = ({
  heading,
  lessons,
  img,
}: {
  heading: string;
  lessons: string;
  img: string;
}) => {
  return (
    <>
      {/*should move mx (margin-x) to starredcourses later*/}
      <Box
        transition={"all 0.5s"}
        _hover={{
          transform: "rotate(0) skew(0) skewY(0) scaleX(1.05) scaleY(1.05)",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        bgColor="rgb(42, 46, 53)"
        maxW="24rem"
        borderRadius="0.75rem"
      >
        <Box bgColor="#323232" p="1.25rem" pb="0" borderTopRadius="0.75rem">
          <Image src={img} />
        </Box>
        <Stack align="center" p="1.25rem" pt={0} mb="1.5rem">
          <Heading mt="2rem" size="lg">
            <Text
              align="center"
              fontWeight="400"
              fontSize="1.25rem"
              color="white"
            >
              {heading} (lessons: {lessons})
            </Text>
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default CourseView;
