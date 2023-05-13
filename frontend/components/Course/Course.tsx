import React from "react";
import Link from "next/link";
import {
  Box,
  Stack,
  Container,
  Text,
  Heading,
  Image,
  Button,
  Grid,
  useStyleConfig,
} from "@chakra-ui/react";

const Course = ({
  route,
  heading,
  lessons,
  text,
  img,
}: {
  route: string;
  heading: string;
  lessons: string;
  text: string;
  img: string;
}) => {
  return (
    <Box
      transition={"all 0.5s"}
      _hover={{
        transform: "rotate(0) skew(0) skewY(0) scaleX(1.05) scaleY(1.05)",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      bgColor="rgb(42, 46, 53)"
      maxW="24rem"
      h="85%"
      minH="25rem"
      borderRadius="0.75rem"
    >
      <Grid templateRows="repeat(2, minmax(0,1fr))">
        <Box bgColor="#323232" p="1.25rem" pb="0" borderTopRadius="0.75rem">
          <Image src={img} />
        </Box>
        <Stack align="center" p="1.25rem" pt={0} mb="6.6rem">
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
          <Container maxW="90%">
            <Text mb="0.5rem" align="center" color="rgb(178, 190, 205)">
              {text}
            </Text>
          </Container>
          <Link href={`${route}`}>
            <Button colorScheme="green" w="100%">
              Begin
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Course;
