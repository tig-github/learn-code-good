import React from "react";
import Link from "next/link";
import LessonIcon from "./LessonIcon";
import {
  Image,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderRight="None"
        borderColor="grey"
        w="100%"
        p={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <Flex align="left" mx="1rem">
          <Link href="/">
            <Image
              src={"/images/main_logo.png"}
              w="40px"
              h="40px"
              mr="2rem"
              mt="0.2rem"
            />
          </Link>
          <ButtonGroup gap={3}>
            <Link href="/">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Courses
              </Button>
            </Link>
            <Link href="/about">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                About
              </Button>
            </Link>
          </ButtonGroup>
          <Spacer />
          {router.pathname.includes("lesson") && <LessonIcon />}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
